import * as Tone from 'tone';

export const createDummySynth = (): Tone.Synth => {
  const synth = new Tone.Synth({
    oscillator: { type: 'sine' },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 0.2 },
    volume: -10,
  }).toDestination();
  return synth;
};
