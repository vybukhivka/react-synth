import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ErrorBoundary from './pages/ErrorBoundary';
import PageNotFound from './pages/PageNotFound';

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home />, errorElement: <ErrorBoundary /> },
      { path: '/about', element: <About />, errorElement: <ErrorBoundary /> },
      {
        path: '/explore',
        element: <Explore />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  { path: '*', element: <PageNotFound /> },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
