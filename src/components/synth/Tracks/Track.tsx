import Knob from '../../ui/Knob/Knob';

function Track() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="h-[36px] w-[110px] rounded-md border"></div>
        <div className="flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-3xl border p-[20px]">
          <Knob />
          <Knob />
          <Knob />
          <Knob />
        </div>
      </div>
    </>
  );
}

export default Track;
