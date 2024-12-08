import Knob from '../../../../ui/Knob/Knob';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

const Delay: React.FC = () => {
  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border border-slate-600">
      <Knob />
      <div className="flex w-full justify-between p-[16px]">
        <MixerSend />
        <MixerSend />
      </div>
    </div>
  );
};

export default Delay;
