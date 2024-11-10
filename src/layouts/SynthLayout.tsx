import NavBar from '../components/NavBar';
import SynthContainer from '../components/synth/SynthContainer';
import { useState } from 'react';
import SynthMainTab from '../components/synth/SynthMainTab';
import SynthNavTabs from '../components/synth/SynthNavTabs';

function SynthLayout() {
  const [activeTab, setActiveTab] = useState('main');

  console.log(activeTab);
  return (
    <>
      <NavBar />

      <main className="flex justify-center">
        <SynthContainer>
          <SynthNavTabs onActiveTab={setActiveTab} />
        </SynthContainer>
      </main>
    </>
  );
}

export default SynthLayout;
