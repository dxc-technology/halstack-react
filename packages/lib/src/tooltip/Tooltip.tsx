import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import TooltipPropsType from "./types";
import { TooltipContext } from "./TooltipContext";
import { useContext } from "react";

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
      fill={CoreTokens.color_grey_800}
    />
  </svg>
);

const DxcTooltip = ({ position = "bottom", label, children }: TooltipPropsType): JSX.Element => {
  const hasTooltip = useContext(TooltipContext);

  return (
    <TooltipContext.Provider value={true}>
      {label && !hasTooltip ? (
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <TooltipTriggerContainer>{children}</TooltipTriggerContainer>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <StyledTooltipContent side={position} sideOffset={8}>
                <TooltipContainer>{label}</TooltipContainer>
                <Tooltip.Arrow asChild aria-hidden>
                  {triangleIcon}
                </Tooltip.Arrow>
              </StyledTooltipContent>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : (
        <>{children}</>
      )}
    </TooltipContext.Provider>
  );
};

const TooltipTriggerContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledTooltipContent = styled(Tooltip.Content)`
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
  padding: 8px 12px;
  border-radius: 4px;
  font-size: ${CoreTokens.type_scale_01};
  font-family: ${CoreTokens.type_sans};
  max-width: 242px;
  color: ${CoreTokens.color_white};
  background-color: ${CoreTokens.color_grey_800};
  border-color: ${CoreTokens.color_grey_800};
`;

export default DxcTooltip;
