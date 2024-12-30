import { useAppSelector } from '../../../store/hooks';
import {
  selectSequencer,
  SequencerState,
  TrackSequencerState,
} from '../../../store/slices/sequencerSlice';
import SequencerButton from '../../ui/SequencerButton/SequencerButton';
import { createDummySynth } from '../../../utils/toneHelper';
import * as Tone from 'tone';
import { useEffect, useRef, useState } from 'react';

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
  const synth = createDummySynth();
  const [activeStep, setActiveStep] = useState(false);
  const sequencerArray = [true, false, false, true, true];
  const loopRef = useRef<Tone.Loop | null>(null);
  const stepIndexRef = useRef<number>(0);

  console.log(steps);

  useEffect(() => {
    if (loopRef.current) {
      loopRef.current.stop();
      loopRef.current.dispose();
    }

    loopRef.current = new Tone.Loop(time => {
      if (steps[stepIndexRef.current].trigs) {
        synth.triggerAttackRelease('C2', '16n', time);
      }
      stepIndexRef.current = (stepIndexRef.current + 1) % steps.length;
    }, '16n').start(0);

    return () => {
      if (loopRef.current) {
        loopRef.current.stop();
        loopRef.current.dispose();
      }
    };
  }, [steps]);

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
