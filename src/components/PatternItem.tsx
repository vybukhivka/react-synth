import { IoMdHeartEmpty } from 'react-icons/io';
import { Pattern } from '../types/patternInfo';

function PatternItem({ title, likes, username }: Pattern) {
  return (
    <div className="flex h-64 w-64 flex-col items-center justify-center gap-4 place-self-center rounded-lg border border-gray-600">
      <h2 className="text-lg">{title}</h2>
      <h3>{username}</h3>
      <p className="mt-24 flex gap-2">
        {likes}
        <IoMdHeartEmpty className="m-auto" />
      </p>
    </div>
  );
}

export default PatternItem;
