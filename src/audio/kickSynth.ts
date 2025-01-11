import * as Tone from 'tone';
import store from '../store/store';

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

  const noise = new Tone.Noise({ type: 'pink', volume: -24 });

  const bitCrusher = new Tone.BitCrusher(state.track1.param4 * 0.16);

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
    octaves: 2,
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
  amplitudeEnvelope.connect(bitCrusher);
  bitCrusher.toDestination();

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
  };

  const setDecay = (time: number) => {
    amplitudeEnvelope.decay = time;
    amplitudeEnvelope.release = time;
  };

  const setPitchEnv = (time: number) => {
    pitchEnvelope.decay = time;
    pitchEnvelope.release = time;
  };

  const setBitReduction = (bits: number) => {
    bitCrusher.bits.value = bits;
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

  return {
    trigger,
    setBitReduction,
    setPitchEnv,
    setDecay,
    setFrequencer,
    dispose,
  };
};
