import { useLayoutEffect, useState } from "react";

/**
 * Custom hook to get the width of an element and keep it updated when it changes.
 * @param target 
 * @returns 
 */
const useWidth = <T extends Element>(target: T | null) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (target != null) {
      setWidth(target.getBoundingClientRect().width);

      const triggerObserver = new ResizeObserver((entries) => {
        const rect = entries[0]?.target.getBoundingClientRect();
        if (rect) {
          setWidth(rect.width);
        }
      });
      triggerObserver.observe(target);
      return () => {
        triggerObserver.unobserve(target);
      };
    }
  }, [target]);

  return width;
};

export default useWidth;
