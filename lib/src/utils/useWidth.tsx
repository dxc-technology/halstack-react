import { useLayoutEffect, useState } from "react";

const useWidth = <T extends Element>(target: T) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (target != null) {
      setWidth(target.getBoundingClientRect().width);

      const triggerObserver = new ResizeObserver((entries) => {
        const rect = entries[0].target.getBoundingClientRect();
        setWidth(rect?.width);
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