import Track from './Track';

const TracksContainer: React.FC = () => {
  return (
    <>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex gap-x-[20px]">
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </>
  );
};

export default TracksContainer;
