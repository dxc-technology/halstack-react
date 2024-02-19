import React from "react";
import styled from "styled-components";
import DividerPropsType from "./types";
import CoreTokens from "../common/coreTokens";

const DxcDivider = ({
  orientation = "horizontal",
  weight = "regular",
  width = "fixed",
  color = "default",
}: DividerPropsType): JSX.Element => (
  <StyledDivider
    orientation={orientation}
    weight={weight}
    width={width}
    color={color}
    aria-orientation={orientation}
    role="separator"
  />
);

const StyledDivider = styled.div<DividerPropsType>`
  ${({ orientation, weight, width, color }) => `
    background-color: ${color === "default" ? CoreTokens.color_grey_400 : CoreTokens.color_grey_700};
    ${
      orientation === "horizontal" && `width: ${width === "fixed" ? "480px" : width === "Full-Width" ? "100%" : width}`
    };
    ${orientation === "horizontal" && `height: ${weight === "regular" ? "1px" : "2px"}`};
    ${orientation === "vertical" && `height: ${width === "fixed" ? "240px" : width === "Full-Width" ? "100%" : width}`};
    ${orientation === "vertical" && `width: ${weight === "regular" ? "1px" : "2px"}`};
  `}
`;

export default DxcDivider;
