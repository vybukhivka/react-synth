import { useState } from 'react';
import { SynthTabs } from '../../../types/synthTabs';
import SequencerRow from './SequencerRow';

type SeqContainerProps = {
  activeTab: SynthTabs;
};

const SequencerContainer: React.FC<SeqContainerProps> = ({ activeTab }) => {
  const [activeTrack] = useState('track1');
  return (
    <>
      {activeTab === 'main' && (
        <div className="col-start-1 col-end-5 row-start-5 row-end-5 flex flex-col gap-y-[18px]">
          <SequencerRow track={activeTrack} className="border-purple-400" />
        </div>
      )}
      {activeTab === 'seq' && (
        <div className="col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col gap-y-[18px]">
          <SequencerRow track={'track1'} className="border-purple-400" />
          <SequencerRow track={'track2'} className="border-indigo-400" />
          <SequencerRow track={'track3'} className="border-sky-400" />
          <SequencerRow track={'track4'} className="border-teal-400" />
        </div>
      )}
      {activeTab === 'mod' && (
        <div className="col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col gap-y-[18px]">
          <SequencerRow track={'track1'} className="border-purple-400" />
          <SequencerRow track={'track2'} className="border-indigo-400" />
          <SequencerRow track={'track3'} className="border-sky-400" />
          <SequencerRow track={'track4'} className="border-teal-400" />
        </div>
      )}
    </>
  );
};

export default SequencerContainer;
