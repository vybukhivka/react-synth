import { useAppSelector } from '../../../../../store/hooks';
import { selectMixer } from '../../../../../store/slices/mixerSlice';
import Delay from './Delay';
import MixerChannel from './MixerChannel';
import Reverb from './Reverb';

const BORDERS = ['bg-purple-400', 'bg-indigo-400', 'bg-sky-400', 'bg-teal-400'];

const Mixer: React.FC = () => {
  const mixerState = useAppSelector(selectMixer);
  const mixerData = Object.entries(mixerState);

  return (
    <div className="col-start-5 row-start-2 row-end-5 flex h-full flex-col items-center justify-between gap-y-[20px] px-[20px]">
      <div className="flex items-end justify-between gap-x-5">
        {mixerData &&
          mixerData.map((track, i) => {
            if (track[0] === 'delay') return;
            if (track[0] === 'reverb') return;
            return (
              <MixerChannel className={BORDERS[i]} trackId={track[0]} key={i} />
            );
          })}
      </div>
      <div className="flex justify-center gap-x-5">
        <Delay />
        <Reverb />
      </div>
    </div>
  );
};

export default Mixer;
