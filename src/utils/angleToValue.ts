import { DragElement } from '../types/dragTypes';

export default function angleToValue(angle: number, type: DragElement) {
  if (type === 'knob') {
    const percents = ((angle + 45) / 270) * 100;
    return Number(percents.toFixed(1));
  }
  if (type === 'fader') return Math.round((angle / 154) * 100);
  if (type === 'send') return Math.round((angle / 48) * 100);
  if (type === 'modMatrixCell') {
    const value = (angle / 50) * 2;
    return Number(value.toFixed(2));
  }
  if (type === 'modulator') {
    const value = (angle / 48) * 50;
    return Number(value.toFixed(2));
  }
  return 0;
}
