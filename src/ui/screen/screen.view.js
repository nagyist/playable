import $ from 'jbone';

import styles from './screen.scss';


export default class ScreenView {
  constructor({ callbacks }) {
    this._callbacks = callbacks;
    this.$node = $('<div>', {
      class: styles['screen-block'],
      tabIndex: 0
    });

    this._bindEvents();
  }

  _bindEvents() {
    this.$node[0].addEventListener('click', this._callbacks.onWrapperMouseClick);
    this.$node[0].addEventListener('keypress', this._callbacks.onWrapperKeyPress);
  }

  show() {
    this.$node.toggleClass(styles.hidden, false);
  }

  hide() {
    this.$node.toggleClass(styles.hidden, true);
  }

  getNode() {
    return this.$node[0];
  }

  appendPlaybackViewNode(node) {
    this.$node.append(node);
  }

  _unbindEvents() {
    this.$node[0].removeEventListener('click', this._callbacks.onWrapperMouseClick);
    this.$node[0].removeEventListener('keypress', this._callbacks.onWrapperKeyPress);
  }

  destroy() {
    this._unbindEvents();
    this.$node.remove();

    delete this.$node;
  }
}