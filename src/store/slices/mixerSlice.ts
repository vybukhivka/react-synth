import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MixerChannelParams = {
  volume: number;
  revSend: number;
  delSend: number;
};

export type MixerDelayParams = {
  time: number;
  feedback: number;
  lowpass: number;
};

export type MixerReverbParams = {
  decay: number;
  preDelay: number;
  damp: number;
};

export type MixerState = {
  channels: {
    [trackId: string]: MixerChannelParams;
  };
  returnFx: {
    delay: MixerDelayParams;
    reverb: MixerReverbParams;
  };
};

const initialState: MixerState = {
  channels: {
    track1: { volume: 80, revSend: 0, delSend: 0 },
    track2: { volume: 80, revSend: 0, delSend: 0 },
    track3: { volume: 80, revSend: 0, delSend: 0 },
    track4: { volume: 80, revSend: 0, delSend: 0 },
  },
  returnFx: {
    delay: { time: 80, feedback: 50, lowpass: 50 },
    reverb: { decay: 80, preDelay: 50, damp: 50 },
  },
};

const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    updateFader: (
      state: MixerState,
      action: PayloadAction<{
        trackId: keyof MixerState['channels'];
        paramValue: number;
      }>,
    ) => {
      const { trackId, paramValue } = action.payload;
      if (!state.channels[trackId]) {
        console.error(`Track ID ${trackId} doesnt exist in the mixer state`);
        return;
      }
      state.channels[trackId].volume = paramValue;
    },
  },
});

export const { updateFader } = mixerSlice.actions;
export const selectMixer = (state: { mixer: MixerState }) => state.mixer;
export const selectMixerChannels = (state: { mixer: MixerState }) =>
  state.mixer.channels;
export const selectMixerFx = (state: { mixer: MixerState }) =>
  state.mixer.returnFx;

export default mixerSlice.reducer;
