import MixerSend from '../../../ui/MixerSend/MixerSend';

const RND: React.FC = () => {
  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border">
      RND wave
      <div className="flex w-full justify-center p-[16px]">
        <MixerSend />
      </div>
    </div>
  );
};

export default RND;
