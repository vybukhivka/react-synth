import { useAppSelector } from '../../../../store/hooks';
import { selectMatrix } from '../../../../store/slices/modulationSlice';
import readMatrixValues from '../../../../utils/readMatrixValues';
import ModCell from '../../../ui/ModCell/ModCell';

const Matrix: React.FC = ({ selectedTrack }) => {
  const matrix = useAppSelector(selectMatrix);
  const modCells = readMatrixValues('track1', matrix); // TODO: hardcoded track
  const rowLables = ['P1', 'P2', 'P3', 'P4'];
  const colLables = ['LFO', 'RND', 'SEQ', 'VEL'];

  return (
    <div className="mr-9 grid h-[250px] w-[250px] grid-cols-5 grid-rows-5 border-slate-600">
      {rowLables.map((label, i) => (
        <span
          key={`row-label-${i + 1}`}
          className={`row-start-${i + 2} content-center justify-self-center`}
        >
          {label}
        </span>
      ))}

      {/* spacer */}
      <span className="col-start-1 row-start-1 place-self-center"></span>

      {colLables.map((col, i) => (
        <span
          key={`col-col-${i + 1}`}
          className={`col-start-${i + 2} row-start-1 place-self-center`}
        >
          {col}
        </span>
      ))}

      {modCells.map((cell, i) => (
        <ModCell
          key={i}
          trackId={cell.trackId}
          modSource={cell.modSource}
          modDestination={cell.modDestination}
          modValue={cell.modValue}
        />
      ))}
    </div>
  );
};

export default Matrix;
