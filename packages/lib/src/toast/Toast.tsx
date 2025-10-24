import { memo, useContext, useState, useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import { HalstackLanguageContext } from "../HalstackContext";
import ToastPropsType from "./types";
import useTimeout from "../utils/useTimeout";
import { responsiveSizes } from "../common/variables";
import getSemantic from "./utils";
import ToastIcon from "./ToastIcon";
import DxcActionIcon from "../action-icon/ActionIcon";

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
  box-shadow: var(--shadow-100);
  display: inline-flex;
  gap: var(--spacing-gap-l);
  justify-content: space-between;
  padding: var(--spacing-padding-xs) var(--spacing-padding-s);
  background-color: ${({ semantic }) => getSemantic(semantic).secondaryColor};
  animation: ${({ isClosing }) => (isClosing ? fadeOutDown : fadeInUp)} 0.3s ease forwards;

  @media (max-width: ${responsiveSizes.medium}rem) {
    max-width: 100%;
  }

  &:focus {
    outline: none;
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
  const toastRef = useRef<HTMLOutputElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const translatedLabels = useContext(HalstackLanguageContext);

  // Timeouts
  const clearClosingAnimationTimer = useTimeout(() => setIsClosing(true), loading ? undefined : duration - 300);

  const clearTimer = useTimeout(() => onClear(), loading ? undefined : duration);

  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    toastRef.current?.focus();

    return () => {
      previouslyFocusedElement.current?.focus?.();
    };
  }, []);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLOutputElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();

      const focusableElements = toastRef.current?.querySelectorAll<HTMLElement>(
        'button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];
      const activeElement = document.activeElement;

      const elementsArray = Array.from(focusableElements);

      if (!event.shiftKey) {
        if (activeElement === lastElement) {
          previouslyFocusedElement.current?.focus?.();
        } else {
          const currentIndex = elementsArray.indexOf(activeElement as HTMLElement);
          const nextElement = focusableElements[currentIndex + 1];
          nextElement?.focus();
        }
      } else {
        if (activeElement === firstElement) {
          previouslyFocusedElement.current?.focus?.();
        } else {
          const currentIndex = elementsArray.indexOf(activeElement as HTMLElement);
          const prevElement = focusableElements[currentIndex - 1];
          prevElement?.focus();
        }
      }
    }
  };

  return (
    <Toast
      onKeyDown={handleOnKeyDown}
      isClosing={isClosing}
      role="status"
      semantic={semantic}
      tabIndex={-1}
      ref={toastRef}
    >
      <ContentContainer loading={loading} semantic={semantic}>
        <ToastIcon hideSemanticIcon={hideSemanticIcon} icon={icon} loading={loading} semantic={semantic} />
        <Message>{message}</Message>
      </ContentContainer>
      <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
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
          size="xsmall"
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
