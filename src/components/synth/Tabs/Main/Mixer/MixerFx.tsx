import { useAppSelector } from '../../../../../store/hooks';
import {
  MixerState,
  selectMixerFx,
} from '../../../../../store/slices/mixerSlice';
import Knob from '../../../../ui/Knob/Knob';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerFxProps = {
  fxName: keyof MixerState['returnFx'];
};
const MixerFx: React.FC<MixerFxProps> = ({ fxName }) => {
  const mixerReturnFx = useAppSelector(selectMixerFx);
  const time = mixerReturnFx[fxName].time;
  const paramName: 'time' | 'decay' | null =
    fxName === 'reverb' ? 'decay' : fxName === 'delay' ? 'time' : null;
  // console.log(paramName);

  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border border-slate-600">
      <span>{fxName}</span>
      <Knob paramValue={time} />
      <div className="flex w-full justify-between p-[16px]">
        <MixerSend type="damp" />
        <MixerSend type="feedback" />
      </div>
    </div>
  );
};

export default MixerFx;
