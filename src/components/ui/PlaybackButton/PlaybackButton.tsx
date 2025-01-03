import React, { useState } from 'react';
import { audioEngine } from '../../../audio/audioEngine';

type PlaybackButtonProps = {
  text: string;
};

const PlaybackButton: React.FC<PlaybackButtonProps> = props => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayback = () => {
    if (!isPlaying) {
      audioEngine.start();
      audioEngine.startClock();
      audioEngine.setBPM(130);
      setIsPlaying(true);
    } else {
      audioEngine.stopClock();
      setIsPlaying(false);
    }
  };

  return (
    <button
      className="h-[68px] w-[68px] rounded-lg border border-slate-600"
      aria-label={props.text}
      onClick={handlePlayback}
    >
      {props.text}
    </button>
  );
};

export default PlaybackButton;
