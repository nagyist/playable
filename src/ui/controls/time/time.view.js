import $ from 'jbone';

import styles from './time.scss';


export function formatTime(seconds) {
  const date = new Date(null);
  seconds = isNaN(seconds) || !isFinite(seconds) ? 0 : Math.floor(seconds);
  date.setSeconds(seconds);

  // get HH:mm:ss part, remove hours if they are "00:"
  return date
    .toISOString()
    .substr(11, 8)
    .replace(/^00:/, '');
}

export default class TimeView {
  constructor() {
    this.$node = $('<div>', {
      class: styles['time-wrapper']
    });

    this.$currentTime = $('<span>', {
      class: `${styles.current} ${styles.time}`
    });
    this.$divider = $('<span>', {
      class: styles.time
    })
      .html('/');
    this.$durationTime = $('<span>', {
      class: `${styles.duration} ${styles.time}`
    });

    this.$node
      .append(this.$currentTime)
      .append(this.$divider)
      .append(this.$durationTime);
  }

  setDurationTime(duration) {
    this.$durationTime.html(formatTime(duration));
  }

  setCurrentTime(current) {
    this.$currentTime.html(formatTime(current));
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

  destroy() {
    this.$node.remove();

    delete this.$currentTime;
    delete this.$divider;
    delete this.$durationTime;
    delete this.$node;
  }
}
