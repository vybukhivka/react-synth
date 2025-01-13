import { useAppSelector } from '../../../../store/hooks';
import { selectMatrix } from '../../../../store/slices/modulationSlice';
import readMatrixValues from '../../../../utils/readMatrixValues';
import ModCell from '../../../ui/ModCell/ModCell';

const Matrix: React.FC = ({ selectedTrack }) => {
  const matrix = useAppSelector(selectMatrix);
  const modCells = readMatrixValues('track1', matrix);

  return (
    <div className="mr-9 grid h-[250px] w-[250px] grid-cols-5 grid-rows-5 border-slate-600">
      <span className="col-start-1 row-start-2 content-center justify-self-center">
        P1
      </span>
      <span className="col-start-1 row-start-3 content-center justify-self-center">
        P2
      </span>
      <span className="col-start-1 row-start-4 content-center justify-self-center">
        P3
      </span>
      <span className="col-start-1 row-start-5 content-center justify-self-center">
        P4
      </span>
      <span className="col-start-2 row-start-1 place-self-center">LFO</span>
      <span className="col-start-3 row-start-1 place-self-center">RND</span>
      <span className="col-start-4 row-start-1 place-self-center">SEQ</span>
      <span className="col-start-5 row-start-1 place-self-center">VEL</span>
      <span className="col-start-1 row-start-1 place-self-center"></span>
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
