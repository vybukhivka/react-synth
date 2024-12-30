import { useEffect, useState } from 'react';
import * as Tone from 'tone';

export const useSequencer = () => {
  const [steps, setSteps] = useState(Array(8).fill(false));
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const loop = new Tone.Sequence(
      (time, step) => {
        setCurrentStep(step);
        if (step[step]) {
          // trigger sound
        }
      },
      Array.from({ length: 8 }, (_, i) => i),
      '8n',
    );

    Tone.Transport.start();
    loop.start(0);

    return () => {
      loop.dispose();
    };
  }, [steps]);
  return { steps, setSteps, currentStep };
};
