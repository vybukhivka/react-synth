import { useEffect, useRef, useState } from 'react';

type UseRotateResults = {
  rotateRef: React.MutableRefObject<HTMLDivElement | null>;
  rotate: number;
  startRotate: (e: React.MouseEvent) => void;
};

type UseRotateProps = {
  initialAngle: number;
  type: 'fader' | 'knob';
};

function useRotate({
  initialAngle = -45,
  type = 'knob',
}: Partial<UseRotateProps> = {}): UseRotateResults {
  const [rotate, setRotate] = useState(initialAngle);
  const angleRef = useRef(initialAngle);
  const knobRef = useRef<HTMLDivElement | null>(null);
  const initialPosition = useRef<{ x: number; y: number } | null>(null);
  const [isRotating, setIsRotating] = useState(false);

  function startRotate(e: React.MouseEvent) {
    setIsRotating(true);
    initialPosition.current = { x: e.clientX, y: e.clientY };
  }

  function stopRotate() {
    setIsRotating(false);
    setRotate(angleRef.current);
  }

  function handleMove(e: MouseEvent) {
    if (!isRotating || !initialPosition.current || !knobRef.current) return;

    if (type === 'knob') {
      const deltaX = e.clientX - initialPosition.current.x;
      const deltaY = initialPosition.current.y - e.clientY;
      const deltaSum = deltaX + deltaY;

      let newRotate = angleRef.current + deltaSum;
      newRotate = Math.max(-45, Math.min(newRotate, 225));
      angleRef.current = newRotate;
      knobRef.current.style.transform = `rotate(${angleRef.current}deg)`;

      initialPosition.current = { x: e.clientX, y: e.clientY };
    }

    if (type === 'fader') {
      const deltaY = initialPosition.current.y - e.clientY;

      let newRotate = angleRef.current + deltaY;
      newRotate = Math.max(0, Math.min(newRotate, 154));
      angleRef.current = newRotate;
      knobRef.current.style.height = `${angleRef.current}px`;

      initialPosition.current = { x: e.clientX, y: e.clientY };
    }
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
    rotateRef: knobRef,
    rotate,
    startRotate,
  };
}

export default useRotate;
