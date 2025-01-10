import * as Tone from 'tone';
import store from '../store/store';

// dec env
// pitch env
// bitcrusher

export const createKickSynth = () => {
  const state = store.getState().tracks;

  const oscillator1 = new Tone.Oscillator({
    type: 'sine',
    frequency: state.track1.param1,
    volume: -12,
  });

  const oscillator2 = new Tone.Oscillator({
    type: 'sine',
    frequency: state.track1.param1 + 50,
    volume: -13,
  });

  const noise = new Tone.Noise({ type: 'pink', volume: -12 });

  const amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.005,
    decay: state.track1.param1,
    sustain: 0,
    release: state.track1.param1,
  });

  const pitchEnvelope = new Tone.FrequencyEnvelope({
    attack: 0.005,
    decay: 0.01,
    sustain: 0,
    release: 0.01,
    baseFrequency: state.track1.param1,
    octaves: 1.5,
  });

  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 1450,
    rolloff: -24,
  });

  pitchEnvelope.connect(oscillator1.frequency);
  oscillator1.connect(filter);
  oscillator2.connect(filter);
  noise.connect(filter);
  filter.connect(amplitudeEnvelope);
  amplitudeEnvelope.toDestination();

  oscillator1.start();
  oscillator2.start();
  noise.start();

  const trigger = (time = Tone.now()) => {
    const attack = amplitudeEnvelope.attack;
    const release = amplitudeEnvelope.release;
    const timing = time + attack + release;
    amplitudeEnvelope.triggerAttack(time);
    amplitudeEnvelope.triggerRelease(timing);
    pitchEnvelope.triggerAttackRelease(attack + release, time);
  };

  const setFrequencer = (frequency: number) => {
    pitchEnvelope.baseFrequency = frequency;
    oscillator1.frequency.value = frequency;
    console.log('frequency set: ', frequency);
  };

  const setDecay = (time: number) => {
    amplitudeEnvelope.decay = time;
    amplitudeEnvelope.release = time;
    console.log('dec set: ', time);
  };

  const setPitchEnv = (time: number) => {
    pitchEnvelope.decay = time;
    pitchEnvelope.release = time;
    console.log('dec set: ', time);
  };

  const dispose = () => {
    oscillator1.stop();
    oscillator2.stop();
    noise.stop();
    oscillator1.dispose();
    oscillator2.dispose();
    noise.dispose();
    amplitudeEnvelope.dispose();
    pitchEnvelope.dispose();
    filter.dispose();
  };

  return { trigger, setPitchEnv, setDecay, setFrequencer, dispose };
};
