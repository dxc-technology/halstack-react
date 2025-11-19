import { useState, useContext, cloneElement, ReactNode } from "react";
import BaseMenuContext from "./BaseMenuContext";
import { ItemActionProps } from "./types";

export function useItemAction({ badge, renderItem }: ItemActionProps) {
  const [hasTooltip, setHasTooltip] = useState(false);
  const modifiedBadge = badge && cloneElement(badge, { size: "small" });
  const { displayControlsAfter, hasPopOver, displayGroupLines, isHorizontal } = useContext(BaseMenuContext) ?? {};

  const handleTextMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const text = event.currentTarget;
    setHasTooltip(text.scrollWidth > text.clientWidth);
  };
  const getWrapper = (children: ReactNode) => (renderItem ? renderItem({ children }) : children);

  return {
    hasTooltip,
    modifiedBadge,
    displayControlsAfter,
    hasPopOver,
    displayGroupLines,
    isHorizontal,
    handleTextMouseEnter,
    getWrapper,
  };
}
