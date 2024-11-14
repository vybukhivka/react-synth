import LFO from './LFO';
import Matrix from './Matrix';
import RND from './RND';

const Modulators: React.FC = () => {
  return (
    <div className="col-start-5 row-start-2 row-end-4 flex flex-col items-center justify-between gap-y-[20px] px-[20px]">
      <div>
        <Matrix />
      </div>
      <div className="flex w-full justify-center gap-x-5">
        <LFO />
        <RND />
      </div>
    </div>
  );
};
export default Modulators;
