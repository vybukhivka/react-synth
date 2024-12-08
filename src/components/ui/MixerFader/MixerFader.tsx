import useDrag from '../../../hooks/useDrag';
import { cn } from '../../../utils/cn';

type FaderProps = {
  color: string;
};

const MixerFader: React.FC<FaderProps> = ({ color }) => {
  const {
    elementRef: fader,
    angle,
    startDrag: startRotate,
  } = useDrag({ initialValue: 10, type: 'fader' });

  return (
    <div
      onMouseDown={startRotate}
      className="flex h-[154px] w-[48px] items-end gap-x-4 overflow-hidden rounded-lg border border-slate-600"
    >
      <div
        ref={fader}
        style={{ height: `${angle}px`, userSelect: 'none' }}
        className={cn('w-full opacity-20', color)}
      ></div>
    </div>
  );
};

export default MixerFader;
