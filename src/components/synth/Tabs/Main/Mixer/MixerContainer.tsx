import { useAppSelector } from '../../../../../store/hooks';
import { selectMixerChannels } from '../../../../../store/slices/mixerSlice';
import Delay from './Delay';
import MixerChannel from './MixerChannel';
import Reverb from './Reverb';

const BACKGROUNDS: Record<string, string> = {
  track1: 'bg-purple-400',
  track2: 'bg-indigo-400',
  track3: 'bg-sky-400',
  track4: 'bg-teal-400',
};

const Mixer: React.FC = () => {
  const mixerChannels = useAppSelector(selectMixerChannels);

  return (
    <div className="col-start-5 row-start-2 row-end-5 flex h-full flex-col items-center justify-between gap-y-[20px] px-[20px]">
      <div className="flex items-end justify-between gap-x-5">
        {mixerChannels &&
          Object.entries(mixerChannels).map(([trackId], i) => (
            <MixerChannel
              className={BACKGROUNDS[trackId] || 'bg-slate-400'}
              trackId={trackId}
              key={i}
            />
          ))}
      </div>
      <div className="flex justify-center gap-x-5">
        <Delay />
        <Reverb />
      </div>
    </div>
  );
};

export default Mixer;
