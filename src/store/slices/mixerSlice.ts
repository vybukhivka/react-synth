import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track1: { volume: 80, revSend: 50, delSend: 50 },
  track2: { volume: 80, revSend: 50, delSend: 50 },
  track3: { volume: 80, revSend: 50, delSend: 50 },
  track4: { volume: 80, revSend: 50, delSend: 50 },
  delay: { time: 80, feedback: 50, lowpass: 50 },
  reverb: { decay: 80, preDelay: 50, damp: 50 },
};

const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    updateFader: (state, action) => {
      const { trackId, paramValue } = action.payload;
      state[trackId].volume = paramValue;
    },
  },
});

export const { updateFader } = mixerSlice.actions;
export const selectMixer = state => state.mixer;

export default mixerSlice.reducer;
