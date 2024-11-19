import { useEffect, useRef, useState } from 'react';

type UseRotateResults = {
  knob: React.MutableRefObject<HTMLDivElement>;
  rotate: number;
  startRotate: (e: React.MouseEvent) => void;
};

function useRotate(initialRotate: number): UseRotateResults {
  const [rotate, setRotate] = useState(initialRotate);
  const rotateRef = useRef(initialRotate);
  const knobRef = useRef<HTMLDivElement | null>(null);
  const isRotatingRef = useRef(false);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);

  function startRotate(e: React.MouseEvent) {
    isRotatingRef.current = true;
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopRotate() {
    isRotatingRef.current = false;
    setRotate(rotateRef.current);
  }

  function handleMove(e: MouseEvent) {
    if (!isRotatingRef.current || !initialPosition.current || !knobRef.current)
      return;

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
    if (isRotatingRef.current) {
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
  }, [isRotatingRef.current]);

  return {
    knobRef,
    rotate,
    startRotate,
  };
}

export default useRotate;
