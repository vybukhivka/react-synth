import { useEffect, useRef, useState } from 'react';

function Knob() {
  const [rotate, setRotate] = useState(-45);
  const [isRotating, setIsRotating] = useState(false);
  const knobRef = useRef<HTMLDivElement>(null);

  function startRotate() {
    setIsRotating(true);
  }

  function stopRotate() {
    setIsRotating(false);
  }

  function handleMove(e: MouseEvent) {
    if (!isRotating || !knobRef.current) return;

    const rect: DOMRect = knobRef.current.getBoundingClientRect();

    const cordX = rect.left + rect.width / 2;
    const cordY = rect.top + rect.height / 2;
    const deltaX = e.clientX - cordX;
    const deltaY = e.clientY - cordY;
    const degrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    const rotationAngle = (degrees - 135 + 360) % 360;

    console.log(
      `X: ${deltaX.toFixed()} Y: ${deltaY.toFixed()} angle: ${degrees.toFixed(2)}`,
    );

    if (rotationAngle < 270) setRotate(rotationAngle - 45);
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
      <div className="flex h-full w-full items-center justify-center">
        <div
          ref={knobRef}
          onMouseDown={startRotate}
          style={{ transform: `rotate(${rotate}deg)` }}
          className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border-2 bg-slate-600 p-1"
        >
          <div className="h-[2px] w-[7px] rounded-lg border bg-white"></div>
        </div>
      </div>
      <div>value: {Math.round(((rotate + 45) / 270) * 100)}</div>
      <div></div>
    </>
  );
}

export default Knob;
