import { TrackState } from '../../../store/slices/tracksSlice';

type DisplayProps = {
  activeParam: { paramName: keyof TrackState; value: number };
};

const TrackDisplay: React.FC<DisplayProps> = ({ activeParam }) => {
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
