import styled from "@emotion/styled";
import StatusLightPropsType from "./types";

// Color mapping based on Figma design tokens
const getModeColor = (mode: Required<StatusLightPropsType>["mode"]) => {
  switch (mode) {
    case "default":
      return "var(--color-fg-neutral-strong)";
    case "error":
      return "var(--color-fg-error-medium)";
    case "info":
      return "var(--color-fg-secondary-medium)";
    case "success":
      return "var(--color-fg-success-medium)";
    case "warning":
      return "var(--color-fg-warning-strong)";
  }
};

// Size mapping based on Figma design specifications
const getSizeValues = (size: Required<StatusLightPropsType>["size"]) => {
  switch (size) {
    case "small":
      return {
        dotSize: "8px", // Based on height/xxxs minus 4px for small
        fontSize: "var(--typography-label-s)", // Label/semibold-12
        gap: "var(--spacing-gap-xs)", // 4px
      };
    case "medium":
      return {
        dotSize: "var(--height-xxxs)", // 12px
        fontSize: "var(--typography-label-m)", // Label/semibold-14
        gap: "var(--spacing-gap-s)", // 8px
      };
    case "large":
      return {
        dotSize: "var(--height-xxs)", // 16px
        fontSize: "var(--typography-label-xl)", // Label/semibold-20
        gap: "var(--spacing-gap-s)", // 8px
      };
  }
};

const StatusLightContainer = styled.div<{ 
  size: Required<StatusLightPropsType>["size"];
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ size }) => getSizeValues(size).gap};
  max-width: 100%;
`;

const Dot = styled.div<{
  mode: Required<StatusLightPropsType>["mode"];
  size: Required<StatusLightPropsType>["size"];
}>`
  background-color: ${({ mode }) => getModeColor(mode)};
  border-radius: 50%;
  flex-shrink: 0;
  height: ${({ size }) => getSizeValues(size).dotSize};
  width: ${({ size }) => getSizeValues(size).dotSize};
`;

const Label = styled.span<{
  mode: Required<StatusLightPropsType>["mode"];
  size: Required<StatusLightPropsType>["size"];
}>`
  color: ${({ mode }) => getModeColor(mode)};
  font-family: var(--typography-font-family);
  font-size: ${({ size }) => getSizeValues(size).fontSize};
  font-weight: var(--typography-label-semibold);
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DxcStatusLightV2 = ({ 
  label, 
  mode = "default", 
  size = "medium" 
}: StatusLightPropsType) => {
  return (
    <StatusLightContainer role="status" size={size}>
      <Dot mode={mode} size={size} aria-hidden="true" />
      <Label mode={mode} size={size}>
        {label}
      </Label>
    </StatusLightContainer>
  );
};

export default DxcStatusLightV2;
