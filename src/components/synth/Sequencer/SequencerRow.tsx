import SequencerButton from '../../ui/SequencerButton/SequencerButton';

const steps = Array.from({ length: 8 }, (_, i) => i);

const SequencerRow: React.FC = () => {
  return (
    <div className="flex items-end justify-between">
      {steps.map(step => (
        <SequencerButton key={step} />
      ))}
    </div>
  );
};

export default SequencerRow;
