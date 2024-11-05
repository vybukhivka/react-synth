import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Explore from './pages/Explore';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
