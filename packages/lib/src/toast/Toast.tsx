import styled from "styled-components";
import ToastPropsType from "./types";
import CoreTokens from "../common/coreTokens";
import DxcButton from "../button/Button";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcIcon from "../icon/Icon";
import DxcFlex from "../flex/Flex";
import DxcSpinner from "../spinner/Spinner";
import { memo, useEffect, useState } from "react";
import useTimeout from "../utils/useTimeout";

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

const Message = styled.span`
  color: ${CoreTokens.color_black};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_02};
  font-weight: ${CoreTokens.type_semibold};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Toast = styled.output<{ semantic: ToastPropsType["semantic"]; isVisible: boolean; isClosing: boolean }>`
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

  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-in;
  ${({ isClosing }) => isClosing && "opacity: 0; pointer-events: none;"}

  color: ${({ semantic }) => getSemantic(semantic).primaryColor};
  font-size: ${CoreTokens.type_scale_05};
  svg {
    width: 24px;
    height: 24px;
  }
`;

const DxcToast = ({
  action,
  icon,
  loading,
  message,
  onClear,
  semantic,
  showSemanticIcon = true,
  delay,
}: ToastPropsType) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clearClosingAnimationTimer = useTimeout(() => {
    setIsClosing(true);
  }, delay - 300);

  const clearTimer = useTimeout(() => {
    onClear();
  }, delay);

  return (
    <Toast semantic={semantic} isVisible={isVisible} isClosing={isClosing} role="status">
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
        <DxcActionIcon
          icon="clear"
          title="Clear toast"
          onClick={() => {
            clearClosingAnimationTimer();
            clearTimer();

            setIsClosing(true);
            setTimeout(() => {
              onClear();
            }, 300);
          }}
        />
      </DxcFlex>
    </Toast>
  );
};

export default memo(DxcToast);
