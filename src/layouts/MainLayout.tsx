import { Outlet } from 'react-router-dom';
import NavBar from '../components/Containers/NavBar/NavBar';

const MainLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="flex justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
