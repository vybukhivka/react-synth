import { TrackParams, TrackState } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';

type TrackProps = {
  trackData: [keyof TrackState, TrackParams];
  className?: string;
};

const Track: React.FC<TrackProps> = ({ trackData, className }) => {
  const [trackId, trackParams]: [keyof TrackState, TrackParams] = trackData;

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
          {(Object.entries(trackParams) as [keyof TrackParams, number][]).map(
            ([paramName, value]) => (
              <Knob
                trackId={trackId}
                paramName={paramName}
                paramValue={value}
                key={paramName}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Track;
