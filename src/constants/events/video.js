const VIDEO_EVENTS = {
  ERROR: 'error',
  CAN_PLAY: 'can-play',
  STATE_CHANGED: 'state-changed',
  CHUNK_LOADED: 'chunk-loaded',
  METADATA_LOADED: 'metadata-loaded',
  CURRENT_TIME_UPDATED: 'current-time-updated',
  DURATION_UPDATED: 'duration-updated',
  LOAD_STARTED: 'load-started',
  LOADED_FIRST_CHUNK: 'loaded-first-chunk',
  SEEK_STARTED: 'seek-started',
  SEEK_ENDED: 'seek-ended',
  SET_CURRENT_TIME: 'set-current-time',
  VOLUME_STATUS_CHANGED: 'volume-status-changed',
  UPLOAD_STALLED: 'upload-stalled',
  UPLOAD_SUSPEND: 'upload-suspend',
  PLAY_REQUEST_TRIGGERED: 'play-request-triggered',
  PAUSE_REQUEST_TRIGGERED: 'pause-request-triggered'
};

export default VIDEO_EVENTS;
