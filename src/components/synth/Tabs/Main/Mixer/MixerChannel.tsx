import MixerFader from '../../../../ui/MixerFader/MixerFader';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerChannelProps = {
  track: number;
  className: string;
};

const MixerChannel: React.FC<MixerChannelProps> = ({ className }) => {
  return (
    <div className="flex flex-col gap-3">
      <MixerFader color={className} />
      <div className="flex flex-col gap-2">
        <MixerSend />
        <MixerSend />
        <MixerSend />
      </div>
    </div>
  );
};

export default MixerChannel;
