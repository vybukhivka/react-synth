import PlaybackButton from '../../ui/PlaybackButton/PlaybackButton';

function PlaybackContainer() {
  return (
    <div className="col-start-5 col-end-7 row-start-6 flex justify-between">
      <PlaybackButton text="play" />
      <PlaybackButton text="bpm" />
      <PlaybackButton text="swing" />
      <PlaybackButton text="master" />
    </div>
  );
}

export default PlaybackContainer;
