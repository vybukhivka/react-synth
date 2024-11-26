import { useEffect } from 'react';
import useRotate from '../../../hooks/useRotate';
import { useAppDispatch } from '../../../store/hooks';
import { updateParameter } from '../../../store/slices/tracksSlice';

type KnobProps = {
  trackId: string;
  param: number;
};

const Knob: React.FC<KnobProps> = ({ trackId, param }) => {
  const dispatch = useAppDispatch();
  const {
    elementRef: knob,
    angle,
    startRotate,
  } = useRotate({ initialAngle: param || -45 });

  useEffect(() => {
    dispatch(() => updateParameter({ trackId: trackId }));
  }, [angle]);

  return (
    <>
      <div
        ref={knob}
        onMouseDown={startRotate}
        style={{ transform: `rotate(${angle}deg)`, userSelect: 'none' }}
        className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border border-slate-400 bg-transparent p-[6px]"
      >
        <div className="h-[2px] w-[5px] rounded-lg border bg-white"></div>
      </div>
    </>
  );
};

export default Knob;
