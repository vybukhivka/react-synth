import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import mainRoutes from './router/mainRoutes';
import synthRoutes from './router/synthRoutes';

const routes: RouteObject[] = [...mainRoutes, ...synthRoutes];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
