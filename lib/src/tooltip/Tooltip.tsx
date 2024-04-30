import React from "react";
import styled from "styled-components";
import TooltipPropsType from "./types";
import * as Tooltip from "@radix-ui/react-tooltip";
import CoreTokens from "../common/coreTokens";

const DxcTooltip = ({ position = "bottom", label, children }: TooltipPropsType): JSX.Element => {
  const SIZE = 8;

  return label ? (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <TooltipTrigger>{children}</TooltipTrigger>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <StyledTooltipContent side={position} sideOffset={SIZE} data-testid={"popover-content"}>
            <TooltipContainer>{label}</TooltipContainer>
            <TooltipArrow asChild aria-hidden>
              <Triangle size={SIZE} />
            </TooltipArrow>
          </StyledTooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ) : (
    <>{children}</>
  );
};
const Triangle = styled.span<{ size: number }>`
  display: block;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  background-color: ${CoreTokens.color_grey_800};
  position: absolute;
  left: ${(props) => `calc(50% - ${props.size / 2}px)`};
  bottom: ${(props) =>
    `-${props.size / 2 - 1}px`}; // Moved up 1 pixel to prevent sub-pixel alignment causing visual inconsistencies
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: rotate(-45deg);
  border-radius: 0 0 0 1px;
`;

const TooltipTrigger = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledTooltipContent = styled(Tooltip.Content)`
  display: flex;
  z-index: 2147483647;

  animation-duration: 0.3s;
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

const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${CoreTokens.color_grey_800};
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
