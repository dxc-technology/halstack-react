import styled from "@emotion/styled";
import { SubMenuProps } from "./types";
import NavigationTreeContext from "./NavigationTreeContext";
import { useContext } from "react";

const SubMenuContainer = styled.ul<{ depthLevel: number; displayGroupLines?: boolean }>`
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--spacing-gap-xs);
  list-style: none;

  ${({ depthLevel, displayGroupLines }) =>
    displayGroupLines &&
    depthLevel >= 0 &&
    `
      margin-left: calc(var(--spacing-padding-m) + ${depthLevel} * var(--spacing-padding-xs));
      border-left: var(--border-width-s) solid var(--border-color-neutral-lighter);
    `}
`;

export default function SubMenu({ children, id, depthLevel = 0 }: SubMenuProps) {
  const { displayGroupLines } = useContext(NavigationTreeContext) ?? {};
  return (
    <SubMenuContainer id={id} role="menu" depthLevel={depthLevel} displayGroupLines={displayGroupLines}>
      {children}
    </SubMenuContainer>
  );
}
