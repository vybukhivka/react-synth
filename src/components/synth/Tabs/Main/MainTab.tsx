import MixerContainer from './Mixer/MixerContainer';
import SequencerControls from './SequencerControls/SequencerControls';

const MainTab: React.FC = () => {
  return (
    <>
      <MixerContainer />
      <SequencerControls />
    </>
  );
};

export default MainTab;
