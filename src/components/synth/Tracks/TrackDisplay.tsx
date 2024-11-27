import { TrackParams } from '../../../store/slices/tracksSlice';

type DisplayProps = {
  trackParams: [keyof TrackParams, number][];
};

const TrackDisplay: React.FC<DisplayProps> = ({ trackParams }) => {
  return (
    <div className="bg flex h-[36px] w-[124px] items-center justify-center rounded-md border border-slate-500">
      <span>{trackParams[0][1]}</span>
    </div>
  );
};

export default TrackDisplay;
