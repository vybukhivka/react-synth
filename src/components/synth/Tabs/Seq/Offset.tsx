import OffsetControlsRow from './OffsetControlsRow';

const Offset: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2>Offset</h2>
      <OffsetControlsRow />
      <OffsetControlsRow />
      <OffsetControlsRow />
      <OffsetControlsRow />
    </div>
  );
};

export default Offset;
