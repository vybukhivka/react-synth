import * as Tone from 'tone';
import store from '../store/store';

export const createFmSynth = () => {
  const state = store.getState().tracks;

  const synth = new Tone.FMSynth({
    volume: -12,
    detune: 50,
    modulationIndex: 25,
    modulationEnvelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0,
      release: 0.1,
    },
    envelope: {
      attack: 0.005,
      decay: 0.25,
      sustain: 0,
      release: 0.25,
    },
  });

  const output = new Tone.Gain().toDestination();
  synth.connect(output);

  const trigger = (time = Tone.now()) => {
    synth.triggerAttackRelease('c2', '16n', time);
  };

  const dispose = () => {
    synth.dispose();
    output.dispose();
  };

  return { trigger, synth, dispose, output };
};
