import { DragElement } from '../types/dragTypes';

export default function angleToValue(value: number, type: DragElement) {
  if (type === 'knob') return Math.round((value / 100) * 270 - 45);
  if (type === 'fader') return Math.round((value / 100) * 154);
  if (type === 'send') return Math.round((value / 100) * 48);
  return 0;
}
