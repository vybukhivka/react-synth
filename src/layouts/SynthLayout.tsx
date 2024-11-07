import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function SynthLayout() {
  return (
    <>
      <NavBar />
      <main>
        <h2>synth layout</h2>
        <Outlet />
      </main>
    </>
  );
}

export default SynthLayout;
