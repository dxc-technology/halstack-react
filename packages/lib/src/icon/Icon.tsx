import styled from "@emotion/styled";
import IconProps from "./types";

const IconContainer = styled.span<{
  icon: string;
  filled: boolean;
  size?: string;
  color?: string;
}>`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-variation-settings: ${({ filled }) => (filled ? "'FILL' 1" : "'FILL' 0")};
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  ::before {
    content: "${({ icon }) => icon}";
  }
`;

const SvgContainer = styled.span<{
  size?: string;
  color?: string;
}>`
  color: ${({ color }) => color};
  svg {
    height: ${({ size }) => (size ? size : "var(--height-s)")};
    width: auto;
    fill: currentColor;
  }
`;

export default function DxcIcon({ ariaLabel, color, icon, size }: IconProps) {
  if (typeof icon !== "string")
    return (
      <SvgContainer aria-label={ariaLabel} aria-hidden={ariaLabel ? undefined : "true"} size={size} color={color}>
        {icon}
      </SvgContainer>
    );
  return (
    <IconContainer
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : "true"}
      filled={icon.startsWith("filled_")}
      icon={icon.startsWith("filled_") ? icon.replace(/filled_/g, "") : icon}
      size={size}
      color={color}
      role="img"
    />
  );
}
