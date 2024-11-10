import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SynthContainer from '../components/synth/SynthContainer';

function SynthLayout() {
  return (
    <>
      <NavBar />
      <main>
        <SynthContainer>
          <Outlet />
        </SynthContainer>
      </main>
    </>
  );
}

export default SynthLayout;
