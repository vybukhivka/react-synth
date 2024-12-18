import { useAppSelector } from '../../../../store/hooks';
import {
  ModulationState,
  selectMatrix,
} from '../../../../store/slices/modulationSlice';
import ModCell from '../../../ui/ModCell/ModCell';

// const matrixSlots: number[] = Array.from({ length: 16 }, (_, i) => i);

function readMatrixValues(
  track: keyof ModulationState,
  matrix: ModulationState,
) {
  const modMatirx = Object.entries(matrix[track]);
  // 1. loop over each mod source
  const trackMods = modMatirx.map(source => {
    const values = Object.values(source[1]);
    return values;
  });
  // 2. push values of each track to output array
  return trackMods.flat();
}

const Matrix: React.FC = ({ selectedTrack }) => {
  const matrix = useAppSelector(selectMatrix);
  const matrixSlots = readMatrixValues('track1', matrix);
  // console.log(arr);

  return (
    <div className="grid h-[200px] w-[200px] grid-cols-4 grid-rows-4 border-slate-600">
      {matrixSlots.map(slot => (
        <ModCell key={slot} />
      ))}
    </div>
  );
};

export default Matrix;
