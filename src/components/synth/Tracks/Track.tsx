import { TrackParams } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';

type TrackProps = {
  trackId: string;
  params: TrackParams;
  className?: string;
};

const Track: React.FC<TrackProps> = ({ trackId, params, className }) => {
  const paramsValues = Object.entries(params);
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="bg h-[36px] w-[124px] rounded-md border border-slate-500"></div>
        <div
          className={cn(
            'flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-3xl border-2 p-[20px]',
            className,
          )}
        >
          {paramsValues.map(([name, value]) => (
            <Knob
              trackId={trackId}
              paramName={name}
              paramValue={value}
              key={name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Track;
