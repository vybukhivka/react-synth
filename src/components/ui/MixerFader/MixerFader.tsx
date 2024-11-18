import { cn } from '../../../utils/cn';

type FaderProps = {
  color: string;
};

const MixerFader: React.FC<FaderProps> = ({ color }) => {
  return (
    <div
      className={cn(
        'flex h-[154px] w-[48px] items-end gap-x-4 overflow-hidden rounded-lg border border-slate-600',
      )}
    >
      <div className={cn('h-[40px] w-full opacity-20', color)}></div>
    </div>
  );
};

export default MixerFader;
