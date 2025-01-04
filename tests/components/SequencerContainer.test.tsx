import { it, expect, describe, afterEach } from 'vitest';
import { cleanup, screen } from '@testing-library/react';
import { renderSequencerContainer } from '../../src/utils/renderSequencerContainer';

describe('SequencerContainer', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render one sequencer row if Main tab is selected', () => {
    renderSequencerContainer('main');

    const rows = screen.getAllByTestId('sequencer-row');
    expect(rows).toHaveLength(1);
  });

  it('should render four sequencer rows if Mod tab is selected', () => {
    renderSequencerContainer('mod');

    const rows = screen.getAllByTestId('sequencer-row');
    expect(rows).toHaveLength(4);
  });

  it('should render four sequencer rows if Seq tab is selected', () => {
    renderSequencerContainer('seq');

    const rows = screen.getAllByTestId('sequencer-row');
    expect(rows).toHaveLength(4);
  });
});
