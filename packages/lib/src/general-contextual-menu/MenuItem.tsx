import styled from "@emotion/styled";
import GroupItem from "./GroupItem";
import SingleItem from "./SingleItem";
import { MenuItemProps } from "./types";

const MenuItemContainer = styled.li<{ depthLevel: number }>`
  display: grid;
  gap: var(--spacing-gap-xs);
  ${({ depthLevel }) =>
    depthLevel > 0 &&
    `
      margin-left: var(--spacing-padding-m);
      border-left: var(--border-width-s) solid var(--border-color-neutral-lighter);
    `}
`;

export default function MenuItem({ item, depthLevel = 0 }: MenuItemProps) {
  return (
    <MenuItemContainer role="menuitem" depthLevel={depthLevel}>
      {"items" in item ? (
        <GroupItem {...item} depthLevel={depthLevel} />
      ) : (
        <SingleItem {...item} depthLevel={depthLevel} />
      )}
    </MenuItemContainer>
  );
}
