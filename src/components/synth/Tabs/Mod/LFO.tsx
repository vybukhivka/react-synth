import MixerSend from '../../../ui/MixerSend/MixerSend';

const LFO: React.FC = () => {
  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border">
      LFO wave
      <div className="flex w-full justify-center p-[16px]">
        <MixerSend />
      </div>
    </div>
  );
};

export default LFO;
