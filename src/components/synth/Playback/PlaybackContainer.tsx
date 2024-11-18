import React from 'react';
import PlaybackButton from '../../ui/PlaybackButton/PlaybackButton';

const buttons = ['play', 'bpm', 'swing', 'master'];

const PlaybackContainer: React.FC = () => {
  return (
    <div className="col-start-5 row-start-5 flex items-center justify-between px-3">
      {buttons.map(button => (
        <PlaybackButton key={button} text={button} />
      ))}
    </div>
  );
};

export default PlaybackContainer;
