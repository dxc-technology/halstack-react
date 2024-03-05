import React from "react";
import styled from "styled-components";
import IconPropsType from "./types";

const DxcIcon = ({ icon }: IconPropsType): JSX.Element => {
  let filled = false;
  let iconName = icon;
  if (icon.startsWith("filled_")) {
    filled = true;
    iconName = icon.replace(/filled_/g, "");
  }
  return <IconContainer role="img" aria-label={icon} filled={filled} icon={iconName} aria-hidden="true" />;
};

const IconContainer = styled.span<{
  icon: string;
  filled: boolean;
}>`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
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
