import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  trigs: [0, 0, 0, 0],
};

const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    updateTrigs: (state, action) => {},
    updateVelocity: (state, action) => {},
    updateProb: (state, action) => {},
    updateMod: (state, action) => {},
    updateRetrig: (state, action) => {},
  },
});
