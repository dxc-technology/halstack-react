import React, { useState } from "react";
import styled from "styled-components";
import TooltipPropsType from "./types";
import * as Popover from "@radix-ui/react-popover";
import CoreTokens from "../common/coreTokens";

const DxcTooltip = ({ position = "top", title = "TEST", children }: TooltipPropsType): JSX.Element => {
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
        <StyledPopoverContent side={position}>
          <TooltipContainer>{title}</TooltipContainer>
          <TooltipArrow asChild>
            <svg
              width="10"
              height="5"
              viewBox="0 0 30 10"
              preserveAspectRatio="none"
              style={{ display: "block" }}
            >
              <polygon points="0,0 30,0 16,10 14,10"></polygon>
            </svg>
          </TooltipArrow>
        </StyledPopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};

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
