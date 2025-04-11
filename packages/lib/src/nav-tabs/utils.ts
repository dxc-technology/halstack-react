import { ReactNode, ReactElement } from "react";

export const getPropInChild = (child: ReactNode, propName: string): string | undefined => {
  if (child && typeof child === "object" && "props" in child) {
    const childWithProps = child as ReactElement;
    if (childWithProps.props[propName]) {
      return childWithProps.props[propName];
    } else if (childWithProps.props.children) {
      return getPropInChild(childWithProps.props.children, propName);
    }
  }
};

export const getLabelFromTab = (child: ReactNode): string | undefined => {
  if (typeof child === "string") {
    return child;
  } else if (child && typeof child === "object" && "props" in child) {
    const childWithProps = child as ReactElement;
    return Array.isArray(childWithProps.props.children)
      ? getLabelFromTab(childWithProps.props.children[0])
      : getLabelFromTab(childWithProps.props.children);
  }
};

export const getPreviousTabIndex = (array: ReactElement[], initialIndex: number): number => {
  let index = initialIndex === 0 ? array.length - 1 : initialIndex - 1;
  while (getPropInChild(array[index], "disabled")) {
    index = index === 0 ? array.length - 1 : index - 1;
  }
  return index;
};

export const getNextTabIndex = (array: ReactElement[], initialIndex: number): number => {
  let index = initialIndex === array.length - 1 ? 0 : initialIndex + 1;
  while (getPropInChild(array[index], "disabled")) {
    index = index === array.length - 1 ? 0 : index + 1;
  }
  return index;
};
