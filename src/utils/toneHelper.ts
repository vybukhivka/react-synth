import * as Tone from 'tone';

export const createDummySynth = () => {
  const synth = new Tone.Synth().toDestination();
  return synth;
};
