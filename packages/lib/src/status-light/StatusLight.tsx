import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import StatusLightPropsType from "./types";

const DxcStatusLight = ({ mode = "default", label, size = "medium" }: StatusLightPropsType): JSX.Element => {
  return (
    <StatusLightContainer size={size} aria-label={`${mode}: ${label}`} role="status">
      <StatusDot mode={mode} size={size} aria-hidden="true" />
      <StatusLabel mode={mode} size={size}>
        {label}
      </StatusLabel>
    </StatusLightContainer>
  );
};

const StatusLightContainer = styled.div<{ size: StatusLightPropsType["size"] }>`
  display: inline-flex;
  align-items: center;
  gap: ${CoreTokens.spacing_8};
`;

const StatusDot = styled.div<{
  mode: StatusLightPropsType["mode"];
  size: StatusLightPropsType["size"];
}>`
  width: ${({ size }) =>
    (size === "small" && CoreTokens.type_scale_01) ||
    (size === "medium" && CoreTokens.type_scale_02) ||
    (size === "large" && CoreTokens.type_scale_03) ||
    CoreTokens.type_scale_02};
  height: ${({ size }) =>
    (size === "small" && CoreTokens.type_scale_01) ||
    (size === "medium" && CoreTokens.type_scale_02) ||
    (size === "large" && CoreTokens.type_scale_03) ||
    CoreTokens.type_scale_02};
  border-radius: 50%;
  background-color: ${({ mode }) =>
    (mode === "default" && CoreTokens.color_grey_700) ||
    (mode === "error" && CoreTokens.color_red_700) ||
    (mode === "info" && CoreTokens.color_blue_700) ||
    (mode === "success" && CoreTokens.color_green_700) ||
    (mode === "warning" && CoreTokens.color_orange_700) ||
    CoreTokens.color_grey_700};
`;

const StatusLabel = styled.span<{
  mode: StatusLightPropsType["mode"];
  size: StatusLightPropsType["size"];
}>`
  font-size: ${({ size }) =>
    (size === "small" && CoreTokens.type_scale_01) ||
    (size === "medium" && CoreTokens.type_scale_02) ||
    (size === "large" && CoreTokens.type_scale_03) ||
    CoreTokens.type_scale_02};
  font-family: ${CoreTokens.type_sans};
  font-style: ${CoreTokens.type_normal};
  font-weight: ${CoreTokens.type_semibold};
  color: ${({ mode }) =>
    (mode === "default" && CoreTokens.color_grey_700) ||
    (mode === "error" && CoreTokens.color_red_700) ||
    (mode === "info" && CoreTokens.color_blue_700) ||
    (mode === "success" && CoreTokens.color_green_700) ||
    (mode === "warning" && CoreTokens.color_orange_700) ||
    CoreTokens.color_grey_700};
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default DxcStatusLight;
