import $ from 'jbone';

import View from '../core/view';

import styles from './screen.scss';


const SECONDS_COUNT = 5;

class ScreenView extends View {
  constructor(config) {
    super(config);
    const { callbacks, nativeControls, indicateScreenClick, playbackViewNode } = config;

    this._nativeControls = nativeControls;
    this._indicateScreenClick = indicateScreenClick;
    this._callbacks = callbacks;
    this.$node = $('<div>', {
      class: this.styleNames['screen-block'],
      'data-hook': 'screen-block'
    });

    if (this._indicateScreenClick) {
      this.$iconContainer = $('<div>', {
        class: `${this.styleNames['icon-container']}`
      });

      this.$node.append(this.$iconContainer);
    }

    this.playIcon = `<div class="${this.styleNames.icon}"><svg class="${this.styleNames['play-icon']} ${this.styleNames['animated-icon']}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14"><path fill="#FFF" fill-rule="evenodd" d="M.079 0L0 14l10.5-7.181z"/></svg></div>`;
    this.pauseIcon = `<div class="${this.styleNames.icon}"><svg class="${this.styleNames['pause-icon']} ${this.styleNames['animated-icon']}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14"><path fill="#FFF" fill-rule="evenodd" d="M7 0h3v14H7V0zM0 0h3v14H0V0z"/></svg></div>`;
    this.forwardIcon = `<div class="${this.styleNames.icon}"><div class="${this.styleNames.seconds}"><span>${SECONDS_COUNT}</span></div><svg class="${this.styleNames['forward-icon']} ${this.styleNames['animated-icon']}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#FFF" fill-rule="evenodd" d="M17 0c4.59 0 8.84 1.87 11.9 4.93V1.7h3.4v10.2H22.1V8.5h5.44C24.99 5.27 21.25 3.4 17 3.4 9.52 3.4 3.4 9.52 3.4 17c0 7.48 6.12 13.6 13.6 13.6 7.48 0 13.6-6.12 13.6-13.6H34c0 9.35-7.65 17-17 17S0 26.35 0 17 7.65 0 17 0z"/></svg></div>`;
    this.rewindIcon = `<div class="${this.styleNames.icon}"><div class="${this.styleNames.seconds}"><span>${SECONDS_COUNT}</span></div><svg class="${this.styleNames['rewind-icon']} ${this.styleNames['animated-icon']}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path fill="#FFF" fill-rule="evenodd" d="M17 0C12.41 0 8.16 1.87 5.1 4.93V1.7H1.7v10.2h10.2V8.5H6.46C9.01 5.27 12.75 3.4 17 3.4c7.48 0 13.6 6.12 13.6 13.6 0 7.48-6.12 13.6-13.6 13.6-7.48 0-13.6-6.12-13.6-13.6H0c0 9.35 7.65 17 17 17s17-7.65 17-17S26.35 0 17 0z"/></svg></div>`;
    this.descreaseVolumeIcon = `<div class="${this.styleNames.icon}"><svg class="${this.styleNames['decrease-volume-icon']} ${this.styleNames['animated-icon']}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/><path stroke="#FFF" d="M9.853 10.837a5.45 5.45 0 0 0 0-7.707"/></g></svg></div>`;
    this.increaseVolumeIcon = `<div class="${this.styleNames.icon}"><svg class="${this.styleNames['increase-volume-icon']} ${this.styleNames['animated-icon']}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M0 3.919h2.993v5.97H0V3.92zm2.995-.015L7 .924v12L2.995 9.882v-5.98z"/><path stroke="#FFF" d="M12.793 13.716a9.607 9.607 0 0 0 0-13.586M9.853 10.837a5.45 5.45 0 0 0 0-7.707"/></g></svg></div>`;

    this._bindEvents();

    this.$topBackground = $('<div>', {
      class: this.styleNames['top-gradient-background']
    });

    this.$bottomBackground = $('<div>', {
      class: this.styleNames['bottom-gradient-background']
    });

    if (this._nativeControls) {
      playbackViewNode.setAttribute('controls', 'true');
    }

    this.$node
      .append(playbackViewNode)
      .append(this.$topBackground)
      .append(this.$bottomBackground);
  }

  _bindEvents() {
    this.$node[0].addEventListener('click', this._callbacks.onWrapperMouseClick);
    this.$node[0].addEventListener('dblclick', this._callbacks.onWrapperMouseDblClick);
    this.$node[0].addEventListener('keydown', this._callbacks.onWrapperKeyPress);
  }

  focusOnNode() {
    this.$node[0].focus();
  }

  activatePlayIcon() {
    this.$iconContainer.html(this.playIcon);
  }

  activatePauseIcon() {
    this.$iconContainer.html(this.pauseIcon);
  }

  activateForwardIcon() {
    this.$iconContainer.html(this.forwardIcon);
  }

  activateRewindIcon() {
    this.$iconContainer.html(this.rewindIcon);
  }

  activateIncreaseVolumeIcon() {
    this.$iconContainer.html(this.increaseVolumeIcon);
  }

  activateDecreaseVolumeIcon() {
    this.$iconContainer.html(this.descreaseVolumeIcon);
  }

  deactivateIcon() {
    this.$iconContainer.html('');
  }

  show() {
    this.$node.toggleClass(this.styleNames.hidden, false);
  }

  hide() {
    this.$node.toggleClass(this.styleNames.hidden, true);
  }

  getNode() {
    return this.$node[0];
  }

  showTopShadow() {
    this.$topBackground.addClass(this.styleNames.visible);
  }

  hideTopShadow() {
    this.$topBackground.removeClass(this.styleNames.visible);
  }

  showBottomShadow() {
    if (!this._nativeControls) {
      this.$bottomBackground.addClass(this.styleNames.visible);
    }
  }

  hideBottomShadow() {
    this.$bottomBackground.removeClass(this.styleNames.visible);
  }

  _unbindEvents() {
    this.$node[0].removeEventListener('click', this._callbacks.onWrapperMouseClick);
    this.$node[0].removeEventListener('dblclick', this._callbacks.onWrapperMouseDblClick);
    this.$node[0].removeEventListener('keypress', this._callbacks.onWrapperKeyPress);
  }

  appendComponentNode(node) {
    this.$node.append(node);
  }

  destroy() {
    this._unbindEvents();
    this.$node.remove();

    delete this.$node;
  }
}

ScreenView.extendStyleNames(styles);

export default ScreenView;
