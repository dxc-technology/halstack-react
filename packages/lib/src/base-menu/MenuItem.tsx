import styled from "@emotion/styled";
import GroupItem from "./GroupItem";
import SingleItem from "./SingleItem";
import { MenuItemProps } from "./types";
import { isGroupItem } from "./utils";

const MenuItemContainer = styled.li`
  display: grid;
  margin-right: var(--spacing-padding-xxs);
`;

export default function MenuItem({ item, depthLevel = 0 }: MenuItemProps) {
  return (
    <MenuItemContainer role="menuitem">
      {isGroupItem(item) ? (
        <GroupItem {...item} depthLevel={depthLevel} />
      ) : (
        <SingleItem {...item} depthLevel={depthLevel} />
      )}
    </MenuItemContainer>
  );
}
