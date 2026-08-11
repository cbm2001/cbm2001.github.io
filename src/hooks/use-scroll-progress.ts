import { useEffect, useRef, useState } from "react";

/**
 * Returns a 0 -> 1 progress value describing how far the given element
 * has been scrolled through the viewport. Used for scroll-driven transforms.
 */
export const useScrollProgress = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height || 1;
      const scrolled = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(scrolled);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
};
