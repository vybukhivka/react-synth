import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import mainRoutes from './router/mainRoutes';

const routes: RouteObject[] = mainRoutes;
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
