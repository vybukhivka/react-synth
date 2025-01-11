import * as Tone from 'tone';
import store from '../store/store';
import {
  SequencerState,
  TrackSequencerState,
  updateNonArrayTrackProperty,
} from '../store/slices/sequencerSlice';
import { createKickSynth } from './kickSynth';

// const isDebugMode = import.meta.env.MODE === 'development';
const isDebugMode = false;

const getNextStepIndex = (
  trackState: TrackSequencerState,
  trackId: keyof SequencerState,
): number => {
  const { length, direction, pingPongDirection } = trackState;
  let nextStep: number = 0;
  const currentStep = trackState.currentStep || 0;

  if (direction === 'forward') {
    nextStep = (currentStep + 1) % length;
  }

  if (direction === 'backward') {
    nextStep = (currentStep - 1 + length) % length;
  }

  if (direction === 'forwardBackward') {
    if (pingPongDirection === 'forward') {
      if (currentStep + 1 < length) {
        nextStep = currentStep + 1;
      } else {
        store.dispatch(
          updateNonArrayTrackProperty({
            trackId,
            property: 'pingPongDirection',
            value: 'backward',
          }),
        );
        nextStep = currentStep - 1;
      }
    } else if (pingPongDirection === 'backward') {
      if (currentStep - 1 >= 0) {
        nextStep = currentStep - 1;
      } else {
        store.dispatch(
          updateNonArrayTrackProperty({
            trackId,
            property: 'pingPongDirection',
            value: 'forward',
          }),
        );
        nextStep = currentStep + 1;
      }
    }
  }

  store.dispatch(
    updateNonArrayTrackProperty({
      trackId,
      property: 'currentStep',
      value: nextStep,
    }),
  );
  return nextStep;
};

export const audioEngine = {
  kickSynth: createKickSynth(),
  triggerKick: (time: number) => {
    audioEngine.kickSynth.trigger(time);
  },

  transport: Tone.getTransport(),
  clock: new Tone.Clock(time => {
    const state = store.getState().sequencer;

    Object.entries(state).forEach(([trackId, trackState]) => {
      const stepIndex = getNextStepIndex(trackState, trackId);
      if (trackState.trigs[stepIndex]) {
        const synthIndex = parseInt(trackId.replace('track', ''), 10) - 1;
        if (synthIndex === 0) {
          audioEngine.triggerKick(time); // Use triggerKick for the kick track
        }
      }
    });

    if (isDebugMode) console.log(`Clock ticked at: ${time}`);
  }, 2),

  start: () => {
    Tone.start().then(() => {
      if (isDebugMode) console.log('Audio Context Started');
    });
  },
  startClock: () => {
    if (audioEngine.clock.state !== 'started') {
      audioEngine.clock.start();
      if (isDebugMode) {
        console.log('Clock Started');
      }
    }
  },
  stopClock: () => {
    if (audioEngine.clock.state === 'started') {
      audioEngine.clock.stop();
      if (isDebugMode) console.log('Clock Stoped');
    }
  },

  setBPM: (bpm: number) => {
    audioEngine.clock.frequency.value = (bpm / 60) * 4;
    if (isDebugMode) console.log(`BPM set to ${bpm}`);
  },

  cleanup: () => {
    audioEngine.kickSynth.dispose();
    // audioEngine.synths.forEach(synths => synths.dispose());
    audioEngine.clock.dispose();
    if (isDebugMode) console.log('Audio Engine Cleaned Up');
  },
};
