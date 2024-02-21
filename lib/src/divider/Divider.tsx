import React from "react";
import styled from "styled-components";
import DividerPropsType from "./types";
import CoreTokens from "../common/coreTokens";

const DxcDivider = ({
  orientation = "horizontal",
  weight = "regular",
  color = "default",
}: DividerPropsType): JSX.Element => (
  <StyledDivider
    orientation={orientation}
    weight={weight}
    color={color}
    aria-orientation={orientation}
    role="separator"
  />
);

const StyledDivider = styled.hr<DividerPropsType>`
  ${({ orientation, weight, color }) => `
    border-color: ${color === "default" ? CoreTokens.color_grey_400 : CoreTokens.color_grey_700};
    ${orientation === "horizontal" ? "width" : "min-height"}: 100%;
    ${orientation === "horizontal" ? "height" : "width"}: 0px;
    border-width: ${weight === "regular" ? "1px" : "2px"};
    margin: 0px;
  `}
`;

export default DxcDivider;
