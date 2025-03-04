import styled from "styled-components";
import GroupItem from "./GroupItem";
import SingleItem from "./SingleItem";
import { MenuItemProps } from "./types";

const MenuItemContainer = styled.li`
  display: grid;
  gap: var(--spacing-gap-xs);
`;

export default function MenuItem({ item, depthLevel = 0 }: MenuItemProps) {
  return (
    <MenuItemContainer role="menuitem">
      {"items" in item ? (
        <GroupItem {...item} depthLevel={depthLevel} />
      ) : (
        <SingleItem {...item} depthLevel={depthLevel} />
      )}
    </MenuItemContainer>
  );
}
