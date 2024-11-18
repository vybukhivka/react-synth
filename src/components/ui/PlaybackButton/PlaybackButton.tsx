import React from 'react';

type PlaybackButtonProps = {
  text: string;
};

const PlaybackButton: React.FC<PlaybackButtonProps> = props => {
  return (
    <button
      className="h-[68px] w-[68px] rounded-lg border border-slate-600"
      aria-label={props.text}
    >
      {props.text}
    </button>
  );
};

export default PlaybackButton;
