import useDrag from '../../../hooks/useDrag/useDrag';
import { useAppSelector } from '../../../store/hooks';
import {
  MixerState,
  selectMixerChannels,
} from '../../../store/slices/mixerSlice';
import { cn } from '../../../utils/cn';

type FaderProps = {
  trackId: keyof MixerState['channels'];
  color: string;
};

const MixerFader: React.FC<FaderProps> = ({ color, trackId }) => {
  const mixerValues = useAppSelector(selectMixerChannels);
  const {
    elementRef: fader,
    angle,
    startDrag: startRotate,
  } = useDrag({
    initialValue: mixerValues[trackId].volume,
    type: 'fader',
    paramName: 'volume',
    trackId,
  });

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
