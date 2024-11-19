import useRotate from '../../../hooks/useRotate';
import { cn } from '../../../utils/cn';

type FaderProps = {
  color: string;
};

const MixerFader: React.FC<FaderProps> = ({ color }) => {
  const {
    elementRef: fader,
    angle,
    startRotate,
  } = useRotate({ initialAngle: 10, type: 'fader' });

  console.log(angle);
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
