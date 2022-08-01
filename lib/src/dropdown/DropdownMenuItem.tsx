import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { DropdownMenuItemProps } from "./types";

const DropdownMenuItem = ({ iconPosition, onClick, option }: DropdownMenuItemProps) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.dropdown}>
      <DropdownMenuItemContainer
        role="menuitem"
        onClick={() => {
          onClick(option);
        }}
        tabIndex={0}
      >
        {iconPosition === "after" && <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>}
        {option.icon && (
          <DropdownMenuItemIcon
            iconPosition={iconPosition}
            label={option.label}
            role={!(typeof option.icon === "string") ? "img" : undefined}
          >
            {typeof option.icon === "string" ? <img src={option.icon} /> : option.icon}
          </DropdownMenuItemIcon>
        )}
        {iconPosition === "before" && <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>}
      </DropdownMenuItemContainer>
    </ThemeProvider>
  );
};

const DropdownMenuItemContainer = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 36px;
  padding-top: ${(props) => props.theme.optionPaddingTop};
  padding-bottom: ${(props) => props.theme.optionPaddingBottom};
  padding-left: ${(props) => props.theme.optionPaddingLeft};
  padding-right: ${(props) => props.theme.optionPaddingRight};
  background-color: ${(props) => props.theme.optionBackgroundColor};
  cursor: pointer;

  :focus {
    outline: ${(props) => props.theme.focusColor} solid 2px;
    outline-offset: -2px;
  }
  :hover {
    background-color: ${(props) => props.theme.hoverOptionBackgroundColor};
  }
  :active {
    background-color: ${(props) => props.theme.activeOptionBackgroundColor};
    outline: ${(props) => props.theme.focusColor} solid 2px;
    outline-offset: -2px;
  }
`;

const DropdownMenuItemLabel = styled.span`
  font-family: ${(props) => props.theme.optionFontFamily};
  font-size: ${(props) => props.theme.optionFontSize};
  font-style: ${(props) => props.theme.optionFontStyle};
  font-weight: ${(props) => props.theme.optionFontWeight};
  line-height: 1.5rem;
  color: ${(props) => props.theme.optionFontColor};
`;

type DropdownMenuItemIconProps = {
  iconPosition: "before" | "after";
  label: string;
};
const DropdownMenuItemIcon = styled.div<DropdownMenuItemIconProps>`
  overflow: hidden;
  width: ${(props) => props.theme.optionIconSize};
  height: ${(props) => props.theme.optionIconSize};
  margin-left: ${(props) => (props.iconPosition === "after" && props.label && props.theme.optionIconSpacing) || "0px"};
  margin-right: ${(props) =>
    (props.iconPosition === "before" && props.label && props.theme.optionIconSpacing) || "0px"};
  color: ${(props) => props.theme.optionIconColor};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default React.memo(DropdownMenuItem);
