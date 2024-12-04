import { memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import CoreTokens from "../common/coreTokens";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import DxcSpinner from "../spinner/Spinner";
import { HalstackProvider } from "../HalstackContext";
import ToastPropsType from "./types";
import useTimeout from "../utils/useTimeout";
import useTranslatedLabels from "../useTranslatedLabels";
import { responsiveSizes } from "../common/variables";

const getSemantic = (semantic: ToastPropsType["semantic"]) => {
  switch (semantic) {
    case "info":
      return {
        primaryColor: CoreTokens.color_blue_700,
        secondaryColor: CoreTokens.color_blue_100,
        icon: "filled_info",
      };
    case "success":
      return {
        primaryColor: CoreTokens.color_green_700,
        secondaryColor: CoreTokens.color_green_100,
        icon: "filled_check_circle",
      };
    case "warning":
      return {
        primaryColor: CoreTokens.color_orange_700,
        secondaryColor: CoreTokens.color_orange_100,
        icon: "filled_warning",
      };
    default:
      return { primaryColor: CoreTokens.color_purple_700, secondaryColor: CoreTokens.color_purple_100, icon: "" };
  }
};

const ContentContainer = styled.div<{ loading: ToastPropsType["loading"] }>`
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_8};
  overflow: hidden;

  ${({ loading }) => !loading && `font-size: ${CoreTokens.type_scale_05}`};
  > svg {
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
  white-space: nowrap;
`;

const fadeInUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOutDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const Toast = styled.output<{ semantic: ToastPropsType["semantic"]; isClosing: boolean }>`
  box-sizing: border-box;
  min-width: 200px;
  max-width: 600px;
  width: fit-content;
  border-radius: ${CoreTokens.border_radius_medium};
  border-left: ${CoreTokens.border_width_2} solid ${({ semantic }) => getSemantic(semantic).primaryColor};
  box-shadow: 0px 2px 2px 0px rgba(181, 181, 181, 0.4);
  display: inline-flex;
  justify-content: space-between;
  gap: ${CoreTokens.spacing_24};
  padding: ${CoreTokens.spacing_8} ${CoreTokens.spacing_12};
  background-color: ${({ semantic }) => getSemantic(semantic).secondaryColor};
  color: ${({ semantic }) => getSemantic(semantic).primaryColor};
  animation: ${({ isClosing }) => (isClosing ? fadeOutDown : fadeInUp)} 0.3s ease forwards;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 100%;
  }
`;

const spinnerTheme = {
  spinner: {
    accentColor: getSemantic("info").primaryColor,
  },
};

const ToastIcon = memo(
  ({
    icon,
    hideSemanticIcon,
    loading,
    semantic,
  }: Pick<ToastPropsType, "icon" | "hideSemanticIcon" | "loading" | "semantic">) => {
    if (semantic === "default") {
      return typeof icon === "string" ? <DxcIcon icon={icon} /> : icon;
    }
    if (semantic === "info" && loading) {
      return (
        <HalstackProvider theme={spinnerTheme}>
          <DxcSpinner mode="small" />
        </HalstackProvider>
      );
    }
    return !hideSemanticIcon && <DxcIcon icon={getSemantic(semantic).icon} />;
  }
);

ToastIcon.displayName = "ToastIcon";

const DxcToast = ({
  action,
  duration,
  hideSemanticIcon,
  icon,
  loading,
  message,
  onClear,
  semantic,
}: ToastPropsType) => {
  const [isClosing, setIsClosing] = useState(false);
  const translatedLabels = useTranslatedLabels();

  const clearClosingAnimationTimer = useTimeout(
    () => {
      setIsClosing(true);
    },
    loading ? undefined : duration - 300
  );

  const clearTimer = useTimeout(
    () => {
      onClear();
    },
    loading ? undefined : duration
  );

  return (
    <Toast semantic={semantic} isClosing={isClosing} role="status">
      <ContentContainer loading={loading}>
        <ToastIcon semantic={semantic} icon={icon} loading={loading} hideSemanticIcon={hideSemanticIcon} />
        <Message>{message}</Message>
      </ContentContainer>
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
          title={translatedLabels?.toast?.clearToastActionTitle ?? ""}
          onClick={() => {
            if (!loading) {
              clearClosingAnimationTimer();
              clearTimer();
            }
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

DxcToast.displayName = "DxcToast";

export default memo(DxcToast);
