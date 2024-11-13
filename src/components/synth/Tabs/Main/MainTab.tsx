import Mixer from './Mixer/Mixer';
import SequencerControls from './SequencerControls/SequencerControls';

const MainTab: React.FC = () => {
  return (
    <>
      <Mixer />
      <SequencerControls />
    </>
  );
};

export default MainTab;
