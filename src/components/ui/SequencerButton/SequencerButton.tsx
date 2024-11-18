import { cn } from '../../../utils/cn';

type SequencerButtonProps = {
  color: string;
};

const SequencerButton: React.FC<SequencerButtonProps> = ({ color }) => {
  return (
    <div
      className={cn('h-[68px] w-[68px] rounded-lg border opacity-60', color)}
    ></div>
  );
};

export default SequencerButton;
