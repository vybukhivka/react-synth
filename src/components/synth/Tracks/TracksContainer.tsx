import { useAppSelector } from '../../../store/hooks';
import {
  selectTracks,
  TrackParams,
  TrackState,
} from '../../../store/slices/tracksSlice';
import Track from './Track';

const BORDERS = [
  'border-purple-400',
  'border-indigo-400',
  'border-sky-400',
  'border-teal-400',
];

const TracksContainer: React.FC = () => {
  const tracksState: TrackState = useAppSelector(selectTracks);
  const tracksData = Object.entries(tracksState) as [
    keyof TrackState,
    TrackParams,
  ][];
  return (
    <>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex gap-x-[20px]">
        {tracksState &&
          tracksData.map((track, i) => (
            <Track className={BORDERS[i]} trackData={track} key={i} />
          ))}
      </div>
    </>
  );
};

export default TracksContainer;
