import styled from "@emotion/styled";
import DividerPropsType from "./types";

const StyledDivider = styled.hr<DividerPropsType>`
  ${({ orientation, weight, colorWeight }) => `
    border-color: ${
      colorWeight === "light"
        ? "var(--border-color-neutral-lighter)"
        : colorWeight === "medium"
          ? "var(--border-color-neutral-medium)"
          : "var(--border-color-neutral-strongest)"
    };
    ${orientation === "horizontal" ? "width" : "min-height"}: 100%;
    ${orientation === "horizontal" ? "height" : "width"}: 0;
    ${
      orientation === "horizontal"
        ? `border-width: ${weight === "regular" ? "var(--border-width-s) 0 0 0" : "var(--border-width-m) 0 0 0"}`
        : `border-width: ${weight === "regular" ? "0 0 0 var(--border-width-s)" : "0 0 0 var(--border-width-m)"}`
    };
    margin: 0;
  `}
`;

export default function DxcDivider({
  colorWeight = "medium",
  decorative = true,
  orientation = "horizontal",
  weight = "regular",
}: DividerPropsType) {
  return (
    <StyledDivider
      aria-hidden={decorative}
      aria-orientation={orientation}
      colorWeight={colorWeight}
      orientation={orientation}
      weight={weight}
    />
  );
}
