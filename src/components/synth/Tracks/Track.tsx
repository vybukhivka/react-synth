import { TrackParams } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';

type TrackProps = {
  className: string;
  trackId: string;
  params: keyof TrackParams;
};

const Track: React.FC<TrackProps> = ({ trackId, params, className }) => {
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
          {Object.entries(params).map(param => (
            <Knob trackId={trackId} param={param[1]} key={param[0]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Track;
