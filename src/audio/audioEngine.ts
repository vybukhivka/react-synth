import * as Tone from 'tone';
import store from '../store/store';
import {
  SequencerState,
  TrackSequencerState,
  updateNonArrayTrackProperty,
} from '../store/slices/sequencerSlice';

const isDebugMode = import.meta.env.MODE === 'development';
let pingPingDirection: 'forward' | 'backward' = 'forward';

const getNextStepIndex = (
  trackState: TrackSequencerState,
  trackId: keyof SequencerState,
): number => {
  const { length, direction } = trackState;
  let nextStep: number = 1;
  const currentStep = trackState.currentStep || 0;

  if (direction === 'forward') nextStep = (currentStep + 1) % length;

  if (direction === 'backward') {
    nextStep = currentStep - 1;
    if (nextStep === -1) nextStep = length;
  }

  if (direction === 'forwardBackward') {
    if (pingPingDirection === 'forward' && currentStep + 1 !== length)
      nextStep = currentStep + 1;
    else if (currentStep + 1 === length) pingPingDirection = 'backward';
    if (pingPingDirection === 'backward' && currentStep - 1 !== 0)
      nextStep = currentStep - 1;
    else if (currentStep - 1 === 0 && pingPingDirection === 'backward') {
      pingPingDirection = 'forward';
      nextStep = 0;
    }
    console.log(pingPingDirection, nextStep);
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
  synths: Array.from({ length: 4 }, () => new Tone.Synth().toDestination()),

  transport: Tone.getTransport(),
  clock: new Tone.Clock(time => {
    const state = store.getState().sequencer;

    Object.entries(state).forEach(([trackId, trackState]) => {
      const stepIndex = getNextStepIndex(trackState, trackId);
      if (trackState.trigs[stepIndex]) {
        const synthIndex = parseInt(trackId.replace('track', ''), 10) - 1;
        audioEngine.synths[synthIndex].triggerAttackRelease('C2', '16n', time);
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
    audioEngine.synths.forEach(synths => synths.dispose());
    audioEngine.clock.dispose();
    if (isDebugMode) console.log('Audio Engine Cleaned Up');
  },
};
