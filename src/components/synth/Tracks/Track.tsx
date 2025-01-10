import { useState } from 'react';
import { TrackParams, TrackState } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';
import TrackDisplay from './TrackDisplay';
import { audioEngine } from '../../../audio/audioEngine';

type TrackProps = {
  trackData: [keyof TrackState, TrackParams];
  className?: string;
};

export type setActiveType = {
  paramName: keyof TrackState;
  value: number;
};

const Track: React.FC<TrackProps> = ({ trackData, className }) => {
  const [trackId, trackParams]: [keyof TrackState, TrackParams] = trackData;
  const [activeParam, setActiveParam] = useState<setActiveType>({
    paramName: 'inactive',
    value: 0,
  });

  if (trackId === 'track1') {
    if (activeParam.paramName === 'param1') {
      audioEngine.kickSynth.setFrequencer(activeParam.value * 4);
    }
  }

  if (trackId === 'track1') {
    if (activeParam.paramName === 'param2') {
      audioEngine.kickSynth.setDecay(activeParam.value * 0.06);
    }
  }

  if (trackId === 'track1') {
    if (activeParam.paramName === 'param3') {
      audioEngine.kickSynth.setPitchEnv(activeParam.value * 0.03);
    }
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <TrackDisplay activeParam={activeParam} />
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
              onActiveParam={setActiveParam}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Track;
