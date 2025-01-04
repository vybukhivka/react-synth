import { useAppSelector } from '../../../store/hooks';
import {
  selectTrackSequencer,
  SequencerState,
} from '../../../store/slices/sequencerSlice';
import { readSequencerValues } from '../../../utils/readSequencerValues';
import SequencerButton from '../../ui/SequencerButton/SequencerButton';

type SequencerRowProps = {
  className: string;
  track: keyof SequencerState;
};

const SequencerRow: React.FC<SequencerRowProps> = ({ className, track }) => {
  const state = useAppSelector(state => selectTrackSequencer(state, track));
  const steps = readSequencerValues(state);

  return (
    <div className="flex items-end justify-between" data-testid="sequencer-row">
      {steps.map((step, i) => (
        <SequencerButton
          isTriggered={step.trigs}
          color={className}
          step={i}
          currentStep={step.currentStep}
          track={track}
          key={`step${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SequencerRow;
