import { useLayoutEffect, useState } from "react";

const useWidth = <T extends Element>(target: T | null) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (target != null) {
      setWidth(target.getBoundingClientRect().width);

      const triggerObserver = new ResizeObserver((entries) => {
        const rect = entries[0]?.target.getBoundingClientRect();
        if (rect) {
          setWidth(rect?.width);
        }
      });
      triggerObserver.observe(target);
      return () => {
        triggerObserver.unobserve(target);
      };
    }
    return undefined;
  }, [target]);

  return width;
};

export default useWidth;
