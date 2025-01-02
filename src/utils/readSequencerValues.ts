import { TrackSequencerState } from '../store/slices/sequencerSlice';

export const readSequencerValues = (state: TrackSequencerState) => {
  const trigs = state.trigs;
  const probability = state.probability;
  const velocity = state.velocity;
  const retrig = state.retrig;
  const modSequence = state.modSequence;

  return trigs.map((trig, index) => ({
    trigs: trig,
    probability: probability[index],
    velocity: velocity[index],
    retrig: retrig[index],
    modSequence: modSequence[index],
  }));
};
