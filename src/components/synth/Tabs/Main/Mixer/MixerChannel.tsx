import MixerFader from '../../../../ui/MixerFader/MixerFader';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerChannelProps = {
  track: number;
};

const MixerChannel: React.FC<MixerChannelProps> = () => {
  return (
    <div className="flex flex-col gap-3">
      <MixerFader />
      <div className="flex flex-col gap-2">
        <MixerSend />
        <MixerSend />
        <MixerSend />
      </div>
    </div>
  );
};

export default MixerChannel;
