import MixerChannel from './MixerChannel';

const Mixer: React.FC = () => {
  return (
    <div className="col-start-5 col-end-7 row-start-1 row-end-6 mt-[40px] flex items-start justify-around">
      <div className="flex items-end justify-around gap-x-4">
        <MixerChannel track={1} />
        <MixerChannel track={2} />
        <MixerChannel track={3} />
        <MixerChannel track={4} />
      </div>
    </div>
  );
};

export default Mixer;
