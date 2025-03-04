import styled from "styled-components";
import StatusLightPropsType from "./types";

const getModeColor = (mode: Required<StatusLightPropsType>["mode"]) => {
  switch (mode) {
    case "default":
      return "var(--color-fg-neutral-strong);";
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

const getSizeValues = (size: Required<StatusLightPropsType>["size"]) => {
  switch (size) {
    case "small":
      return {
        dotSize: "8px",
        fontSize: "var(--typography-label-s)",
      };
    case "medium":
      return {
        dotSize: "var(--height-xxxs)",
        fontSize: "var(--typography-label-m)",
      };
    case "large":
      return {
        dotSize: "var(--height-xxs)",
        fontSize: "var(--typography-label-xl)",
      };
  }
};

const StatusLightContainer = styled.div<{ size: Required<StatusLightPropsType>["size"] }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ size }) => (size === "small" ? "var(--spacing-gap-xs)" : "var(--spacing-gap-s)")};
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function DxcStatusLight({ label, mode = "default", size = "medium" }: StatusLightPropsType) {
  return (
    <StatusLightContainer role="status" size={size}>
      <Dot mode={mode} size={size} aria-hidden="true" />
      <Label mode={mode} size={size}>
        {label}
      </Label>
    </StatusLightContainer>
  );
}
