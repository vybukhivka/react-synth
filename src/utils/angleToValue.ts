import { DragElement } from '../types/dragTypes';

export default function angleToValue(value: number, type: DragElement) {
  if (type === 'knob') {
    const percents = ((value + 45) / 270) * 100;
    return Number(percents.toFixed(2));
  }
  if (type === 'fader') return Math.round((value / 154) * 100);
  if (type === 'send') return Math.round((value / 48) * 100);
  return 0;
}
