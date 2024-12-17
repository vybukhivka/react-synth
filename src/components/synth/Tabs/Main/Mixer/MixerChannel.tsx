import { useAppSelector } from '../../../../../store/hooks';
import {
  MixerState,
  selectMixerChannels,
} from '../../../../../store/slices/mixerSlice';
import MixerFader from '../../../../ui/MixerFader/MixerFader';
import MixerSend from '../../../../ui/MixerSend/MixerSend';

type MixerChannelProps = {
  trackId: keyof MixerState['channels'];
  className: string;
};

const MixerChannel: React.FC<MixerChannelProps> = ({ className, trackId }) => {
  const mixerChannels = useAppSelector(selectMixerChannels);
  return (
    <div className="flex flex-col gap-3">
      <MixerFader color={className} trackId={trackId} />
      <div className="flex flex-col gap-2">
        <MixerSend
          color={className}
          trackId={trackId}
          paramValue={mixerChannels[trackId].revSend}
          paramName="revSend"
        />
        <MixerSend
          color={className}
          trackId={trackId}
          paramValue={mixerChannels[trackId].delSend}
          paramName="delSend"
        />
      </div>
    </div>
  );
};

export default MixerChannel;
