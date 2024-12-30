import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';
import { createDummySynth } from '../../../utils/toneHelper';

type PlaybackButtonProps = {
  text: string;
};

const PlaybackButton: React.FC<PlaybackButtonProps> = props => {
  const synth = createDummySynth();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) Tone.getTransport().start();
    else Tone.getTransport().stop();
  }, [isPlaying]);

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
