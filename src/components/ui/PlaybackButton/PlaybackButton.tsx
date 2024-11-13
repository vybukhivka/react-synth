import React from 'react';

type PlaybackButtonProps = {
  text: string;
};

const PlaybackButton: React.FC<PlaybackButtonProps> = props => {
  return (
    <button
      className="h-[76px] w-[76px] rounded-lg border"
      aria-label={props.text}
    >
      {props.text}
    </button>
  );
};

export default PlaybackButton;
