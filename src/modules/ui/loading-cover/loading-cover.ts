import { VIDEO_EVENTS, UI_EVENTS, EngineState } from '../../../constants';

import playerAPI from '../../../core/player-api-decorator';

import View from './loading-cover.view';
import { IEventEmitter } from '../../event-emitter/types';
import { IPlaybackEngine } from '../../playback-engine/types';

export default class LoadingCover {
  static moduleName = 'loadingCover';
  static View = View;
  static dependencies = [
    'engine',
    'eventEmitter',
    'config',
    'bottomBlock',
    'rootContainer',
  ];

  private _eventEmitter: IEventEmitter;
  private _engine: IPlaybackEngine;
  private _bottomBlock;
  private _url;

  private _unbindEvents: Function;

  view: View;
  isHidden: boolean;

  constructor({ config, eventEmitter, engine, bottomBlock, rootContainer }) {
    this._eventEmitter = eventEmitter;
    this.isHidden = false;
    this._engine = engine;
    this._bottomBlock = bottomBlock;
    this._url = config.loadingCover;

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this._initUI();
    this.hide();
    this._bindEvents();

    if (this._url !== false) {
      rootContainer.appendComponentNode(this.node);
    }
  }

  get node() {
    return this.view.getNode();
  }

  private _bindEvents() {
    this._unbindEvents = this._eventEmitter.bindEvents(
      [
        [VIDEO_EVENTS.STATE_CHANGED, this._checkForWaitingState],
        [VIDEO_EVENTS.UPLOAD_SUSPEND, this.hide],
      ],
      this,
    );
  }

  private _checkForWaitingState({ nextState }) {
    switch (nextState) {
      case EngineState.LOAD_STARTED:
        if (this._engine.isPreloadAvailable) {
          this.show();
        }
        break;
      case EngineState.WAITING:
        if (!this._engine.isMetadataLoaded) {
          this.show();
        }
        break;
      case EngineState.READY_TO_PLAY:
        this.hide();
        break;

      /* ignore coverage */
      default:
        break;
    }
  }

  private _initUI() {
    this.view = new View({
      url: this._url,
    });
  }

  hide() {
    if (!this.isHidden) {
      this._eventEmitter.emit(UI_EVENTS.LOADING_COVER_HIDE_TRIGGERED);
      this.view.hide();
      this.isHidden = true;
    }
  }

  show() {
    if (this.isHidden) {
      this._bottomBlock.hideContent();
      this._eventEmitter.emit(UI_EVENTS.LOADING_COVER_SHOW_TRIGGERED);
      this.view.show();
      this.isHidden = false;
    }
  }

  /**
   * Method for setting source of image, that would be used as loading cover instead of loader.
   * @param src - Link to your image
   * @example
   * player.setLoadingCover('https://example.com/cover.png');
   *
   */
  @playerAPI()
  setLoadingCover(src: string) {
    this.view.setCover(src);
  }

  destroy() {
    this._unbindEvents();

    this.view.destroy();

    delete this.view;

    delete this._bottomBlock;
    delete this._eventEmitter;
    delete this._engine;
  }
}
