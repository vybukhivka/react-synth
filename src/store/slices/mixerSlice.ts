import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track1: { volume: 80, revSend: 50, delSend: 50 },
  track2: { volume: 80, revSend: 50, delSend: 50 },
  track3: { volume: 80, revSend: 50, delSend: 50 },
  track4: { volume: 80, revSend: 50, delSend: 50 },
  delay: { time: 80, feedback: 50, lowpass: 50 },
  reveb: { decay: 80, preDelay: 50, damp: 50 },
};

const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    updateParameter: (state, action) => {
      const { trackId, paramName, paramValue } = action.payload;
      state[trackId][paramName] = paramValue;
    },
  },
});

export const { updateParameter } = trackSlice.actions;
export const selectMixer = state => state.mixer;
export const selectMixerParameter = (state, trackId, param) =>
  state.mixer[trackId]?.[param] ?? null;

export default mixerSlice.reducer;
