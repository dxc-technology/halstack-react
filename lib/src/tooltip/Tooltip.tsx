import React, { useState } from "react";
import styled, { css } from "styled-components";
import TooltipPropsType from "./types";
import * as Popover from "@radix-ui/react-popover";
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

  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger asChild type={undefined} onMouseEnter={handleOnOpenTooltip} onMouseLeave={handleOnCloseTooltip}>
        <PopoverTrigger>{children}</PopoverTrigger>
      </Popover.Trigger>
      <Popover.Portal>
        <StyledPopoverContent side={position} sideOffset={ARROW_SIZE} data-testid={"popover-content"}>
          <TooltipContainer>{title}</TooltipContainer>
          <TooltipArrow asChild>
            <Triangle size={ARROW_SIZE} aria-hidden />
          </TooltipArrow>
        </StyledPopoverContent>
      </Popover.Portal>
    </Popover.Root>
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

const PopoverTrigger = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledPopoverContent = styled(Popover.Content)`
  z-index: 2147483647;
  &:focus-visible {
    outline: none;
  }
`;

const TooltipArrow = styled(Popover.Arrow)`
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
