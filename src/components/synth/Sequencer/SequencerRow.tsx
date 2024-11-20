import { useState } from 'react';
import SequencerButton from '../../ui/SequencerButton/SequencerButton';

type SequencerRowProps = {
  className: string;
};

const steps = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  isTriggered: false,
}));

const SequencerRow: React.FC<SequencerRowProps> = ({ className }) => {
  return (
    <div className="flex items-end justify-between">
      {steps.map(step => (
        <SequencerButton color={className} key={step.id} />
      ))}
    </div>
  );
};

export default SequencerRow;
