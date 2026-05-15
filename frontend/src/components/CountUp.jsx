import { useEffect, useRef, useState } from "react";

export const CountUp = ({ to, suffix = "", duration = 1800 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (t) => {
              const elapsed = t - start;
              const p = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(eased * to);
              if (p < 1) requestAnimationFrame(animate);
              else setVal(to);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  const display = Number.isInteger(to) ? Math.round(val) : val.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};
