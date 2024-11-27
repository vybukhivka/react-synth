import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TrackParams = {
  [paramId: string]: number;
};

export type TrackState = {
  [trackId: string]: TrackParams;
};

const initialState: TrackState = {
  track1: { param1: 0, param2: 33, param3: 66, param4: 100 },
  track2: { param1: 0, param2: 33, param3: 66, param4: 100 },
  track3: { param1: 0, param2: 33, param3: 66, param4: 100 },
  track4: { param1: 0, param2: 33, param3: 66, param4: 100 },
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    updateParameter: (
      state: TrackState,
      action: PayloadAction<{
        trackId: keyof TrackState;
        paramName: keyof TrackParams;
        paramValue: number;
      }>,
    ) => {
      const { trackId, paramName, paramValue } = action.payload;
      state[trackId][paramName] = paramValue;
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
