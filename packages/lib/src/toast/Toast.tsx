import { memo, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import ToastPropsType from "./types";
import useTimeout from "../utils/useTimeout";
import { HalstackLanguageContext } from "../HalstackContext";
import { responsiveSizes } from "../common/variables";
import getSemantic from "./utils";
import ToastIcon from "./ToastIcon";

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
  border-left: var(--border-width-m) var(--border-style-default) ${({ semantic }) => getSemantic(semantic).primaryColor};
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-low-x-position) var(--shadow-low-y-position) var(--shadow-low-blur) var(--shadow-low-spread)
    var(--shadow-dark);
  display: inline-flex;
  gap: var(--spacing-gap-l);
  justify-content: space-between;
  padding: var(--spacing-padding-xs) var(--spacing-padding-s);
  background-color: ${({ semantic }) => getSemantic(semantic).secondaryColor};
  animation: ${({ isClosing }) => (isClosing ? fadeOutDown : fadeInUp)} 0.3s ease forwards;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 100%;
  }
`;

const ContentContainer = styled.div<{ loading: ToastPropsType["loading"]; semantic: ToastPropsType["semantic"] }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  color: ${({ semantic }) => getSemantic(semantic).primaryColor};
  overflow: hidden;
  ${({ loading }) => !loading && `font-size: var(--height-s);`}
  > svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const Message = styled.span`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

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
    <Toast isClosing={isClosing} role="status" semantic={semantic}>
      <ContentContainer loading={loading} semantic={semantic}>
        <ToastIcon hideSemanticIcon={hideSemanticIcon} icon={icon} loading={loading} semantic={semantic} />
        <Message>{message}</Message>
      </ContentContainer>
      <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
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

export default memo(DxcToast);
