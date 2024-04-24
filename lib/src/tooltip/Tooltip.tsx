import React, { useState } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import TooltipPropsType from "./types";
import * as Popover from "@radix-ui/react-popover";
import CoreTokens from "../common/coreTokens";

const DxcTooltip = ({ position = "top", children }: TooltipPropsType): JSX.Element => {
  const [isOpen, changeIsOpen] = useState(false);

  const handleOnOpenTooltip = () => {
    changeIsOpen(true);
  };
  const handleOnCloseTooltip = () => {
    changeIsOpen(false);
  };

  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger asChild type={undefined}>
        <TooltipTrigger onMouseEnter={handleOnOpenTooltip} onMouseLeave={handleOnCloseTooltip}>
          {children}
        </TooltipTrigger>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side={position} asChild>
          <Tooltip position={position}>EXAMPLE</Tooltip>
          {/* <DropdownMenu
                id={menuId}
                dropdownTriggerId={triggerId}
                options={options}
                iconsPosition={optionsIconPosition}
                visualFocusIndex={visualFocusIndex}
                menuItemOnClick={handleMenuItemOnClick}
                onKeyDown={handleMenuOnKeyDown}
                styles={{ width, zIndex: "2147483647" }}
                ref={menuRef}
              /> */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const TooltipTrigger = styled.div`
  display: inline-flex;
  position: relative;
`;

const Tooltip = styled.div<{ position: TooltipPropsType["position"] }>`
  height: 32px;
  box-sizing: border-box;
  position: absolute;
  padding: 8px 12px;
  transform: translate(-50%, -50%);
  font-size: ${CoreTokens.type_scale_01};
  font-family: ${CoreTokens.type_sans};
  z-index: 2147483647;
  white-space: nowrap;
  color: ${CoreTokens.color_white};
  background-color: ${CoreTokens.color_grey_800};
  border-color: ${CoreTokens.color_grey_800};
  ${(props) => {
    if (props.position === "top") {
      return `top: calc(-32px - 5px);
        transform: translateX(-50%);
        margin-bottom: 5px;
        `;
    }
    if (props.position === "bottom") {
      return `top: 5px;
        transform: translateX(-50%);
        `;
    }
    if (props.position === "left") {
      return `top: 50%;
        right: calc(100% + 5px);
        transform: translateY(-50%);
        `;
    }
    if (props.position === "right") {
      return `top: 50%;
        left: calc(100% + 5px);
        transform: translateY(-50%);
        `;
    }
  }}
  &:after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;

    ${(props) => {
      if (props.position === "top") {
        return `top: 100%;
          left: 50%; 
          border-color: ${CoreTokens.color_grey_800} transparent transparent transparent;
          margin-left: -5px;
          border-radius: 0 0 ${CoreTokens.border_width_1} ${CoreTokens.border_width_1};
          `;
      }
      if (props.position === "bottom") {
        return `bottom: 100%;
          left: 50%;
          border-color: transparent transparent ${CoreTokens.color_grey_800} transparent;
          margin-left: -5px;
          border-radius: ${CoreTokens.border_width_1} ${CoreTokens.border_width_1} 0 0;
          `;
      }
      if (props.position === "left") {
        return `top: 50%;
          left: 100%;
          border-color: transparent transparent transparent ${CoreTokens.color_grey_800};
          margin-top: -5px;
          border-radius: 0 ${CoreTokens.border_width_1} ${CoreTokens.border_width_1} 0;
          `;
      }
      if (props.position === "right") {
        return `top: 50%;
          right: 100%;
          border-color: transparent ${CoreTokens.color_grey_800} transparent transparent;
          margin-top: -5px;
          border-radius: ${CoreTokens.border_width_1} 0 0 ${CoreTokens.border_width_1};
          `;
      }
    }}
  }
`;

export default DxcTooltip;
