import SequencerButton from '../../ui/SequencerButton/SequencerButton';

type SequencerRowProps = {
  className: string;
};

const steps = Array.from({ length: 8 }, (_, i) => i);

const SequencerRow: React.FC<SequencerRowProps> = ({ className }) => {
  return (
    <div className="flex items-end justify-between">
      {steps.map(step => (
        <SequencerButton color={className} isTriggered={false} key={step} />
      ))}
    </div>
  );
};

export default SequencerRow;
