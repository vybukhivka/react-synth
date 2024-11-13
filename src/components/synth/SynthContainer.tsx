import { useState } from 'react';

import SynthNavTabs from './Tabs/SynthNavTabs';
import TracksContainer from './Tracks/TracksContainer';
import SequncerContainer from './Sequencer/SequncerContainer';
import PlaybackContainer from './Playback/PlaybackContainer';
import MainTab from './Tabs/Main/MainTab';
import { SynthTabs } from '../../types/synthTabs';

function SynthContainer() {
  const [activeTab, setActiveTab] = useState<SynthTabs>('main');

  function updateActiveTab(tabName: SynthTabs) {
    setActiveTab(tabName);
  }

  // NavBar, 4 Tracks and bottom right corner buttons
  // rendred on every page. sequencer and params are conditionally
  // rendered, depending on the selected page
  return (
    <div className="grid h-[600px] w-[1064px] grid-cols-6 grid-rows-6 gap-5 rounded-xl border p-[20px]">
      <TracksContainer />
      <SynthNavTabs onTabChange={updateActiveTab} />
      <SequncerContainer />
      <PlaybackContainer />
      <MainTab />
    </div>
  );
}

export default SynthContainer;
