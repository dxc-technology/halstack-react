import { MutableRefObject, useState, useCallback, useEffect, ReactElement } from "react";
import { TabProps } from "./types";

export const getNextTabIndex = (array: ReactElement<TabProps>[], initialIndex: number): number => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (array[index]?.props.disabled) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
};

export const getPreviousTabIndex = (array: ReactElement<TabProps>[], initialIndex: number): number => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (array[index]?.props.disabled) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
};

export const useResize = (refTabList: MutableRefObject<HTMLDivElement | null>) => {
  const [viewWidth, setViewWidth] = useState(0);

  const handleWindowSizeChange = useCallback(() => {
    setViewWidth(refTabList?.current?.offsetWidth ?? 0);
  }, [refTabList]);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return viewWidth;
};
