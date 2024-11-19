import useRotate from '../../../hooks/useRotate';

const Knob: React.FC = () => {
  const { elementRef: knob, angle, startRotate } = useRotate();

  return (
    <>
      <div
        ref={knob}
        onMouseDown={startRotate}
        style={{ transform: `rotate(${angle}deg)`, userSelect: 'none' }}
        className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border border-slate-400 bg-transparent p-[6px]"
      >
        <div className="h-[2px] w-[5px] rounded-lg border bg-white"></div>
      </div>
    </>
  );
};

export default Knob;
