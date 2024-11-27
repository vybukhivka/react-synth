import { TrackParams, TrackState } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';
import TrackDisplay from './TrackDisplay';
import React, { useRef } from 'react';

type TrackProps = {
  trackData: [keyof TrackState, TrackParams];
  className?: string;
};

const Track: React.FC<TrackProps> = ({ trackData, className }) => {
  const [trackId, trackParams]: [keyof TrackState, TrackParams] = trackData;
  const trackParamsArray = Object.entries(trackParams) as [
    keyof TrackParams,
    number,
  ][];
  // create ref ad pass it to knob and display
  const angleRef = useRef(0);

  return (
    <div className="flex flex-col items-center justify-between">
      <TrackDisplay trackParams={trackParamsArray} />
      <div
        className={cn(
          'flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-3xl border-2 p-[20px]',
          className,
        )}
      >
        {(Object.entries(trackParams) as [keyof TrackParams, number][]).map(
          ([paramName, value]) => (
            <Knob
              trackId={trackId}
              paramName={paramName}
              paramValue={value}
              key={paramName}
              angleRef={angleRef}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Track;
