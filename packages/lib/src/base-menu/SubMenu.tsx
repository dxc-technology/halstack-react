import styled from "@emotion/styled";
import { SubMenuProps } from "./types";
import BaseMenuContext from "./BaseMenuContext";
import { useContext } from "react";

const SubMenuContainer = styled.ul<{
  depthLevel: number;
  displayGroupLines?: boolean;
  isHorizontal?: boolean;
  isPopOver?: boolean;
}>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? "row" : "column")};
  gap: ${({ isHorizontal }) => (isHorizontal ? "var(--spacing-gap-s)" : "var(--spacing-gap-xs)")};
  list-style: none;
  ${({ depthLevel, displayGroupLines, isPopOver }) =>
    isPopOver
      ? `
      min-width: 200px;
      max-width: 320px;
    `
      : displayGroupLines &&
        depthLevel >= 0 &&
        `
      margin-left: calc(var(--spacing-padding-m) + ${depthLevel} * var(--spacing-padding-xs));
      border-left: var(--border-width-s) solid var(--border-color-neutral-lighter);
    `}
`;

export default function SubMenu({
  children,
  id,
  depthLevel = 0,
  isHorizontal = false,
  isPopOver = false,
}: SubMenuProps) {
  const { displayGroupLines } = useContext(BaseMenuContext) ?? {};
  return (
    <SubMenuContainer
      id={id}
      role="menu"
      depthLevel={depthLevel}
      displayGroupLines={displayGroupLines}
      isHorizontal={isHorizontal}
      isPopOver={isPopOver}
    >
      {children}
    </SubMenuContainer>
  );
}
