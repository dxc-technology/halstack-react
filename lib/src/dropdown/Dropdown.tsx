import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import DropdownPropsType from "./types";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
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

const useWidth = (target) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (target != null) {
      setWidth(target.getBoundingClientRect().width);

      const triggerObserver = new ResizeObserver((entries) => {
        const rect = entries[0].target.getBoundingClientRect();
        setWidth(rect?.width);
      });
      triggerObserver.observe(target);
      return () => {
        triggerObserver.unobserve(target);
      };
    }
  }, [target]);

  return width;
};

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
  const [visualFocusIndex, setVisualFocusIndex] = useState(0);

  const colorsTheme = useTheme();
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const width = useWidth(triggerRef.current);

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
                  <DropdownTriggerIcon disabled={disabled} role={typeof icon === "string" ? undefined : "img"}>
                    {typeof icon === "string" ? <img src={icon} /> : icon}
                  </DropdownTriggerIcon>
                )}
                {label && iconPosition === "before" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
              </DropdownTriggerContent>
              {!caretHidden && <CaretIcon disabled={disabled}>{isOpen ? upArrowIcon : downArrowIcon}</CaretIcon>}
            </DropdownTrigger>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content asChild sideOffset={1}>
              <DropdownMenu
                id={menuId}
                dropdownTriggerId={triggerId}
                options={options}
                iconsPosition={optionsIconPosition}
                visualFocusIndex={visualFocusIndex}
                menuItemOnClick={handleMenuItemOnClick}
                onKeyDown={handleMenuOnKeyDown}
                styles={{ width, zIndex: "2147483647" }}
                ref={menuRef}
              />
            </Popover.Content>
          </Popover.Portal>
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

const DropdownContainer = styled.div<{ margin: DropdownPropsType["margin"]; size: DropdownPropsType["size"] }>`
  width: ${(props) => calculateWidth(props.margin, props.size)};
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

const DropdownTrigger = styled.button<{
  label: DropdownPropsType["label"];
  margin: DropdownPropsType["margin"];
  size: DropdownPropsType["size"];
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.caretIconSpacing};
  width: 100%;
  height: ${(props) => props.theme.buttonHeight};
  min-width: ${(props) => (props.label === "" ? "0px" : calculateWidth(props.margin, props.size))};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  border-width: ${(props) => props.theme.buttonBorderThickness};
  border-style: ${(props) => props.theme.buttonBorderStyle};
  border-color: ${(props) => (props.disabled ? props.theme.disabledButtonBorderColor : props.theme.buttonBorderColor)};
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
        outline: 2px solid ${props.theme.focusColor};
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

const DropdownTriggerIcon = styled.span<{ disabled: DropdownPropsType["disabled"] }>`
  display: flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.buttonIconColor)};

  img,
  svg {
    width: ${(props) => props.theme.buttonIconSize};
    height: ${(props) => props.theme.buttonIconSize};
  }
`;

const CaretIcon = styled.span<{ disabled: DropdownPropsType["disabled"] }>`
  display: flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.caretIconColor)};

  svg {
    width: ${(props) => props.theme.caretIconSize};
    height: ${(props) => props.theme.caretIconSize};
  }
`;

export default DxcDropdown;
