import { useAppSelector } from '../../../store/hooks';
import {
  selectSequencer,
  SequencerState,
  TrackSequencerState,
} from '../../../store/slices/sequencerSlice';
import SequencerButton from '../../ui/SequencerButton/SequencerButton';

type SequencerRowProps = {
  className: string;
  track: keyof SequencerState;
};

const readSequencerValues = (state: TrackSequencerState) => {
  const trigs = state.trigs;
  const probability = state.probability;
  const velocity = state.velocity;
  const retrig = state.retrig;
  const modSequence = state.modSequence;

  return trigs.map((trig, index) => ({
    trigs: trig,
    probability: probability[index],
    velocity: velocity[index],
    retrig: retrig[index],
    modSequence: modSequence[index],
  }));
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
