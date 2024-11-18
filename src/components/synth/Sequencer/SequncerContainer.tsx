import SequencerRow from './SequencerRow';

type SeqContainerProps = {
  tab: string;
};

const SequncerContainer: React.FC<SeqContainerProps> = ({ tab }) => {
  return (
    <>
      {tab === 'main' && (
        <div className="col-start-1 col-end-5 row-start-5 row-end-5 flex flex-col gap-y-[18px]">
          <SequencerRow className="border-purple-400" />
        </div>
      )}
      {tab === 'seq' && (
        <div className="col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col gap-y-[18px]">
          <SequencerRow className="border-purple-400" />
          <SequencerRow className="border-indigo-400" />
          <SequencerRow className="border-sky-400" />
          <SequencerRow className="border-teal-400" />
        </div>
      )}
      {tab === 'mod' && (
        <div className="col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col gap-y-[18px]">
          <SequencerRow className="border-purple-400" />
          <SequencerRow className="border-indigo-400" />
          <SequencerRow className="border-sky-400" />
          <SequencerRow className="border-teal-400" />
        </div>
      )}
    </>
  );
};

export default SequncerContainer;
