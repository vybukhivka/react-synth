import useDrag from '../../../hooks/useDrag/useDrag';
import angleToValue from '../../../utils/angleToValue';

const ModCell: React.FC = ({
  trackId,
  modSource,
  modDestination,
  modValue,
}) => {
  const {
    elementRef: modMatrixCell,
    angle,
    startDrag,
  } = useDrag({
    initialValue: modValue,
    type: 'modMatrixCell',
    trackId,
    fxName: modSource,
    paramName: modDestination,
  });
  return (
    <div
      onMouseDown={startDrag}
      className="relative border border-slate-600 text-center"
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
  );
};

export default ModCell;
