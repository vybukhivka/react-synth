import { useEffect, useRef, useState } from 'react';

type UseRotateResults = {
  knob: React.MutableRefObject<HTMLDivElement | null>;
  rotate: number;
  startRotate: (e: React.MouseEvent) => void;
};

function useRotate(initialRotate: number): UseRotateResults {
  const [rotate, setRotate] = useState(initialRotate);
  const rotateRef = useRef(initialRotate);
  const knobRef = useRef<HTMLDivElement | null>(null);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);
  const [isRotating, setIsRotating] = useState(false);

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

  return {
    knob: knobRef,
    rotate,
    startRotate,
  };
}

export default useRotate;
