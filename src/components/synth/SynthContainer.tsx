import { useState } from 'react';

import SynthNavTabs from './Tabs/SynthNavTabs';
import { SynthTabs } from '../../types/synthTabs';
import TracksContainer from './Tracks/TracksContainer';
import SequncerContainer from './Sequencer/SequncerContainer';

function SynthContainer() {
  const [activeTab, setActiveTab] = useState<SynthTabs>('main');

  function updateActiveTab(tabName: SynthTabs) {
    setActiveTab(tabName);
  }

  // NavBar, 4 Tracks and bottom right corner buttons
  // rendred on every page. sequencer and params are conditionally
  // rendered, depending on the selected page
  return (
    <div className="grid-row grid h-[600px] w-[1064px] grid-cols-6 gap-5 rounded-xl border p-5">
      <TracksContainer />
      <SynthNavTabs onTabChange={updateActiveTab} />
      <SequncerContainer />
    </div>
  );
}

export default SynthContainer;
