import styled from "styled-components";

const DxcIcon = ({ icon }: { icon: string }): JSX.Element => (
  <IconContainer
    role="img"
    aria-label={icon}
    filled={icon.startsWith("filled_")}
    icon={icon.startsWith("filled_") ? icon.replace(/filled_/g, "") : icon}
    aria-hidden="true"
  />
);

const IconContainer = styled.span<{
  icon: string;
  filled: boolean;
}>`
  @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1");
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

export default DxcIcon;
