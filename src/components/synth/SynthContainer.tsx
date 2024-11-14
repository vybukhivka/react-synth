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

  return (
    <div className="mt-auto grid h-[600px] w-[1064px] grid-cols-[154px_154px_154px_154px_2fr] grid-rows-[36px_154px_1fr_68px] gap-[20px] rounded-xl border p-[20px]">
      <TracksContainer />
      <SynthNavTabs onTabChange={updateActiveTab} />
      <SequncerContainer />
      <PlaybackContainer />
      <MainTab />
    </div>
  );
}

export default SynthContainer;
