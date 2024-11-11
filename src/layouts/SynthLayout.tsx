import { useState } from 'react';

import SynthContainer from '../components/synth/SynthContainer';
import SynthNavTabs from '../components/synth/SynthNavTabs';
import { SynthTabs } from '../types/synthTabs';

function SynthLayout() {
  const [activeTab, setActiveTab] = useState<SynthTabs>('main');

  function updateActiveTab(tabName: SynthTabs) {
    setActiveTab(tabName);
  }
  return (
    <>
      <SynthContainer>
        <SynthNavTabs onTabChange={updateActiveTab} />
      </SynthContainer>
    </>
  );
}

export default SynthLayout;
