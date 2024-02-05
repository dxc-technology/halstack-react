import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import { getMargin } from "../common/utils";
import DxcBox from "../box/Box";
import StatusLightPropsType from "./types";

const DxcStatusLight = ({ mode = "default", label, size = "medium" }: StatusLightPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [isHovered, changeIsHovered] = useState(false);

  return (
    <ThemeProvider theme={colorsTheme.statusLight}>
      <StatusLightWrapper>
        <StatusDot mode={mode} size={size} />
        <StatusLabel mode={mode} size={size}>
          {label}
        </StatusLabel>
      </StatusLightWrapper>
    </ThemeProvider>
  );
};

const sizes = {
  small: "12px",
  medium: "14px",
  large: "16px",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

// Define the styled components
const StatusLightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StatusDot = styled.div<{
  mode: StatusLightPropsType["mode"];
  size: StatusLightPropsType["size"];
}>`
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  border-radius: 50%;
  background-color: ${(props) =>
    (props.mode === "default" && props.theme.defaultColor) ||
    (props.mode === "error" && props.theme.errorColor) ||
    (props.mode === "info" && props.theme.infoColor) ||
    (props.mode === "success" && props.theme.successColor) ||
    (props.mode === "warning" && props.theme.warningColor)};
  margin-right: 8px;
`;

const StatusLabel = styled.span<{
  mode: StatusLightPropsType["mode"];
  size: StatusLightPropsType["size"];
}>`
  font-size: ${({ size }) => sizes[size]};
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) =>
    (props.mode === "default" && props.theme.defaultColor) ||
    (props.mode === "error" && props.theme.errorColor) ||
    (props.mode === "info" && props.theme.infoColor) ||
    (props.mode === "success" && props.theme.successColor) ||
    (props.mode === "warning" && props.theme.warningColor)};
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default DxcStatusLight;
