import useDrag from '../../../hooks/useDrag';
import { cn } from '../../../utils/cn';

type MixerSendProps = {
  color: string;
};

const MixerSend: React.FC<MixerSendProps> = ({ color }) => {
  const {
    elementRef: send,
    angle,
    startDrag: startRotate,
  } = useDrag({ initialValue: 24, type: 'send' });
  return (
    <div
      onMouseDown={startRotate}
      className="h-[20px] w-[48px] overflow-hidden rounded-[5px] border border-slate-600"
    >
      <div
        ref={send}
        style={{ width: `${angle}px`, userSelect: 'none' }}
        className={cn('h-full bg-slate-200 opacity-20', color)}
      ></div>
    </div>
  );
};

export default MixerSend;
