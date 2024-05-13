import React from "react";
import styled from "styled-components";
import DividerPropsType from "./types";
import CoreTokens from "../common/coreTokens";

const DxcDivider = ({
  orientation = "horizontal",
  weight = "regular",
  color = "mediumGrey",
  decorative = true,
}: DividerPropsType): JSX.Element => (
  <StyledDivider
    orientation={orientation}
    weight={weight}
    color={color}
    aria-orientation={orientation}
    aria-hidden={decorative}
  />
);

const StyledDivider = styled.hr<DividerPropsType>`
  ${({ orientation, weight, color }) => `
    border-color: ${
      color === "lightGrey"
        ? CoreTokens.color_grey_200
        : color === "mediumGrey"
          ? CoreTokens.color_grey_400
          : CoreTokens.color_grey_700
    };
    ${orientation === "horizontal" ? "width" : "min-height"}: 100%;
    ${orientation === "horizontal" ? "height" : "width"}: 0px;
    ${
      orientation === "horizontal"
        ? `border-width: ${weight === "regular" ? "1px 0 0 0" : "2px 0 0 0"}`
        : `border-width: ${weight === "regular" ? "0 0 0 1px" : "0 0 0 2px"}`
    };
    margin: 0px;
  `}
`;

export default DxcDivider;
