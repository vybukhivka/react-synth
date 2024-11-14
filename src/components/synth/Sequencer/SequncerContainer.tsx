import SequencerRow from './SequencerRow';

function SequncerContainer() {
  return (
    <div className="col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col gap-y-[18px]">
      <SequencerRow />
      <SequencerRow />
      <SequencerRow />
      <SequencerRow />
    </div>
  );
}

export default SequncerContainer;
