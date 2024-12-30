import { memo, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import CoreTokens from "../common/coreTokens";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import DxcSpinner from "../spinner/Spinner";
import { HalstackLanguageContext, HalstackProvider } from "../HalstackContext";
import ToastPropsType from "./types";
import useTimeout from "../utils/useTimeout";
import { responsiveSizes } from "../common/variables";

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
  animation: ${({ isClosing }) => (isClosing ? fadeOutDown : fadeInUp)} 0.3s ease forwards;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 100%;
  }
`;

const ContentContainer = styled.div<{ loading: ToastPropsType["loading"]; semantic: ToastPropsType["semantic"] }>`
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_8};
  overflow: hidden;
  color: ${({ semantic }) => getSemantic(semantic).primaryColor};

  ${({ loading }) => !loading && `font-size: ${CoreTokens.type_scale_05}`};
  > svg {
    width: 24px;
    height: 24px;
  }
`;

const Message = styled.span`
  color: ${CoreTokens.color_grey_900};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_02};
  font-weight: ${CoreTokens.type_semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
    } else if (semantic === "info" && loading) {
      return (
        <HalstackProvider theme={spinnerTheme}>
          <DxcSpinner mode="small" />
        </HalstackProvider>
      );
    } else {
      return !hideSemanticIcon && <DxcIcon icon={getSemantic(semantic).icon} />;
    }
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
  const translatedLabels = useContext(HalstackLanguageContext);

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
      <ContentContainer loading={loading} semantic={semantic}>
        <ToastIcon hideSemanticIcon={hideSemanticIcon} icon={icon} loading={loading} semantic={semantic} />
        <Message>{message}</Message>
      </ContentContainer>
      <DxcFlex alignItems="center" gap="0.25rem">
        {action && (
          <DxcButton
            icon={action.icon}
            label={action.label}
            mode="tertiary"
            onClick={action.onClick}
            semantic={semantic}
            size={{ height: "small" }}
          />
        )}
        <DxcActionIcon
          icon="clear"
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
          title={translatedLabels.toast.clearToastActionTitle}
        />
      </DxcFlex>
    </Toast>
  );
};

DxcToast.displayName = "DxcToast";

export default memo(DxcToast);
