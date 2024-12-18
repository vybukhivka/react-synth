import useDrag from '../../../../hooks/useDrag/useDrag';

const matrixSlots: number[] = Array.from({ length: 16 }, (_, i) => i);

const Matrix: React.FC = () => {
  const {
    elementRef: modMatrixCell,
    angle,
    startDrag,
  } = useDrag({
    initialValue: 10,
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
            {angle}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matrix;
