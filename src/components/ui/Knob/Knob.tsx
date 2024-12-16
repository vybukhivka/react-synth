import useDrag from '../../../hooks/useDrag';
import {
  MixerDelayParams,
  MixerReverbParams,
} from '../../../store/slices/mixerSlice';
import { TrackParams, TrackState } from '../../../store/slices/tracksSlice';
import { setActiveType } from '../../synth/Tracks/Track';

type KnobProps = {
  trackId: keyof TrackState;
  paramName:
    | keyof TrackParams
    | keyof MixerDelayParams
    | keyof MixerReverbParams;
  paramValue: number;
  setActiveParam: React.Dispatch<React.SetStateAction<setActiveType>>;
  size: number;
};

const Knob: React.FC<Partial<KnobProps>> = ({
  trackId,
  paramName,
  paramValue,
  setActiveParam,
}) => {
  const {
    elementRef: knob,
    angle,
    value,
    startDrag,
  } = useDrag({ initialValue: paramValue, trackId, paramName, setActiveParam });
  if (paramName === 'time') console.log(paramName, paramValue);

  return (
    <>
      <div
        ref={knob}
        onMouseDown={startDrag}
        style={{ transform: `rotate(${value}deg)`, userSelect: 'none' }}
        className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border border-slate-400 bg-transparent p-[6px]"
      >
        <div className="h-[2px] w-[5px] rounded-lg border bg-white"></div>
      </div>
    </>
  );
};

export default Knob;
