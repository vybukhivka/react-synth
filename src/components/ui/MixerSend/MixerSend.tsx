import useDrag from '../../../hooks/useDrag/useDrag';
import {
  MixerChannelParams,
  MixerState,
} from '../../../store/slices/mixerSlice';
import { TrackParams } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';

type MixerSendProps = {
  color?: string;
  paramValue?: number;
  paramName: keyof TrackParams | keyof MixerChannelParams;
  trackId?: keyof MixerState['channels'];
  fxName?: 'delay' | 'reverb';
};

const MixerSend: React.FC<MixerSendProps> = ({
  color,
  paramName,
  paramValue,
  trackId,
  fxName,
}) => {
  const {
    elementRef: send,
    angle,
    startDrag: startRotate,
  } = useDrag({
    initialValue: paramValue,
    type: 'send',
    paramName,
    trackId,
    fxName,
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
