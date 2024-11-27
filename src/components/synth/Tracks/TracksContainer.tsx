import { useAppSelector } from '../../../store/hooks';
import {
  selectTracks,
  TrackParams,
  TrackState,
} from '../../../store/slices/tracksSlice';
import Track from './Track';

const borders = [
  'border-purple-400',
  'border-indigo-400',
  'border-sky-400',
  'border-teal-400',
];

const TracksContainer: React.FC = () => {
  const tracksState: TrackState = useAppSelector(selectTracks);
  const tracksValues: [keyof TrackState, TrackParams][] =
    Object.entries(tracksState);

  return (
    <>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex gap-x-[20px]">
        {tracksState &&
          tracksValues.map(([trackId, params], i) => (
            <Track
              className={borders[i]}
              params={params}
              trackId={trackId}
              key={trackId}
            />
          ))}
      </div>
    </>
  );
};

export default TracksContainer;
