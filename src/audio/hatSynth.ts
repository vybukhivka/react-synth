import * as Tone from 'tone';
import store from '../store/store';

export const createHatSynth = () => {
  const state = store.getState().tracks;

  const noise = new Tone.Noise({
    type: 'white',
    volume: -12,
  });

  const amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.005,
    decay: 0.2,
    sustain: 0,
    release: 0.2,
  });

  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 7000,
    Q: 15,
    rolloff: -24,
  });

  const gain = new Tone.Gain(0.1);

  noise.connect(filter);
  filter.connect(amplitudeEnvelope);
  amplitudeEnvelope.connect(gain);
  gain.toDestination();

  noise.start();

  const trigger = (time = Tone.now()) => {
    const attack = amplitudeEnvelope.attack;
    const release = amplitudeEnvelope.release;
    const timing = time + attack + release;
    amplitudeEnvelope.triggerAttack(time);
    amplitudeEnvelope.triggerRelease(timing);
  };

  const setFrequency = (frequency: number) => {
    filter.set({ frequency });
  };

  const setDecay = (time: number) => {
    amplitudeEnvelope.decay = time;
    amplitudeEnvelope.release = time;
  };

  const dispose = () => {
    noise.stop();
    noise.dispose();
    amplitudeEnvelope.dispose();
    filter.dispose();
    gain.dispose();
  };

  return { trigger, setDecay, dispose, setFrequency };
};
