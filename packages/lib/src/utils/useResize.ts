import { useEffect, useRef, useState } from "react";

type UseResizeProps = {
  minWidth: number;
  maxWidth: number;
  defaultWidth: number;
};

const useResize = ({ minWidth, maxWidth, defaultWidth }: UseResizeProps) => {
  const [width, setWidth] = useState(defaultWidth);
  const sidenavRef = useRef<HTMLDivElement>(null);
  const resizing = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!resizing.current || !sidenavRef.current) return;

      const rect = sidenavRef.current.getBoundingClientRect();
      const nextWidth = e.clientX - rect.left;

      setWidth(Math.min(Math.max(nextWidth, minWidth), maxWidth));
    };

    const stop = () => {
      resizing.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
    };
  }, [minWidth, maxWidth]);

  const startResize = () => {
    resizing.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
  };

  return {
    width,
    sidenavRef,
    resizing,
    startResize,
  };
};

export default useResize;
