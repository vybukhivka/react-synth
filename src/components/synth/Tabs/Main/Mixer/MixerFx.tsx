import { MixerState } from '../../../../../store/slices/mixerSlice';
import Knob from '../../../../ui/Knob/Knob';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerFxProps = {
  fxName: keyof MixerState['returnFx'];
};
const MixerFx: React.FC<MixerFxProps> = ({ fxName }) => {
  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border border-slate-600">
      <span>{fxName}</span>
      <Knob paramValue={35} paramName="time" />
      <div className="flex w-full justify-between p-[16px]">
        <MixerSend />
        <MixerSend />
      </div>
    </div>
  );
};

export default MixerFx;
