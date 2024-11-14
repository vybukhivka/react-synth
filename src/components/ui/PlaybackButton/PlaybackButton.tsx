import React from 'react';

type PlaybackButtonProps = {
  text: string;
};

const PlaybackButton: React.FC<PlaybackButtonProps> = props => {
  return (
    <button className="h-[48px] w-[68px] rounded-lg" aria-label={props.text}>
      {props.text}
    </button>
  );
};

export default PlaybackButton;
