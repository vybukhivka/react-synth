import { useState } from 'react';
import { cn } from '../../../utils/cn';
import { useAppDispatch } from '../../../store/hooks';
import {
  SequencerState,
  updateTrackProperty,
} from '../../../store/slices/sequencerSlice';

type SequencerButtonProps = {
  color: string;
  isTriggered: boolean;
  retrig: number;
  modSequence: number;
  probability: number;
  velocity: number;
  step: number;
  track: keyof SequencerState;
  currentStep: number;
};

const SequencerButton: React.FC<Partial<SequencerButtonProps>> = ({
  color,
  isTriggered,
  step,
  track,
  currentStep,
}) => {
  const [trigger, setTrigger] = useState(isTriggered);
  const dispatch = useAppDispatch();
  const isActive = currentStep === step;
  // console.log(step, currentStep, isActive);

  const handleTrigger = () => {
    setTrigger(!trigger);
    dispatch(
      updateTrackProperty({
        trackId: track,
        step,
        property: 'trigs',
        value: !trigger,
      }),
    );
  };

  return (
    <button
      onClick={handleTrigger}
      className={cn(
        'flex h-[68px] w-[68px] items-center justify-center rounded-lg border opacity-60 hover:opacity-80',
        color,
        isActive && 'opacity-100',
      )}
    >
      {trigger && (
        <div
          className={cn('h-[10px] w-[10px] rounded-full bg-slate-300', color)}
        ></div>
      )}
    </button>
  );
};

export default SequencerButton;
