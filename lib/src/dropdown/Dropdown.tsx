import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import DropdownPropsType, { Margin, Space, Size } from "./types";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import { v4 as uuidv4 } from "uuid";
import * as Popover from "@radix-ui/react-popover";
import DropdownMenu from "./DropdownMenu";

const upArrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 14l5-5 5 5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const downArrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const DxcDropdown = ({
  options,
  optionsIconPosition = "before",
  icon,
  iconPosition = "before",
  label = "",
  caretHidden = false,
  onSelectOption,
  expandOnHover = false,
  margin,
  size = "fitContent",
  tabIndex = 0,
  disabled = false,
}: DropdownPropsType): JSX.Element => {
  const [menuId] = useState(`dropdown-${uuidv4()}`);
  const [isOpen, changeIsOpen] = useState(false);
  const [menuStyles, setMenuStyles] = useState(null);

  const colorsTheme = useTheme();
  const ref = useRef(null);

  const handleMenuResize = () => {
    const rect = ref?.current?.getBoundingClientRect();
    setMenuStyles({ width: rect?.width });
  };
  const handleTriggerOnClick = () => {
    changeIsOpen((isOpen) => !isOpen);
  };
  const handleOnOpen = () => {
    changeIsOpen(true);
  };
  const handleOnClose = () => {
    changeIsOpen(false);
  };
  const handleOptionOnClick = (option) => {
    onSelectOption(option.value);
    changeIsOpen(false);
  };

  useEffect(() => {
    handleMenuResize();
    window.addEventListener("resize", handleMenuResize);
    return () => {
      window.removeEventListener("resize", handleMenuResize);
    };
  }, [setMenuStyles]);

  return (
    <ThemeProvider theme={colorsTheme.dropdown}>
      <DropdownContainer
        margin={margin}
        size={size}
        onMouseOver={!disabled && expandOnHover ? handleOnOpen : undefined}
        onMouseLeave={!disabled && expandOnHover ? handleOnClose : undefined}
      >
        <Popover.Root open={isOpen}>
          <Popover.Trigger asChild>
            <DropdownTrigger
              opened={isOpen}
              onClick={handleTriggerOnClick}
              onBlur={!disabled && handleOnClose}
              disabled={disabled}
              label={label}
              margin={margin}
              size={size}
              ref={ref}
              tabIndex={tabIndex}
              aria-disabled={disabled}
              aria-haspopup="true"
              aria-controls={menuId}
              aria-expanded={isOpen}
            >
              <DropdownTriggerContent>
                {label && iconPosition === "after" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
                {icon && (
                  <DropdownTriggerIcon label={label} iconPosition={iconPosition} disabled={disabled}>
                    {typeof icon === "string" ? <DropdownTriggerImg src={icon} /> : icon}
                  </DropdownTriggerIcon>
                )}
                {label && iconPosition === "before" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
              </DropdownTriggerContent>
              {!caretHidden && <CaretIcon disabled={disabled}>{isOpen ? upArrowIcon : downArrowIcon}</CaretIcon>}
            </DropdownTrigger>
          </Popover.Trigger>
          <Popover.Content
            sideOffset={1}
            onOpenAutoFocus={(event) => {
              // Avoid dropdown to lose focus when the list is opened
              event.preventDefault();
            }}
            onCloseAutoFocus={(event) => {
              // Avoid dropdown to lose focus when the list is closed
              event.preventDefault();
            }}
          >
            <DropdownMenu
              id={menuId}
              options={options}
              iconsPosition={optionsIconPosition}
              handleOptionOnClick={handleOptionOnClick}
              styles={menuStyles}
            />
          </Popover.Content>
        </Popover.Root>
      </DropdownContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

type DropdownContainerProps = {
  margin: Space | Margin;
  size: Size;
};
const DropdownContainer = styled.div<DropdownContainerProps>`
  display: inline-block;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  text-overflow: ellipsis;
  overflow: hidden;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

type DropdownTriggerProps = {
  label: string;
  margin: Space | Margin;
  opened: boolean;
  size: Size;
};
const DropdownTrigger = styled.button<DropdownTriggerProps>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.caretIconSpacing};
  width: 100%;
  min-height: 40px;
  min-width: ${(props) => (props.label === "" ? "0px" : calculateWidth(props.margin, props.size))};
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => (props.disabled ? props.theme.disabledBorderColor : props.theme.borderColor)};
  padding-top: ${(props) => props.theme.buttonPaddingTop};
  padding-bottom: ${(props) => props.theme.buttonPaddingBottom};
  padding-left: ${(props) => props.theme.buttonPaddingLeft};
  padding-right: ${(props) => props.theme.buttonPaddingRight};
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledButtonBackgroundColor : props.theme.buttonBackgroundColor};
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.buttonFontColor)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `  
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline: ${props.theme.focusColor} solid 2px;
        outline-offset: -2px;
      }
      &:hover {
        background-color: ${props.theme.hoverButtonBackgroundColor};
      }
      &:active {
        background-color: ${props.theme.activeButtonBackgroundColor};
      }
  `};
`;

const DropdownTriggerContent = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
  white-space: nowrap;
`;

const DropdownTriggerLabel = styled.span`
  font-family: ${(props) => props.theme.buttonFontFamily};
  font-size: ${(props) => props.theme.buttonFontSize};
  font-style: ${(props) => props.theme.buttonFontStyle};
  font-weight: ${(props) => props.theme.buttonFontWeight};
  text-overflow: ellipsis;
`;

const DropdownTriggerImg = styled.img``;

type DropdownTriggerIconProps = {
  iconPosition: "before" | "after";
  disabled: boolean;
  label: string;
};
const DropdownTriggerIcon = styled.div<DropdownTriggerIconProps>`
  width: ${(props) => props.theme.buttonIconSize};
  height: ${(props) => props.theme.buttonIconSize};
  margin-left: ${(props) =>
    (props.iconPosition === "after" && props.label !== "" && props.theme.buttonIconSpacing) || "0px"};
  margin-right: ${(props) =>
    (props.iconPosition === "before" && props.label !== "" && props.theme.buttonIconSpacing) || "0px"};
  overflow: hidden;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.buttonIconColor)};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

type CaretIconProps = {
  disabled: boolean;
};
const CaretIcon = styled.span<CaretIconProps>`
  display: inline-flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.caretIconColor)};

  svg {
    width: ${(props) => props.theme.caretIconSize};
    height: ${(props) => props.theme.caretIconSize};
  }
`;

export default DxcDropdown;
