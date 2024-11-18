import { cn } from '../../../utils/cn';

type ButtonMediumProps = {
  onClick: (tabName: string) => void;
  text: string;
  isActive: boolean;
};

const ButtonMedium: React.FC<ButtonMediumProps> = ({
  onClick,
  text,
  isActive,
}) => {
  return (
    <button
      className={cn(
        'h-[34px] w-[76px] rounded-md',
        isActive && 'border border-slate-600',
      )}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
};

export default ButtonMedium;
