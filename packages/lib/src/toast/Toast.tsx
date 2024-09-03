import styled, { keyframes } from "styled-components";
import ToastPropsType from "./types";
import CoreTokens from "../common/coreTokens";
import DxcButton from "../button/Button";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcIcon from "../icon/Icon";
import DxcFlex from "../flex/Flex";
import DxcSpinner from "../spinner/Spinner";
import { memo, useEffect, useState } from "react";

const getSemantic = (semantic: ToastPropsType["semantic"]) => {
  switch (semantic) {
    case "info":
      return {
        primaryColor: CoreTokens.color_blue_700,
        secondaryColor: CoreTokens.color_blue_100,
        icon: "filled_info",
      };
    case "warning":
      return {
        primaryColor: CoreTokens.color_yellow_700,
        secondaryColor: CoreTokens.color_yellow_100,
        icon: "filled_warning",
      };
    case "success":
      return {
        primaryColor: CoreTokens.color_green_700,
        secondaryColor: CoreTokens.color_green_100,
        icon: "filled_check_circle",
      };
    default:
      return { primaryColor: CoreTokens.color_purple_700, secondaryColor: CoreTokens.color_purple_100, icon: "" };
  }
};

const DxcToast = ({
  action,
  icon,
  loading,
  message,
  onClear,
  semantic,
  showSemanticIcon = true,
  visible,
}: ToastPropsType) => {
  const [animationEnds, setAnimationEnds] = useState(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setAnimationEnds(true);
      }, 300);
    }
  }, [visible]);

  return (
    <Toast semantic={semantic} visible={visible} animationEnds={animationEnds} role="status">
      <DxcFlex alignItems="center" gap="0.5rem">
        {semantic !== "default" && showSemanticIcon && <DxcIcon icon={getSemantic(semantic).icon} />}
        {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
        {loading && <DxcSpinner mode="small" />}
        <Message>{message}</Message>
      </DxcFlex>
      <DxcFlex alignItems="center" gap="0.25rem">
        {action && (
          <DxcButton
            semantic={semantic}
            mode="tertiary"
            size={{ height: "small" }}
            label={action.label}
            icon={action.icon}
            onClick={action.onClick}
          />
        )}
        <DxcActionIcon icon="clear" title="Clear toast" onClick={onClear} />
      </DxcFlex>
    </Toast>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

const Toast = styled.output<{ semantic: ToastPropsType["semantic"]; visible: boolean; animationEnds: boolean }>`
  min-width: 200px;
  max-width: 600px;
  border-radius: ${CoreTokens.border_radius_medium};
  border-left: ${CoreTokens.border_width_2} solid ${({ semantic }) => getSemantic(semantic).primaryColor};
  box-shadow: 0px 2px 2px 0px rgba(181, 181, 181, 0.4);
  display: inline-flex;
  justify-content: space-between;
  gap: ${CoreTokens.spacing_24};
  padding: ${CoreTokens.spacing_8} ${CoreTokens.spacing_12};
  background-color: ${({ semantic }) => getSemantic(semantic).secondaryColor};
  animation: ${({ visible, animationEnds }) => (visible ? !animationEnds && fadeIn : fadeOut)} .3s ease forwards;
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};

  color: ${({ semantic }) => getSemantic(semantic).primaryColor};
  font-size: ${CoreTokens.type_scale_05};
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Message = styled.span`
  color: ${CoreTokens.color_black};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_02};
  font-weight: ${CoreTokens.type_semibold};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default memo(DxcToast);
