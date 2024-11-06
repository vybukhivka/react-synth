import { Outlet } from 'react-router-dom';
import NarBar from '../components/NavBar';

const MainLayout: React.FC = () => {
  return (
    <>
      <NarBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
