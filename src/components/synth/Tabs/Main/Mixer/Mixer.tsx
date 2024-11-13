import MixerFader from '../../../../ui/MixerFader/MixerFader';

const Mixer: React.FC = () => {
  return (
    <div className="col-start-5 col-end-7 row-start-4 row-end-6">
      <div className="flex place-content-end justify-between">
        <MixerFader />
        <MixerFader />
        <MixerFader />
        <MixerFader />
      </div>
    </div>
  );
};

export default Mixer;
