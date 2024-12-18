import useDrag from '../../../../hooks/useDrag/useDrag';

const matrixSlots: number[] = Array.from({ length: 16 }, (_, i) => i);

const Matrix: React.FC = () => {
  const {
    elementRef: modCell,
    angle,
    startDrag,
  } = useDrag({
    initialValue: 10,
  });
  return (
    <div className="grid h-[200px] w-[200px] grid-cols-4 grid-rows-4 border-slate-600">
      {matrixSlots.map(slot => (
        <div
          onMouseDown={startDrag}
          className="border border-slate-600 text-center"
          key={slot}
        >
          <div
            ref={modCell}
            style={{ height: `${angle}px`, userSelect: 'none' }}
            className="w-full bg-slate-600 opacity-50"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Matrix;
