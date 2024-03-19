import React from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import SingleItem from "./SingleItem";
import GroupItem from "./GroupItem";
import { MenuItemProps } from "./types";

const MenuItem = ({ item, depthLevel = 0 }: MenuItemProps) => (
  <StyledMenuItem role="treeitem">
    {"items" in item ? (
      <GroupItem {...item} depthLevel={depthLevel} />
    ) : (
      <SingleItem {...item} depthLevel={depthLevel} />
    )}
  </StyledMenuItem>
);

const StyledMenuItem = styled.li`
  display: grid;
  gap: ${CoreTokens.spacing_4};
`;

export default MenuItem;
