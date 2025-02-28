import styled from "styled-components";
import DividerPropsType from "./types";

const StyledDivider = styled.hr<DividerPropsType>`
  ${({ orientation, weight, color }) => `
    border-color: ${
      color === "lightGrey"
        ? "var(--border-color-neutral-lighter)"
        : color === "mediumGrey"
          ? "var(--border-color-neutral-medium)"
          : "var(--border-color-neutral-strongest)"
    };
    ${orientation === "horizontal" ? "width" : "min-height"}: 100%;
    ${orientation === "horizontal" ? "height" : "width"}: 0px;
    ${
      orientation === "horizontal"
        ? "border-width: " + (weight === "regular" ? "1px 0 0 0" : "2px 0 0 0")
        : "border-width: " + (weight === "regular" ? "0 0 0 1px" : "0 0 0 2px")
    };
    margin: 0px;
  `}
`;

const DxcDivider = ({
  orientation = "horizontal",
  weight = "regular",
  color = "mediumGrey",
  decorative = true,
}: DividerPropsType) => (
  <StyledDivider
    orientation={orientation}
    weight={weight}
    color={color}
    aria-orientation={orientation}
    aria-hidden={decorative}
  />
);

export default DxcDivider;
