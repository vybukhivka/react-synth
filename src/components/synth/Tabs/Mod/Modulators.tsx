import LFO from './LFO';
import RND from './RND';

const Modulators: React.FC = () => {
  return (
    <div className="flex w-full justify-center gap-x-5">
      <LFO />
      <RND />
    </div>
  );
};
export default Modulators;
