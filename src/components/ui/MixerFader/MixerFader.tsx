import useDrag from '../../../hooks/useDrag';
import { useAppSelector } from '../../../store/hooks';
import { selectMixerChannels } from '../../../store/slices/mixerSlice';
import { cn } from '../../../utils/cn';

type FaderProps = {
  color: string;
  trackId: string;
};

const MixerFader: React.FC<FaderProps> = ({ color, trackId }) => {
  const mixerValues = useAppSelector(selectMixerChannels);
  console.log(mixerValues[trackId].volume);
  const {
    elementRef: fader,
    angle,
    startDrag: startRotate,
  } = useDrag({
    initialValue: mixerValues[trackId].volume,
    type: 'fader',
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
