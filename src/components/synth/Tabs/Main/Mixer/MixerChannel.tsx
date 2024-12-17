import { MixerState } from '../../../../../store/slices/mixerSlice';
import MixerFader from '../../../../ui/MixerFader/MixerFader';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerChannelProps = {
  trackId: keyof MixerState['channels'];
  className: string;
};

const MixerChannel: React.FC<MixerChannelProps> = ({ className, trackId }) => {
  return (
    <div className="flex flex-col gap-3">
      <MixerFader color={className} trackId={trackId} />
      <div className="flex flex-col gap-2">
        <MixerSend color={className} trackId={trackId} paramName="revSend" />
        <MixerSend color={className} trackId={trackId} paramName="delSend" />
      </div>
    </div>
  );
};

export default MixerChannel;
