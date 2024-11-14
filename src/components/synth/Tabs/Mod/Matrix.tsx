const matrixSlots: number[] = Array.from({ length: 16 }, (_, i) => i);

const Matrix: React.FC = () => {
  return (
    <div className="grid h-[200px] w-[200px] grid-cols-4 grid-rows-4 border-slate-600">
      {matrixSlots.map(slot => (
        <div className="border border-slate-600 text-center" key={slot}></div>
      ))}
    </div>
  );
};

export default Matrix;
