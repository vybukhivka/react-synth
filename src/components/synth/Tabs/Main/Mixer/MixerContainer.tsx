import Delay from './Delay';
import MixerChannel from './MixerChannel';
import Reverb from './Reverb';

const Mixer: React.FC = () => {
  return (
    <div className="col-start-5 row-start-2 row-end-5 flex h-full flex-col items-center justify-between gap-y-[20px] px-[20px]">
      <div className="flex items-end justify-between gap-x-8">
        <MixerChannel className="bg-purple-400" track={1} />
        <MixerChannel className="bg-indigo-400" track={2} />
        <MixerChannel className="bg-sky-400" track={3} />
        <MixerChannel className="bg-teal-400" track={4} />
      </div>
      <div className="flex justify-center gap-x-5">
        <Reverb />
        <Delay />
      </div>
    </div>
  );
};

export default Mixer;
