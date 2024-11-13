import { useEffect, useRef, useState } from 'react';

function Knob() {
  const [rotate, setRotate] = useState(-45);
  const [isRotating, setIsRotating] = useState(false);
  const rotateRef = useRef(-45);
  const knobRef = useRef<HTMLDivElement | null>(null);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);

  function startRotate(e: React.MouseEvent) {
    setIsRotating(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopRotate() {
    setIsRotating(false);
    setRotate(rotateRef.current);
  }

  function handleMove(e: MouseEvent) {
    if (!isRotating || !initialPosition.current || !knobRef.current) return;

    const deltaX = e.clientX - initialPosition.current.x;
    const deltaY = initialPosition.current.y - e.clientY;
    const deltaSum = deltaX + deltaY;

    let newRotate = rotateRef.current + deltaSum;
    newRotate = Math.max(-45, Math.min(newRotate, 225));
    rotateRef.current = newRotate;
    knobRef.current.style.transform = `rotate(${rotateRef.current}deg)`;

    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  useEffect(() => {
    if (isRotating) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', stopRotate);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', stopRotate);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', stopRotate);
    };
  }, [isRotating]);

  return (
    <>
      <div
        ref={knobRef}
        onMouseDown={startRotate}
        style={{ transform: `rotate(${rotate}deg)`, userSelect: 'none' }}
        className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border-2 bg-transparent p-1"
      >
        <div className="h-[2px] w-[7px] rounded-lg border bg-white"></div>
      </div>
    </>
  );
}

export default Knob;
