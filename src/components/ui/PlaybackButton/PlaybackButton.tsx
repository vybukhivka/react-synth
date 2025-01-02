import React, { useState } from 'react';

type PlaybackButtonProps = {
  text: string;
};

const PlaybackButton: React.FC<PlaybackButtonProps> = props => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayback = () => {
    setIsPlaying(!isPlaying);
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
