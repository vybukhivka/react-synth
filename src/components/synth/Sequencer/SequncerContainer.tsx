import SequencerRow from './SequencerRow';

const SequncerContainer: React.FC = () => {
  return (
    <div className="col-start-1 col-end-5 row-start-5 row-end-5 flex flex-col gap-y-[18px]">
      <SequencerRow className="border-purple-400" />
      {/* <SequencerRow className="border-indigo-400" />
      <SequencerRow className="border-sky-400" />
      <SequencerRow className="border-teal-400" /> */}
    </div>
  );
};

export default SequncerContainer;
