import styled from "styled-components";
import GroupItem from "./GroupItem";
import SingleItem from "./SingleItem";
import { MenuItemProps } from "./types";

const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
`;

const MenuItem = ({ item, depthLevel = 0 }: MenuItemProps) => (
  <StyledMenuItem role="menuitem">
    {"items" in item ? (
      <GroupItem {...item} depthLevel={depthLevel} />
    ) : (
      <SingleItem {...item} depthLevel={depthLevel} />
    )}
  </StyledMenuItem>
);

export default MenuItem;
