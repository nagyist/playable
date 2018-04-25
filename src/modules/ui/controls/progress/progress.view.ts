import { TEXT_LABELS } from '../../../../constants';

import View from '../../core/view';

import { IView } from '../../core/types';
import { ITooltipReference, ITooltipService } from '../../core/tooltip';
import formatTime from '../../core/utils/formatTime';
import getProgressTimeTooltipPosition from './utils/getProgressTimeTooltipPosition';
import { progressTemplate, progressTimeIndicatorTemplate } from './templates';

import htmlToElement from '../../core/htmlToElement';
import getElementByHook from '../../core/getElementByHook';

import {
  IProgressViewStyles,
  IProgressViewCallbacks,
  IProgressViewConfig,
} from './types';

import progressViewTheme from './progress.theme';
import styles from './progress.scss';

const DATA_PLAYED = 'data-played-percent';

const getPercentBasedOnXPosition = (
  event: MouseEvent,
  element: HTMLElement,
) => {
  const boundingRect = element.getBoundingClientRect();
  const positionX = event.clientX;

  if (positionX < boundingRect.left) {
    return 0;
  }

  if (positionX > boundingRect.left + boundingRect.width) {
    return 100;
  }

  return (event.clientX - boundingRect.left) / boundingRect.width * 100;
};

