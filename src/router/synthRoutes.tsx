import { RouteObject } from 'react-router-dom';
import SynthLayout from '../layouts/SynthLayout';
import SynthMainPage from '../components/synth/SynthMainPage';
import SynthModTab from '../components/synth/SynthModTab';
import SynthSeqTab from '../components/synth/SynthSeqTab';
import SynthProjTab from '../components/synth/SynthProjTab';

const synthRoutes: RouteObject[] = [
  {
    path: '/synth',
    element: <SynthLayout />,
    children: [
      { path: 'main', element: <SynthMainPage /> },
      { path: 'mod', element: <SynthModTab /> },
      { path: 'seq', element: <SynthSeqTab /> },
      { path: 'proj', element: <SynthProjTab /> },
    ],
  },
];

export default synthRoutes;
