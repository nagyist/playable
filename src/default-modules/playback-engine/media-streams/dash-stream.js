import { MediaPlayer } from 'dashjs';

import { ERRORS, MEDIA_STREAM_TYPES, MEDIA_STREAM_DELIVERY_TYPE, VIDEO_EVENTS } from '../../../constants/index';
import { getNearestBufferSegmentInfo } from '../../../utils/video-data';


const DashEvents = MediaPlayer.events;

export default class DashStream {
  static isSupported(env) {
    return env.MSE;
  }

  static canPlay(mediaType) {
    return mediaType === MEDIA_STREAM_TYPES.DASH;
  }

  constructor(mediaStreams, eventEmitter) {
    this.eventEmitter = eventEmitter;
    this.dashPlayer = null;
    this.mediaStream = null;
    this.videoElement = null;

    this.attachOnPlay = () => {
      if (!this.videoElement) {
        return;
      }
      this.dashPlayer.initialize(this.videoElement, this.mediaStream.url, true);

      if (this._initialBitrate) {
        this.dashPlayer.setInitialBitrateFor('video', this._initialBitrate);
      }
      this.videoElement.removeEventListener('play', this.attachOnPlay);
    };

    this.onError = errorEvent => {
      if (!errorEvent) {
        return;
      }
      if (errorEvent.error === 'manifestError' || (errorEvent.error === 'download' && errorEvent.event.id === 'manifest')) {
        this.eventEmitter.emit(
          VIDEO_EVENTS.ERROR,
          ERRORS.SRC_LOAD_ERROR,
          this.mediaStream && this.mediaStream.url,
          errorEvent
        );
      }
    };

    if (mediaStreams.length === 1) {
      this.mediaStream = mediaStreams[0];
    } else {
      throw new Error(`Can only handle a single DASH stream. Received ${mediaStreams.length} streams.`);
    }
  }

  attach(videoElement, initialBitrate) {
    if (!this.mediaStream) {
      return;
    }
    this._initialBitrate = initialBitrate;
    this.videoElement = videoElement;
    this.dashPlayer = MediaPlayer().create();
    this.dashPlayer.getDebug().setLogToBrowserConsole(false);
    this.dashPlayer.on(DashEvents.ERROR, this.onError);
    if (videoElement.preload === 'none') {
      this.dashPlayer.setScheduleWhilePaused(true);
      videoElement.addEventListener('play', this.attachOnPlay);
    } else {
      this.dashPlayer.initialize(videoElement, this.mediaStream.url, videoElement.autoplay);
      if (this._initialBitrate) {
        this.dashPlayer.setInitialBitrateFor('video', this._initialBitrate);
      }
    }
  }

  detach() {
    if (!this.mediaStream) {
      return;
    }
    this.dashPlayer.reset();
    this.dashPlayer.off(DashEvents.ERROR, this.onError);
    this.dashPlayer = null;
    this.videoElement = null;
  }

  getMediaStreamDeliveryType() {
    return MEDIA_STREAM_DELIVERY_TYPE.ADAPTIVE_VIA_MSE;
  }

  getDebugInfo() {
    const currentStream = this.dashPlayer.getActiveStream();
    let currentTime = 0;
    if (currentStream) {
      currentTime = this.dashPlayer.time(currentStream.getId());
    }

    const bitrates = this.dashPlayer.getBitrateInfoListFor('video');
    let currentBitrate = null;
    if (this.dashPlayer.getQualityFor('video') && bitrates) {
      currentBitrate = bitrates[this.dashPlayer.getQualityFor('video')];
    }

    const overallBufferLength = this.dashPlayer.getBufferLength('video');
    const currentTrack = this.dashPlayer.getCurrentTrackFor('video');
    const nearestBufferSegInfo = getNearestBufferSegmentInfo(this.dashPlayer.getVideoElement().buffered, currentTime);

    return {
      ...this.mediaStream,
      deliveryType: this.getMediaStreamDeliveryType(),
      bitrates,
      currentBitrate,
      overallBufferLength,
      currentTrack,
      nearestBufferSegInfo
    };
  }
}
