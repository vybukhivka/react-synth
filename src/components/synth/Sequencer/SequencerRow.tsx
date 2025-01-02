import { useAppSelector } from '../../../store/hooks';
import {
  selectSequencer,
  SequencerState,
} from '../../../store/slices/sequencerSlice';
import { readSequencerValues } from '../../../utils/readSequencerValues';
import SequencerButton from '../../ui/SequencerButton/SequencerButton';

type SequencerRowProps = {
  className: string;
  track: keyof SequencerState;
};

const SequencerRow: React.FC<SequencerRowProps> = ({ className, track }) => {
  const state = useAppSelector(selectSequencer);
  const steps = readSequencerValues(state[track]);

  return (
    <div className="flex items-end justify-between">
      {steps.map((step, i) => (
        <SequencerButton
          isTriggered={step.trigs}
          color={className}
          step={i}
          track={track}
          key={`step${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SequencerRow;
