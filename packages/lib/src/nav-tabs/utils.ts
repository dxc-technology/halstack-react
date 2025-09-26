import { ReactNode, ReactElement, isValidElement } from "react";

type ElementWithChildren = ReactElement<{ children?: ReactNode; [key: string]: unknown }>;

export const getPropInChild = (child: ReactNode, propName: string): string | boolean | undefined => {
  if (isValidElement(child)) {
    const el = child as ElementWithChildren;
    const value = el.props[propName];

    if (typeof value === "string" || typeof value === "boolean") {
      return value;
    }

    if (el.props.children) {
      return getPropInChild(el.props.children, propName);
    }
  }
};

export const getLabelFromTab = (child: ReactNode): string | undefined => {
  if (typeof child === "string") {
    return child;
  }
  if (isValidElement(child)) {
    const el = child as ElementWithChildren;
    const children = el.props.children;

    if (Array.isArray(children) && isValidElement(children[0] as ReactNode)) {
      return getLabelFromTab(children[0] as ReactNode);
    }

    return getLabelFromTab(children);
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
