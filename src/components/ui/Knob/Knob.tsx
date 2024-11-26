import useRotate from '../../../hooks/useRotate';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectTrackParameter,
  TrackParameter,
} from '../../../store/slices/tracksSlice';

type KnobProps = {
  trackId: number;
  param: keyof TrackParameter;
};

const Knob: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(state =>
    selectTrackParameter(state, 'track1', 'param2'),
  );
  const {
    elementRef: knob,
    angle,
    startRotate,
  } = useRotate({ initialAngle: value });

  return (
    <>
      <div
        ref={knob}
        onMouseDown={startRotate}
        style={{ transform: `rotate(${value}deg)`, userSelect: 'none' }}
        className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border border-slate-400 bg-transparent p-[6px]"
      >
        <div className="h-[2px] w-[5px] rounded-lg border bg-white"></div>
      </div>
    </>
  );
};

export default Knob;
