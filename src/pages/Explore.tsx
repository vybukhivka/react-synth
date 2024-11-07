import PatternItem from '../components/PatternItem';
import { Pattern } from '../types/patternInfo';

let newPatternId = 1;
let likes = 10;

const patterns = Array.from(
  { length: 15 },
  (): Pattern => ({
    title: 'Great Pattern',
    username: 'victor.b',
    likes: likes++,
    id: newPatternId++,
  }),
);

function Explore() {
  return (
    <div className="mt-12 flex w-auto flex-wrap place-content-center gap-12 justify-self-center">
      {patterns.map(pattern => (
        <PatternItem
          title={pattern.title}
          likes={pattern.likes}
          username={pattern.username}
          key={pattern.id}
        />
      ))}
    </div>
  );
}

export default Explore;
