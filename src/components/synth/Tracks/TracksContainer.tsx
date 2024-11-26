import { useAppSelector } from '../../../store/hooks';
import { selectTracks, TrackState } from '../../../store/slices/tracksSlice';
import Track from './Track';

const TracksContainer: React.FC = () => {
  const tracks: TrackState = useAppSelector(selectTracks);
  const arr = Object.entries(tracks);
  arr.flatMap(track => console.log(track));

  return (
    <>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex gap-x-[20px]">
        {arr.flatMap(track => (
          <Track
            className="border-red-700"
            params={track[1]}
            trackId={track[0]}
            key={track[0]}
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
