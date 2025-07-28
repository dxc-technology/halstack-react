import styled from "@emotion/styled";

const IconContainer = styled.span<{
  icon: string;
  filled: boolean;
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
  font-variation-settings: ${(props) => (props.filled ? "'FILL' 1" : "'FILL' 0")};
  ::before {
    content: "${(props) => props.icon}";
  }
`;

export default function DxcIcon({ icon }: { icon: string }) {
  return (
    <IconContainer
      aria-hidden="true"
      filled={icon.startsWith("filled_")}
      icon={icon.startsWith("filled_") ? icon.replace(/filled_/g, "") : icon}
      role="img"
    />
  );
}