class ProgressView extends View<IProgressViewStyles>
  implements IView<IProgressViewStyles> {
  private _callbacks: IProgressViewCallbacks;
  private _textMap;
  private _tooltipService: ITooltipService;
  private _syncButtonTooltipReference: ITooltipReference;

  private _isDragging: boolean;

  private _$node: HTMLElement;
  private _$hitbox: HTMLElement;
  private _$played: HTMLElement;
  private _$buffered: HTMLElement;
  private _$seekTo: HTMLElement;
  private _$timeIndicators: HTMLElement;
  private _$syncButton: HTMLElement;

  constructor(config: IProgressViewConfig) {
    const { callbacks, textMap, tooltipService, theme } = config;

    super(theme);

    this._callbacks = callbacks;
    this._textMap = textMap;
    this._tooltipService = tooltipService;

    this._initDOM();
    this._bindCallbacks();
    this._bindEvents();

    this._setPlayedDOMAttributes(0);
    this._setBufferedDOMAttributes(0);
    this.setUsualMode();
  }

  private _initDOM() {
    this._$node = htmlToElement(
      progressTemplate({
        styles: this.styleNames,
        themeStyles: this.themeStyles,
      }),
    );

    this._$played = getElementByHook(this._$node, 'progress-played');
    this._$buffered = getElementByHook(this._$node, 'progress-buffered');
    this._$seekTo = getElementByHook(this._$node, 'progress-seek-to');
    this._$timeIndicators = getElementByHook(
      this._$node,
      'progress-time-indicators',
    );
    this._$syncButton = getElementByHook(this._$node, 'progress-sync-button');
    this._syncButtonTooltipReference = this._tooltipService.createReference(
      this._$syncButton,
      {
        text: this._textMap.get(TEXT_LABELS.LIVE_SYNC_TOOLTIP),
      },
    );
    this._$hitbox = getElementByHook(this._$node, 'progress-hitbox');
  }

  private _bindCallbacks() {
    this._setPlayedByDrag = this._setPlayedByDrag.bind(this);
    this._startDragOnMouseDown = this._startDragOnMouseDown.bind(this);
    this._stopDragOnMouseUp = this._stopDragOnMouseUp.bind(this);
    this._startSeekToByMouse = this._startSeekToByMouse.bind(this);
    this._stopSeekToByMouse = this._stopSeekToByMouse.bind(this);
    this._syncWithLive = this._syncWithLive.bind(this);
  }

  private _bindEvents() {
    this._$hitbox.addEventListener('mousedown', this._startDragOnMouseDown);
    this._$hitbox.addEventListener('mousemove', this._startSeekToByMouse);
    this._$hitbox.addEventListener('mouseout', this._stopSeekToByMouse);

    window.addEventListener('mousemove', this._setPlayedByDrag);
    window.addEventListener('mouseup', this._stopDragOnMouseUp);

    this._$syncButton.addEventListener('click', this._syncWithLive);
  }

  private _unbindEvents() {
    this._$hitbox.removeEventListener('mousedown', this._startDragOnMouseDown);
    this._$hitbox.removeEventListener('mousemove', this._startSeekToByMouse);
    this._$hitbox.removeEventListener('mouseout', this._stopSeekToByMouse);
    this._$syncButton.removeEventListener('click', this._syncWithLive);

    window.removeEventListener('mousemove', this._setPlayedByDrag);
    window.removeEventListener('mouseup', this._stopDragOnMouseUp);
  }

  private _startDragOnMouseDown(event: MouseEvent) {
    if (event.button > 1) {
      return;
    }

    const percent = getPercentBasedOnXPosition(event, this._$hitbox);
    this._setPlayedDOMAttributes(percent);
    this._callbacks.onChangePlayedProgress(percent);

    this._startDrag();
  }

  private _stopDragOnMouseUp(event: MouseEvent) {
    if (event.button > 1) {
      return;
    }

    this._stopDrag();
  }

  private _startSeekToByMouse(event: MouseEvent) {
    const percent = getPercentBasedOnXPosition(event, this._$hitbox);

    this._setSeekToDOMAttributes(percent);
    this._callbacks.onSeekToByMouseStart(percent);
  }

  private _stopSeekToByMouse() {
    this._setSeekToDOMAttributes(0);
    this._callbacks.onSeekToByMouseEnd();
  }

  private _setPlayedByDrag(event: MouseEvent) {
    if (this._isDragging) {
      const percent = getPercentBasedOnXPosition(event, this._$hitbox);
      this._setPlayedDOMAttributes(percent);
      this._callbacks.onChangePlayedProgress(percent);
    }
  }

  private _startDrag() {
    this._isDragging = true;
    this._callbacks.onDragStart();
    this._$node.classList.add(this.styleNames.isDragging);
  }

  private _stopDrag() {
    if (this._isDragging) {
      this._isDragging = false;
      this._callbacks.onDragEnd();
      this._$node.classList.remove(this.styleNames.isDragging);
    }
  }

  private _setSeekToDOMAttributes(percent: number) {
    this._$seekTo.setAttribute('style', `width:${percent}%;`);
  }

  private _setPlayedDOMAttributes(percent: number) {
    this._$node.setAttribute(
      'aria-valuetext',
      this._textMap.get(TEXT_LABELS.PROGRESS_CONTROL_VALUE, { percent }),
    );
    this._$node.setAttribute('aria-valuenow', String(percent));
    this._$node.setAttribute(DATA_PLAYED, String(percent));
    this._$played.setAttribute('style', `width:${percent}%;`);
  }

  private _setBufferedDOMAttributes(percent: number) {
    this._$buffered.setAttribute('style', `width:${percent}%;`);
  }

  private _syncWithLive() {
    this._callbacks.onSyncWithLiveClick();
  }

  showSyncWithLive() {
    this._$syncButton.classList.remove(this.styleNames.hidden);
  }

  hideSyncWithLive() {
    this._$syncButton.classList.add(this.styleNames.hidden);
  }

  setLiveSyncStatus(isSync) {
    if (isSync) {
      this._$syncButton.classList.add(this.styleNames.liveSync);
      this._$played.setAttribute('style', `width:100%;`);
    } else {
      this._$syncButton.classList.remove(this.styleNames.liveSync);
    }
  }

  showProgressTimeTooltip({ time, percent }) {
    this._tooltipService.show({
      text: formatTime(time),
      position: tooltipContainerNode =>
        getProgressTimeTooltipPosition(
          percent,
          this._$hitbox,
          tooltipContainerNode,
        ),
    });
  }

  hideProgressTimeTooltip() {
    this._tooltipService.hide();
  }

  setLiveMode() {
    this._$node.classList.add(this.styleNames.inLive);

    this.showSyncWithLive();
  }

  setUsualMode() {
    this._$node.classList.remove(this.styleNames.inLive);

    this.hideSyncWithLive();
  }

  setPlayed(percent: number) {
    this._setPlayedDOMAttributes(percent);
  }

  setBuffered(percent: number) {
    this._setBufferedDOMAttributes(percent);
  }

  addTimeIndicator(percent: number) {
    this._$timeIndicators.appendChild(
      htmlToElement(
        progressTimeIndicatorTemplate({
          percent,
          styles: this.styleNames,
        }),
      ),
    );
  }

  clearTimeIndicators() {
    this._$timeIndicators.innerHTML = '';
  }

  hide() {
    this._$node.classList.add(this.styleNames.hidden);
  }

  show() {
    this._$node.classList.remove(this.styleNames.hidden);
  }

  getNode() {
    return this._$node;
  }

  destroy() {
    this._unbindEvents();
    this._syncButtonTooltipReference.destroy();

    if (this._$node.parentNode) {
      this._$node.parentNode.removeChild(this._$node);
    }

    delete this._$node;
    delete this._$buffered;
    delete this._$hitbox;
    delete this._$played;
    delete this._$seekTo;
    delete this._$syncButton;
    delete this._$timeIndicators;

    delete this._textMap;
  }
}

ProgressView.setTheme(progressViewTheme);
ProgressView.extendStyleNames(styles);

export default ProgressView;
