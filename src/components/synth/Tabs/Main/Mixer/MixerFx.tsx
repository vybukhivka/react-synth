import { useAppSelector } from '../../../../../store/hooks';
import {
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
  const mixerFx = defineMixerFx(fxName, mixerReturnFx);
  if (!mixerFx)
    throw new Error('MixerFx: undefined returned from defineMixerFx');

  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border border-slate-600">
      <span>{fxName}</span>
      <Knob
        fxName={fxName}
        paramName={mixerFx.knobName}
        paramValue={mixerFx.knobValue}
      />
      <div className="flex w-full justify-between p-[16px]">
        <MixerSend
          fxName={fxName}
          paramName={mixerFx.firstParamName}
          paramValue={mixerFx.firstParamValue}
        />
        <MixerSend
          fxName={fxName}
          paramName={mixerFx.secondParamName}
          paramValue={mixerFx.secondParamValue}
        />
      </div>
    </div>
  );
};

export default MixerFx;
