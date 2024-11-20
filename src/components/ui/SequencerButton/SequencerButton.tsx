import { useState } from 'react';
import { cn } from '../../../utils/cn';

type SequencerButtonProps = {
  color: string;
  // isTriggered: boolean;
  // isActive: boolean
};

const SequencerButton: React.FC<SequencerButtonProps> = ({ color }) => {
  const [trigger, setTrigger] = useState(false);
  return (
    <button
      onClick={() => setTrigger(!trigger)}
      className={cn(
        'flex h-[68px] w-[68px] items-center justify-center rounded-lg border opacity-60 hover:opacity-80',
        color,
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
