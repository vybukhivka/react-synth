import Delay from './Delay';
import MixerChannel from './MixerChannel';
import Reverb from './Reverb';

const Mixer: React.FC = () => {
  return (
    <div className="col-start-5 row-start-2 row-end-4 flex flex-col items-center justify-between gap-y-[20px]">
      <div className="flex items-end justify-around gap-x-4">
        <MixerChannel track={1} />
        <MixerChannel track={2} />
        <MixerChannel track={3} />
        <MixerChannel track={4} />
      </div>
      <div className="flex w-full justify-center gap-x-5">
        <Reverb />
        <Delay />
      </div>
    </div>
  );
};

export default Mixer;
