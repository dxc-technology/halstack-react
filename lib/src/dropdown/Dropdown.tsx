import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
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
  disabled = false,
  expandOnHover = false,
  onSelectOption,
  margin,
  size = "fitContent",
  tabIndex = 0,
}: DropdownPropsType): JSX.Element => {
  const [triggerId] = useState(`trigger-${uuidv4()}`);
  const menuId = `menu-${triggerId}`;
  const [isOpen, changeIsOpen] = useState(false);
  const [menuStyles, setMenuStyles] = useState(null);

  const [visualFocusIndex, setVisualFocusIndex] = useState(0);

  const colorsTheme = useTheme();
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const handleOnOpenMenu = () => {
    changeIsOpen(true);
  };
  const handleOnCloseMenu = () => {
    changeIsOpen(false);
    setVisualFocusIndex(0);
  };
  const handleMenuItemOnClick = useCallback(
    (value) => {
      onSelectOption(value);
      handleOnCloseMenu();
      triggerRef.current?.focus();
    },
    [onSelectOption]
  );
  const handleOnBlur = (event) => {
    !event.currentTarget.contains(event.relatedTarget) && handleOnCloseMenu();
  };

  const handleTriggerOnClick = () => {
    changeIsOpen((isOpen) => !isOpen);
  };
  const handleTriggerOnKeyDown = (event) => {
    switch (event.key) {
      case "Up":
      case "ArrowUp":
        event.preventDefault();
        setVisualFocusIndex(options.length - 1);
        handleOnOpenMenu();
        break;
      case " ":
      case "Down":
      case "ArrowDown":
      case "Enter":
        event.preventDefault();
        handleOnOpenMenu();
        break;
    }
  };

  const setPreviousIndexFocus = () => {
    setVisualFocusIndex((currentFocusIndex) => {
      let index = currentFocusIndex === 0 ? options.length - 1 : currentFocusIndex - 1;
      return index;
    });
  };
  const setNextIndexFocus = () => {
    setVisualFocusIndex((currentFocusIndex) => {
      let index = currentFocusIndex === options.length - 1 ? 0 : currentFocusIndex + 1;
      return index;
    });
  };
  const handleMenuOnKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLUListElement>) => {
      switch (event.key) {
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          setPreviousIndexFocus();
          break;
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          setNextIndexFocus();
          break;
        case " ":
        case "Enter":
          event.preventDefault();
          handleMenuItemOnClick(options[visualFocusIndex].value);
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          handleOnCloseMenu();
          triggerRef.current?.focus();
          break;
        case "Home":
        case "PageUp":
          event.preventDefault();
          setVisualFocusIndex(0);
          break;
        case "End":
        case "PageDown":
          event.preventDefault();
          setVisualFocusIndex(options.length - 1);
          break;
        case "Tab":
          handleOnCloseMenu();
          triggerRef.current?.focus();
          break;
      }
    },
    [onSelectOption, visualFocusIndex, options]
  );

  useLayoutEffect(() => {
    const visualFocusedMenuItem = menuRef?.current?.querySelectorAll("[role='menuitem']")[visualFocusIndex];
    visualFocusedMenuItem?.scrollIntoView?.({ block: "nearest", inline: "start" });
  }, [visualFocusIndex]);

  const handleMenuResize = () => {
    const rect = triggerRef?.current?.getBoundingClientRect();
    setMenuStyles({ width: rect?.width });
  };
  useEffect(() => {
    handleMenuResize();
    window.addEventListener("resize", handleMenuResize);
    return () => {
      window.removeEventListener("resize", handleMenuResize);
    };
  }, []);

  return (
    <ThemeProvider theme={colorsTheme.dropdown}>
      <DropdownContainer
        onMouseEnter={!disabled && expandOnHover ? handleOnOpenMenu : undefined}
        onMouseLeave={!disabled && expandOnHover ? handleOnCloseMenu : undefined}
        onBlur={!disabled ? handleOnBlur : undefined}
        margin={margin}
        size={size}
      >
        <Popover.Root open={isOpen}>
          <Popover.Trigger asChild type={undefined}>
            <DropdownTrigger
              opened={isOpen}
              onClick={handleTriggerOnClick}
              onKeyDown={handleTriggerOnKeyDown}
              onBlur={(event) => {
                event.stopPropagation();
              }}
              disabled={disabled}
              label={label}
              margin={margin}
              size={size}
              id={triggerId}
              aria-haspopup="true"
              aria-controls={menuId}
              aria-expanded={isOpen ? true : undefined}
              tabIndex={tabIndex}
              ref={triggerRef}
            >
              <DropdownTriggerContent>
                {label && iconPosition === "after" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
                {icon && (
                  <DropdownTriggerIcon
                    label={label}
                    iconPosition={iconPosition}
                    disabled={disabled}
                    role={typeof icon === "string" ? undefined : "img"}
                  >
                    {typeof icon === "string" ? <img src={icon} /> : icon}
                  </DropdownTriggerIcon>
                )}
                {label && iconPosition === "before" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
              </DropdownTriggerContent>
              {!caretHidden && <CaretIcon disabled={disabled}>{isOpen ? upArrowIcon : downArrowIcon}</CaretIcon>}
            </DropdownTrigger>
          </Popover.Trigger>
          <Popover.Content sideOffset={1} asChild>
            <DropdownMenu
              id={menuId}
              dropdownTriggerId={triggerId}
              options={options}
              iconsPosition={optionsIconPosition}
              visualFocusIndex={visualFocusIndex}
              menuItemOnClick={handleMenuItemOnClick}
              onKeyDown={handleMenuOnKeyDown}
              styles={menuStyles}
              ref={menuRef}
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
  fitContent: "fit-content",
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
  display: flex;
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
  gap: ${(props) => props.theme.buttonIconSpacing};
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const DropdownTriggerLabel = styled.span`
  font-family: ${(props) => props.theme.buttonFontFamily};
  font-size: ${(props) => props.theme.buttonFontSize};
  font-style: ${(props) => props.theme.buttonFontStyle};
  font-weight: ${(props) => props.theme.buttonFontWeight};
  text-overflow: ellipsis;
  overflow: hidden;
`;

type DropdownTriggerIconProps = {
  iconPosition: "before" | "after";
  disabled: boolean;
  label: string;
};
const DropdownTriggerIcon = styled.div<DropdownTriggerIconProps>`
  width: ${(props) => props.theme.buttonIconSize};
  height: ${(props) => props.theme.buttonIconSize};
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.buttonIconColor)};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const CaretIcon = styled.span<{ disabled: boolean }>`
  display: flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.caretIconColor)};

  svg {
    width: ${(props) => props.theme.caretIconSize};
    height: ${(props) => props.theme.caretIconSize};
  }
`;

export default DxcDropdown;
