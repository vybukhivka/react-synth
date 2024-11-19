import { useState } from 'react';
import { cn } from '../../../utils/cn';

type SequencerButtonProps = {
  color: string;
  isTriggered: boolean;
};

const SequencerButton: React.FC<SequencerButtonProps> = ({
  color,
  isTriggered,
}) => {
  const [trigger, setTrigger] = useState(isTriggered);
  return (
    <button
      className={cn(
        'h-[68px] w-[68px] rounded-lg border opacity-60 hover:opacity-90',
        color,
      )}
    ></button>
  );
};

export default SequencerButton;
