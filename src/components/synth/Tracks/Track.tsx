import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';

type TrackProps = {
  className: string
}

const Track:React.FC<TrackProps> = ({className}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="h-[36px] w-[124px] rounded-md border"></div>
        <div className={cn("border flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-3xl p-[20px]", className)}>
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
