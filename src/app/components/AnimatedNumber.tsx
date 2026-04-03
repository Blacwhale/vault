import { useEffect, useState } from 'react';
import { animate } from 'motion/react';

export function AnimatedNumber({ value, prefix = '₹' }: { value: number; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1], // iOS style smooth easing
      onUpdate(v) {
        setDisplayValue(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [value]);

  return (
    <>
      {prefix}{displayValue.toLocaleString('en-IN')}
    </>
  );
}
