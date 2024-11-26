import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TrackParams = {
  param1: number;
  param2: number;
  param3: number;
  param4: number;
};

export type TrackState = {
  [trackId: string]: TrackParams;
};

const initialState: TrackState = {
  track1: { param1: 0, param2: 45, param3: 120, param4: 220 },
  track2: { param1: 0, param2: 45, param3: 120, param4: 220 },
  track3: { param1: 0, param2: 45, param3: 120, param4: 220 },
  track4: { param1: 0, param2: 45, param3: 120, param4: 220 },
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    updateParameter: (
      state: TrackState,
      action: PayloadAction<{
        trackId: keyof TrackState;
        param: keyof TrackParams;
        value: number;
      }>,
    ) => {
      const { trackId, param, value } = action.payload;
      state[trackId][param] = value;
    },
  },
});

export const { updateParameter } = trackSlice.actions;
export const selectTracks = (state: RootState): TrackState => state.tracks;
export const selectTrackParameter = (
  state: RootState,
  trackId: string,
  param: keyof TrackParams,
) => state.tracks[trackId]?.[param] ?? null;

export default trackSlice.reducer;
