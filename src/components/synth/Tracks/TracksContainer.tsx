import Track from './Track';

const TracksContainer: React.FC = () => {
  return (
    <>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3 flex gap-x-[20px]">
        <Track className='border-purple-400' />
        <Track className='border-indigo-400' />
        <Track className='border-sky-400' />
        <Track className='border-teal-400' />
      </div>
    </>
  );
};

export default TracksContainer;
