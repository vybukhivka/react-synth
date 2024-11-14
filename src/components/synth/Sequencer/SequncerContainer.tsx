import SequencerButton from '../../ui/SequencerButton/SequencerButton';

function SequncerContainer() {
  const steps = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="col-start-1 col-end-5 row-start-4 flex items-end justify-between">
      {steps.map(step => (
        <SequencerButton key={step} />
      ))}
    </div>
  );
}

export default SequncerContainer;
