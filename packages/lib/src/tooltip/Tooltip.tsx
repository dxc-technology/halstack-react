import styled from "@emotion/styled";
import TooltipPropsType, { TooltipWrapperProps } from "./types";
import { useContext } from "react";
import { Root, Trigger, Portal, Arrow, Content } from "@radix-ui/react-tooltip";
import { Provider } from "@radix-ui/react-tooltip";
import { TooltipContext } from "./TooltipContext";

const TooltipTriggerContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledTooltipContent = styled(Content)`
  z-index: 2147483647;

  animation-duration: 0.2s;
  animation-timing-function: ease-out;

  /* Additional optimization to prevent blurry text in certain browsers */
  -webkit-font-smoothing: antialiased;
  transform: translateZ(0) scale(1, 1);

  &[data-side="top"] {
    animation-name: slideUp;
  }
  &[data-side="bottom"] {
    animation-name: slideDown;
  }
  &[data-side="left"] {
    animation-name: slideLeft;
  }
  &[data-side="right"] {
    animation-name: slideRight;
  }
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const TooltipContainer = styled.div`
  box-sizing: border-box;
  max-width: 271px;
  border-radius: var(--border-radius-s);
  background-color: var(--color-bg-neutral-stronger);
  padding: var(--spacing-padding-xs) var(--spacing-padding-s);
  color: var(--color-fg-neutral-bright);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-s);
  font-weight: var(--typography-label-regular);
  overflow-wrap: break-word;
`;

const triangleIcon = (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    display="block"
  >
    <path
      d="M0.351562 0L5.30131 4.94975C5.69184 5.34027 6.325 5.34027 6.71552 4.94975L11.6653 0H6.00842H0.351562Z"
      fill="var(--color-bg-neutral-stronger)"
    />
  </svg>
);

export const Tooltip = ({
  children,
  hasAdditionalContainer,
  label,
  position = "bottom",
}: { hasAdditionalContainer?: boolean } & TooltipPropsType) => {
  const hasTooltip = useContext(TooltipContext);

  return (
    <TooltipContext.Provider value={true}>
      {label && !hasTooltip ? (
        <Provider delayDuration={300}>
          <Root>
            <Trigger asChild>
              {hasAdditionalContainer ? <TooltipTriggerContainer>{children}</TooltipTriggerContainer> : children}
            </Trigger>
            <Portal>
              <StyledTooltipContent side={position} sideOffset={8}>
                <TooltipContainer>{label}</TooltipContainer>
                <Arrow asChild aria-hidden>
                  {triangleIcon}
                </Arrow>
              </StyledTooltipContent>
            </Portal>
          </Root>
        </Provider>
      ) : (
        children
      )}
    </TooltipContext.Provider>
  );
};

export const TooltipWrapper = ({ condition, children, label }: TooltipWrapperProps) =>
  condition ? <Tooltip label={label}>{children}</Tooltip> : <>{children}</>;

export default function DxcTooltip(props: TooltipPropsType) {
  return <Tooltip {...props} hasAdditionalContainer />;
}
