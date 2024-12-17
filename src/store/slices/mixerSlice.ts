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
  damp: number;
  preDelay: number;
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
    track1: { volume: 80, revSend: 0, delSend: 10 },
    track2: { volume: 85, revSend: 25, delSend: 5 },
    track3: { volume: 45, revSend: 10, delSend: 45 },
    track4: { volume: 25, revSend: 80, delSend: 0 },
  },
  returnFx: {
    delay: { time: 80, feedback: 10, lowpass: 20 },
    reverb: { decay: 40, damp: 40, preDelay: 80 },
  },
};

const mixerSlice = createSlice({
  name: 'mixer',
  initialState,
  reducers: {
    // the same reducer is in trackSlice, probably should try just reuse it here
    updateMixerParameter: (
      state: MixerState,
      action: PayloadAction<{
        trackId: keyof MixerState['channels'];
        paramName: keyof MixerChannelParams;
        paramValue: number;
      }>,
    ) => {
      const { trackId, paramValue, paramName } = action.payload;
      if (!state.channels[trackId]) {
        console.error(`Track ID ${trackId} doesnt exist in the mixer state`);
        return;
      }
      if (paramName === 'volume') state.channels[trackId].volume = paramValue;
      if (paramName === 'delSend') state.channels[trackId].delSend = paramValue;
      if (paramName === 'revSend') state.channels[trackId].revSend = paramValue;
    },
    updateFxParameter: (
      state: MixerState,
      action: PayloadAction<{
        paramName: keyof MixerDelayParams | keyof MixerReverbParams;
        paramValue: number;
      }>,
    ) => {
      const { paramName, paramValue } = action.payload;
      if (!state.returnFx) {
        console.error(`Return fx doesn't exists in the mixer state`);
        return;
      }
      if (paramName === 'decay') state.returnFx.reverb.decay = paramValue;
      if (paramName === 'damp') state.returnFx.reverb.damp = paramValue;
      if (paramName === 'preDelay') state.returnFx.reverb.preDelay = paramValue;
      if (paramName === 'time') state.returnFx.delay.time = paramValue;
      if (paramName === 'feedback') state.returnFx.delay.feedback = paramValue;
      if (paramName === 'lowpass') state.returnFx.delay.lowpass = paramValue;
    },
  },
});

export const { updateMixerParameter } = mixerSlice.actions;
export const { updateFxParameter } = mixerSlice.actions;
export const selectMixer = (state: { mixer: MixerState }) => state.mixer;
export const selectMixerChannels = (state: { mixer: MixerState }) =>
  state.mixer.channels;
export const selectMixerFx = (state: { mixer: MixerState }) =>
  state.mixer.returnFx;

export default mixerSlice.reducer;
