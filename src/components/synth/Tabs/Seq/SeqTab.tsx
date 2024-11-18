import Offset from './Offset';
import Ratio from './Ratio';

function SeqTab() {
  return (
    <div className="col-start-5 row-start-2 row-end-4 flex w-[328px] flex-col items-center justify-between gap-y-[20px] px-[20px]">
      <Ratio />
      <Offset />
    </div>
  );
}

export default SeqTab;
