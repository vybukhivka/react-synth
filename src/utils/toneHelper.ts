import * as Tone from 'tone';

export const createDummySynth = (): Tone.Synth => {
  const synth = new Tone.Synth().toDestination();
  return synth;
};
