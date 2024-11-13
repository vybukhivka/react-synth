import { useEffect, useRef, useState } from 'react';

function Knob() {
  const [rotate, setRotate] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);

  function startRotate(e: React.MouseEvent) {
    setIsRotating(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopRotate() {
    setIsRotating(false);
  }

  function handleMove(e: MouseEvent) {
    if (!isRotating || !initialPosition.current) return;

    const deltaX = e.clientX - initialPosition.current.x;
    const deltaY = initialPosition.current.y - e.clientY;
    const deltaSum = deltaX + deltaY;

    let newRotate = rotate + deltaSum;
    newRotate = Math.max(-45, Math.min(newRotate, 225));
    setRotate(newRotate);

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
  }, [isRotating, rotate]);

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div
          onMouseDown={startRotate}
          style={{ transform: `rotate(${rotate}deg)` }}
          className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border-2 bg-slate-600 p-1"
        >
          <div className="h-[2px] w-[7px] rounded-lg border bg-white"></div>
        </div>
      </div>
      <div>value: {rotate + 45}</div>
    </>
  );
}

export default Knob;
