import { useAppSelector } from '../../../../store/hooks';
import { selectMatrix } from '../../../../store/slices/modulationSlice';
import readMatrixValues from '../../../../utils/readMatrixValues';
import ModCell from '../../../ui/ModCell/ModCell';

// const matrixSlots: number[] = Array.from({ length: 16 }, (_, i) => i);

const Matrix: React.FC = ({ selectedTrack }) => {
  const matrix = useAppSelector(selectMatrix);
  const modCells = readMatrixValues('track1', matrix);

  return (
    <div className="grid h-[200px] w-[200px] grid-cols-4 grid-rows-4 border-slate-600">
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
