import { ReactElement } from "react";
import { TabsTabProps } from "./types";

export const getNextTabIndex = (array: ReactElement<TabsTabProps>[], initialIndex: number): number => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (array[index]?.props.disabled) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
};

export const getPreviousTabIndex = (array: ReactElement<TabsTabProps>[], initialIndex: number): number => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (array[index]?.props.disabled) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
};
