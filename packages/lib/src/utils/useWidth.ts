import { useCallback, useRef, useState } from "react";

/**
 * Custom hook to get the width of an element and keep it updated when it changes.
 * @param target
 * @returns
 */
const useWidth = <T extends Element>() => {
  const [width, setWidth] = useState(0);
  const observerRef = useRef<ResizeObserver | null>(null);

  const ref = useCallback((target: T | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (target) {
      setWidth(target.getBoundingClientRect().width);

      const triggerObserver = new ResizeObserver((entries) => {
        const rect = entries[0]?.target.getBoundingClientRect();
        if (rect) setWidth(rect.width);
      });

      triggerObserver.observe(target);
      observerRef.current = triggerObserver;
    }
  }, []);

  return [ref, width] as const;
};

export default useWidth;
