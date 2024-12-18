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
  const trackMods = modMatirx.flatMap(([source, destination]) =>
    Object.entries(destination).map(([destination, value]) => ({
      trackId: track,
      modDestination: destination,
      modSource: source,
      modValue: value,
    })),
  );
  // 2. push values of each track to output array
  return trackMods.flat();
}

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
