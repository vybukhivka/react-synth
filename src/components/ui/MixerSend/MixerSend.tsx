import useDrag from '../../../hooks/useDrag';
import { useAppSelector } from '../../../store/hooks';
import {
  MixerState,
  selectMixerChannels,
  selectMixerFx,
} from '../../../store/slices/mixerSlice';
import { cn } from '../../../utils/cn';

type MixerSendProps = {
  type: 'revSend' | 'delSend' | 'damp' | 'feedback';
  color?: string;
  trackId?: keyof MixerState['channels'];
};

const MixerSend: React.FC<MixerSendProps> = ({ color, type, trackId }) => {
  const mixerValues = useAppSelector(selectMixerChannels);
  const mixerFx = useAppSelector(selectMixerFx);
  const initValue = trackId
    ? mixerValues[trackId][type]
    : mixerFx?.delay[type] || mixerFx?.reverb[type];

  const {
    elementRef: send,
    angle,
    startDrag: startRotate,
  } = useDrag({
    initialValue: initValue,
    type: 'send',
    paramName: type,
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
