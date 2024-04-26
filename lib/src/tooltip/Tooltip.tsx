import React, { useState } from "react";
import styled, { css } from "styled-components";
import TooltipPropsType from "./types";
import * as Tooltip from "@radix-ui/react-tooltip";
import CoreTokens from "../common/coreTokens";

const ARROW_SIZE = 8;

const DxcTooltip = ({ position = "bottom", title, children }: TooltipPropsType): JSX.Element => {
  const [isOpen, changeIsOpen] = useState(false);

  const handleOnOpenTooltip = () => {
    changeIsOpen(true);
  };
  const handleOnCloseTooltip = () => {
    changeIsOpen(false);
  };

  return title ? (
    <Tooltip.Provider>
      <Tooltip.Root open={isOpen}>
        <Tooltip.Trigger
          asChild
          onMouseEnter={handleOnOpenTooltip}
          onMouseLeave={handleOnCloseTooltip}
        >
          <TooltipTrigger>{children}</TooltipTrigger>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <StyledTooltipContent
            side={position}
            sideOffset={ARROW_SIZE}
            data-testid={"popover-content"}
          >
            <TooltipContainer>{title}</TooltipContainer>
            <TooltipArrow asChild aria-hidden>
              <Triangle size={ARROW_SIZE} />
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
  bottom: ${(props) => `-${props.size / 2}px`};
  ${(props) => css`
    left: calc(50% - ${props.size / 2}px);
  `}
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: rotate(-45deg);
  border-radius: 0 0 0 1px;
`;

const TooltipTrigger = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledTooltipContent = styled(Tooltip.Content)`
  z-index: 2147483647;

`;

const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${CoreTokens.color_grey_800};
`;

const TooltipContainer = styled.div`
  height: 32px;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: ${CoreTokens.type_scale_01};
  font-family: ${CoreTokens.type_sans};
  white-space: nowrap;
  color: ${CoreTokens.color_white};
  background-color: ${CoreTokens.color_grey_800};
  border-color: ${CoreTokens.color_grey_800};
`;

export default DxcTooltip;
