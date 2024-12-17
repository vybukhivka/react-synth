export default function calcDelta(
  e: MouseEvent,
  initialPosition: { x: number; y: number },
) {
  if (!initialPosition) return { deltaX: 0, deltaY: 0 };
  const deltaX = e.clientX - initialPosition.x;
  const deltaY = initialPosition.y - e.clientY;

  return { deltaX, deltaY };
}
