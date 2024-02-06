import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import StatusLightPropsType from "./types";

const DxcStatusLight = ({ mode = "default", label, size = "medium" }: StatusLightPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.statusLight}>
      <StatusLightContainer size={size} aria-label={`${mode}: ${label}`} data-testid="status_light-container">
        <StatusDot mode={mode} size={size} aria-hidden="true" data-testid="status-dot" />
        <StatusLabel mode={mode} size={size}>
          {label}
        </StatusLabel>
      </StatusLightContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "12px",
  medium: "14px",
  large: "16px",
};

const paddings = {
  small: "2px",
  medium: "2.5px",
  large: "4.5px",
};

const StatusLightContainer = styled.div<{ size: StatusLightPropsType["size"] }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ size }) => paddings[size] ?? paddings["medium"]} 0px;
`;

const StatusDot = styled.div<{
  mode: StatusLightPropsType["mode"];
  size: StatusLightPropsType["size"];
}>`
  width: ${({ size }) => sizes[size] ?? sizes["medium"]};
  height: ${({ size }) => sizes[size] ?? sizes["medium"]};
  border-radius: 50%;
  background-color: ${(props) =>
    (props.mode === "default" && props.theme.defaultColor) ||
    (props.mode === "error" && props.theme.errorColor) ||
    (props.mode === "info" && props.theme.infoColor) ||
    (props.mode === "success" && props.theme.successColor) ||
    (props.mode === "warning" && props.theme.warningColor) ||
    props.theme.defaultColor};
  margin-right: 8px;
`;

const StatusLabel = styled.span<{
  mode: StatusLightPropsType["mode"];
  size: StatusLightPropsType["size"];
}>`
  font-size: ${({ size }) => sizes[size] ?? sizes["medium"]};
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) =>
    (props.mode === "default" && props.theme.defaultColor) ||
    (props.mode === "error" && props.theme.errorColor) ||
    (props.mode === "info" && props.theme.infoColor) ||
    (props.mode === "success" && props.theme.successColor) ||
    (props.mode === "warning" && props.theme.warningColor) ||
    props.theme.defaultColor};
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default DxcStatusLight;
