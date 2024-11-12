import Knob from '../../ui/Knob/Knob';

function Track() {
  return (
    <div className="flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-lg border p-[20px]">
      <Knob />
      <Knob />
    </div>
  );
}

export default Track;
