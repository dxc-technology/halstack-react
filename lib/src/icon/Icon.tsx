import React from "react";
import styled from "styled-components";
import IconPropsType from "./types";

const DxcIcon = ({ icon }: IconPropsType): JSX.Element => {
  return <IconContainer role="img" aria-label={icon} icon={icon} />;
};

const IconContainer = styled.span<{
  icon: string;
}>`
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v141/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2");
  }

  @font-face {
    font-family: "Material Icons Outlined";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v109/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2)
      format("woff2");
  }

  font-family: "Material Icons";
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
  ::before {
    content: "${(props) => props.icon}";
    fill: transparent;
  }
`;

export default DxcIcon;
