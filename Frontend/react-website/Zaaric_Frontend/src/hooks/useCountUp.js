import { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * requestAnimationFrame count-up.
 *
 * Deliberately not GSAP: tweening innerText with snap (the pattern used in
 * aiStats.jsx) only works for bare integers and falls apart the moment the
 * value carries a $, %, k or a thousands separator. Returning a number lets the
 * caller format it with Intl and pair it with font-variant-numeric: tabular-nums.
 *
 * Returns the current value; jumps straight to `target` under reduced motion.
 */
export function useCountUp(target, { duration = 1400, start = false } = {}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!start) return undefined;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia(REDUCED_MOTION).matches;

    if (reduced || duration <= 0) {
      setValue(target);
      return undefined;
    }

    // Reset so StrictMode's second mount doesn't resume mid-count.
    setValue(0);

    let startedAt = null;
    const tick = (now) => {
      if (startedAt === null) startedAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(target * easeOut(progress));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);

  return value;
}

export default useCountUp;
