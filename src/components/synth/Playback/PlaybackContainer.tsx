import React from 'react';
import PlaybackButton from '../../ui/PlaybackButton/PlaybackButton';

const buttons = ['play', 'bpm', 'swing', 'master'];

const PlaybackContainer: React.FC = () => {
  return (
    <div className="col-start-5 row-start-4 flex justify-between">
      {buttons.map(button => (
        <PlaybackButton key={button} text={button} />
      ))}
    </div>
  );
};

export default PlaybackContainer;
