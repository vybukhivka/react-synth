import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SequencerState = {
  [trackId: string]: TrackSequencerState;
};

export type TrackSequencerState = {
  trigs: boolean[];
  velocity: number[];
  probability: number[];
  modSequence: number[];
  retrig: number[];
  length: number;
  direction: 'forward' | 'backward' | 'forwardBackward';
};

const defaultTrackState: TrackSequencerState = {
  trigs: Array(8).fill(false),
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
    updateTrackProperty: (
      state: SequencerState,
      action: PayloadAction<{
        trackId: keyof SequencerState;
        property: keyof TrackSequencerState;
        step: number;
        value: number | string | boolean;
      }>,
    ) => {
      const { trackId, property, step, value } = action.payload;

      if (!state[trackId])
        throw new Error(`Wrong trackId of "${state[trackId]}`);

      if (!Array.isArray(state[trackId][property]))
        throw new Error(`Invalid property: "${property}" is not an array`);

      state[trackId][property][step] = value;
    },
  },
});

export const { updateTrackProperty } = sequencerSlice.actions;
export const selectSequencer = (state: RootState): SequencerState =>
  state.sequencer;
export const selectTrackSequencer = (
  state: RootState,
  trackId: keyof SequencerState,
): TrackSequencerState => state.sequencer[trackId];

export default sequencerSlice.reducer;
