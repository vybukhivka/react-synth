import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SequencerState = {
  [trackId: string]: TrackSequencerState;
};

export type TrackSequencerState = {
  trigs: number[];
  velocity: number[];
  probability: number[];
  modSequence: number[];
  retrig: number[];
  length: number;
  direction: 'forward' | 'backward' | 'forwardBackward';
};

const defaultTrackState: TrackSequencerState = {
  trigs: Array(8).fill(0),
  velocity: Array(8).fill(0),
  probability: Array(8).fill(0),
  modSequence: Array(8).fill(0),
  retrig: Array(8).fill(0),
  length: 8,
  direction: 'forward',
};

const initialState: SequencerState = {
  track1: { ...defaultTrackState },
  track2: { ...defaultTrackState },
  track3: { ...defaultTrackState },
  track4: { ...defaultTrackState },
};

const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    updateTrigs: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        trigs: number[];
      }>,
    ) => {
      const { trackId, trigs } = action.payload;
      state[trackId].trigs = trigs;
    },
    updateVelocity: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        velocity: number[];
      }>,
    ) => {
      const { trackId, velocity } = action.payload;
      state[trackId].velocity = velocity;
    },
    updateProb: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        probability: number[];
      }>,
    ) => {
      const { trackId, probability } = action.payload;
      state[trackId].probability = probability;
    },
    updateMod: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        modSequence: number[];
      }>,
    ) => {
      const { trackId, modSequence } = action.payload;
      state[trackId].modSequence = modSequence;
    },
    updateRetrig: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        retrig: number[];
      }>,
    ) => {
      const { trackId, retrig } = action.payload;
      state[trackId].retrig = retrig;
    },
  },
});

export const {
  updateTrigs,
  updateVelocity,
  updateProb,
  updateMod,
  updateRetrig,
} = sequencerSlice.actions;
export const selectSequencer = (state: RootState): SequencerState =>
  state.sequencer;

export default sequencerSlice.reducer;
