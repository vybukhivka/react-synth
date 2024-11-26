import { useAppSelector } from '../../../store/hooks';
import {
  selectTracks,
  TrackParams,
  TrackState,
} from '../../../store/slices/tracksSlice';
import Track from './Track';

const TracksContainer: React.FC = () => {
  const tracksState: TrackState = useAppSelector(selectTracks);
  const tracksValues: [string, TrackParams][] = Object.entries(tracksState);
  tracksValues.flatMap(track => console.log(track));

  return (
    <>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex gap-x-[20px]">
        {!tracksState && <div>No tracks available</div>}
        {tracksState &&
          tracksValues.map(([trackId, params]) => (
            <Track
              className="border-red-700"
              params={params}
              trackId={trackId}
              key={trackId}
            />
          ))}
        {/* <Track className="border-purple-400" />
        <Track className="border-indigo-400" />
        <Track className="border-sky-400" />
        <Track className="border-teal-400" /> */}
      </div>
    </>
  );
};

export default TracksContainer;
