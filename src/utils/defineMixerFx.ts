import { MixerState } from '../store/slices/mixerSlice';

export default function defineMixerFx(
  fxName: 'reverb' | 'delay',
  mixerFxState: MixerState['returnFx'],
) {
  if (fxName === 'delay') {
    const [knobName, firstParamName, secondParamName]: string[] = Object.keys(
      mixerFxState.delay,
    );
    const [knobValue, firstParamValue, secondParamValue]: number[] =
      Object.values(mixerFxState.delay);
    return {
      knobName,
      firstParamName,
      secondParamName,
      knobValue,
      firstParamValue,
      secondParamValue,
    };
  }
  if (fxName === 'reverb') {
    const [knobName, firstParamName, secondParamName]: string[] = Object.keys(
      mixerFxState.reverb,
    );
    const [knobValue, firstParamValue, secondParamValue]: number[] =
      Object.values(mixerFxState.reverb);
    return {
      knobName,
      firstParamName,
      secondParamName,
      knobValue,
      firstParamValue,
      secondParamValue,
    };
  }
}
