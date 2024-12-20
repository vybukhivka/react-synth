import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
    updateMixerParameter: (
      state: MixerState,
      action: PayloadAction<{
        trackId: keyof MixerState['channels'];
        paramName: keyof MixerChannelParams;
        paramValue: number;
      }>,
    ) => {
      const { trackId, paramValue, paramName } = action.payload;
      const track = state.channels[trackId];
      if (!track)
        throw new Error(`Track ID ${trackId} doesnt exist in the mixer state`);

      track[paramName] = paramValue;
    },
    updateFxParameter: (
      state: MixerState,
      action: PayloadAction<{
        fxName: keyof MixerState['returnFx'];
        paramName: keyof MixerDelayParams | keyof MixerReverbParams;
        paramValue: number;
      }>,
    ) => {
      const { paramName, paramValue, fxName } = action.payload;

      if (fxName === 'delay') {
        const delay = state.returnFx.delay;
        if (paramName in delay)
          delay[paramName as keyof MixerDelayParams] = paramValue;
        else throw new Error(`Invalid parameter "${paramName}" for delay fx`);
      } else if (fxName === 'reverb') {
        const reverb = state.returnFx.reverb;
        if (paramName in reverb)
          reverb[paramName as keyof MixerReverbParams] = paramValue;
        else throw new Error(`Invalid parameter "${paramName}" for reverb fx`);
      }
    },
  },
});

export const { updateMixerParameter, updateFxParameter } = mixerSlice.actions;
export const selectMixer = (state: RootState) => state.mixer;
export const selectMixerChannels = (state: RootState) => state.mixer.channels;
export const selectMixerFx = (state: RootState) => state.mixer.returnFx;

export default mixerSlice.reducer;
