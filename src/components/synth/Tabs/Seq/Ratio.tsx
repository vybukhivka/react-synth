import RatioControlsRow from './RatioControlsRow';

const Ratio: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2>Ratio</h2>
      <RatioControlsRow />
      <RatioControlsRow />
      <RatioControlsRow />
      <RatioControlsRow />
    </div>
  );
};

export default Ratio;
