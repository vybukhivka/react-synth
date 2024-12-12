import useDrag from '../../../hooks/useDrag';
import { useAppSelector } from '../../../store/hooks';
import {
  MixerState,
  selectMixerChannels,
} from '../../../store/slices/mixerSlice';
import { cn } from '../../../utils/cn';

type MixerSendProps = {
  color?: string;
  trackId: keyof MixerState['channels'];
  sendName: 'revSend' | 'delSend';
};

const MixerSend: React.FC<MixerSendProps> = ({ color, trackId, sendName }) => {
  const mixerValues = useAppSelector(selectMixerChannels);
  const {
    elementRef: send,
    angle,
    startDrag: startRotate,
  } = useDrag({
    initialValue: mixerValues[trackId].volume,
    type: 'send',
    trackId,
  });

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
