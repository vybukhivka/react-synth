import { RouteObject } from 'react-router-dom';
import SynthLayout from '../layouts/SynthLayout';
import PageNotFound from '../pages/PageNotFound';

const synthRoutes: RouteObject[] = [
  {
    path: '/synth',
    element: <SynthLayout />,
    children: [{ path: ':patternId', element: <SynthLayout /> }],
  },
  { path: '*', element: <PageNotFound /> },
];

export default synthRoutes;
