import { useState, useEffect } from "react";

export function useCounter(target, suffix = "", start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let cur = 0;
    const inc = target / (1800 / 16);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [start, target]);
  return val + suffix;
}