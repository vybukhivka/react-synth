import { DragElement } from '../types/dragTypes';

export default function angleToValue(angle: number, type: DragElement) {
  if (type === 'knob') {
    const percents = ((angle + 45) / 270) * 100;
    return Number(percents.toFixed(1));
  }
  if (type === 'fader') return Math.round((angle / 154) * 100);
  if (type === 'send') return Math.round((angle / 48) * 100);
  if (type === 'modMatrixCell') {
    const percents = (angle / 50) * 2;
    return Number(percents.toFixed(2));
  }
  return 0;
}
