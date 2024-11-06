import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
