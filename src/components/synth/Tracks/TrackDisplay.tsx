import { TrackParams } from '../../../store/slices/tracksSlice';

type DisplayProps = {
  trackParams: [keyof TrackParams, number][];
  activeParam: { paramName: string; value: number };
};

const TrackDisplay: React.FC<DisplayProps> = ({ trackParams, activeParam }) => {
  return (
    <div className="bg flex h-[36px] w-[124px] items-center justify-center rounded-md border border-slate-500">
      <span>
        {activeParam.paramName !== 'inactive'
          ? `${activeParam.paramName}: ${activeParam.value.toFixed(0)}`
          : ''}
      </span>
    </div>
  );
};

export default TrackDisplay;
