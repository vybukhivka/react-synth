import { useAppSelector } from '../../../../../store/hooks';
import {
  MixerDelayParams,
  MixerReverbParams,
  MixerState,
  selectMixerFx,
} from '../../../../../store/slices/mixerSlice';
import defineMixerFx from '../../../../../utils/defineMixerFx';
import Knob from '../../../../ui/Knob/Knob';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerFxProps = {
  fxName: keyof MixerState['returnFx'];
};

const MixerFx: React.FC<MixerFxProps> = ({ fxName }) => {
  const mixerReturnFx = useAppSelector(selectMixerFx);
  const {
    knobName,
    firstParamName,
    secondParamName,
    knobValue,
    firstParamValue,
    secondParamValue,
  } = defineMixerFx(fxName, mixerReturnFx);

  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border border-slate-600">
      <span>{fxName}</span>
      <Knob paramName={knobName} paramValue={knobValue} />
      <div className="flex w-full justify-between p-[16px]">
        <MixerSend paramName={firstParamName} paramValue={firstParamValue} />
        <MixerSend paramName={secondParamName} paramValue={secondParamValue} />
      </div>
    </div>
  );
};

export default MixerFx;
