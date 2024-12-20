import { ModulationState } from '../store/slices/modulationSlice';

type NewType = ModulationState;

export default function readMatrixValues(
  track: keyof ModulationState,
  matrix: NewType,
) {
  const modMatirx = Object.entries(matrix[track]);
  const trackMods = modMatirx.flatMap(([source, destination]) =>
    Object.entries(destination).map(([destination, value]) => ({
      trackId: track,
      modDestination: destination,
      modSource: source,
      modValue: value,
    })),
  );
  return trackMods.flat();
}
