import useDrag from '../../../../hooks/useDrag/useDrag';
import { useAppSelector } from '../../../../store/hooks';
import {
  ModulationState,
  selectMatrix,
} from '../../../../store/slices/modulationSlice';
import angleToValue from '../../../../utils/angleToValue';

const matrixSlots: number[] = Array.from({ length: 16 }, (_, i) => i);

function readMatrixValues(track: keyof ModulationState, matrix) {
  const test = Object.entries(matrix[track]);
  console.log(test);
  // 1. loop over each mod source
  // 2. push values of each track to output array
}

const Matrix: React.FC = ({ selectedTrack }) => {
  const matrix = useAppSelector(selectMatrix);
  readMatrixValues('track1', matrix);

  const {
    elementRef: modMatrixCell,
    angle,
    startDrag,
  } = useDrag({
    initialValue: 20,
    type: 'modMatrixCell',
  });
  return (
    <div className="grid h-[200px] w-[200px] grid-cols-4 grid-rows-4 border-slate-600">
      {matrixSlots.map(slot => (
        <div
          onMouseDown={startDrag}
          className="relative border border-slate-600 text-center"
          key={slot}
        >
          <div
            ref={modMatrixCell}
            style={{
              height: `${Math.abs(angle)}px`,
              transform: `translateY(${angle >= 0 ? 0 : 100}%)`,
              userSelect: 'none',
            }}
            className="absolute bottom-1/2 left-0 w-full bg-slate-600 opacity-50"
          >
            {angleToValue(angle, 'modMatrixCell')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matrix;
