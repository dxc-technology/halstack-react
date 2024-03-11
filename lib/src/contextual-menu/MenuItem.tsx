import React from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import SingleItem from "./SingleItem";
import GroupItem from "./GroupItem";
import { MenuItemProps } from "./types";

const MenuItem = ({ item, level = 0 }: MenuItemProps) => (
  <StyledMenuItem role="menuitem">
    {"items" in item ? <GroupItem {...item} level={level} /> : <SingleItem {...item} level={level} />}
  </StyledMenuItem>
);

const StyledMenuItem = styled.li`
  display: grid;
  gap: ${CoreTokens.spacing_4};
`;

export default MenuItem;
