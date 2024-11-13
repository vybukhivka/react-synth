import Track from './Track';

const TracksContainer: React.FC = () => {
  return (
    <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex w-[676px] gap-x-5">
      <Track />
      <Track />
      <Track />
      <Track />
    </div>
  );
};

export default TracksContainer;
