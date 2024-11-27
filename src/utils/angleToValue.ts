import { DragElement } from '../types/dragTypes';

export default function angleToValue(value: number, type: DragElement) {
  if (type === 'knob') {
    const percents = ((value + 45) / 270) * 100;
    return Number(percents.toFixed(2));
  }
  if (type === 'fader') return Math.round((value / 100) * 154);
  if (type === 'send') return Math.round((value / 100) * 48);
  return 0;
}
