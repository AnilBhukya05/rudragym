import React, { useRef, useState, useEffect } from "react";

export default function StatNum({ target, suffix = "" }) {
  const ref       = useRef();
  const [val, setVal]   = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Only start counting when THIS element enters the viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }  // 60% of element must be visible
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const duration = 1800; // ms
    const steps    = 60;
    const increment = target / steps;
    const interval  = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}