import { Provider } from 'react-redux';
import SequencerContainer from '../components/synth/Sequencer/SequencerContainer';
import { SynthTabs } from '../types/synthTabs';
import { render } from '@testing-library/react';
import { sequencerContainerMockStore as mockStore } from '../../tests/mocks/mockStore';

export const renderSequencerContainer = (activeTab: SynthTabs) => {
  const store = mockStore;
  render(
    <Provider store={store}>
      <SequencerContainer activeTab={activeTab} />
    </Provider>,
  );
};
