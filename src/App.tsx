import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Explore from './pages/Explore';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/explore', element: <Explore /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  { path: '*', element: <PageNotFound /> },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
