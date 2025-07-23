import * as Popover from "@radix-ui/react-popover";
import { FocusEvent, KeyboardEvent, useCallback, useId, useLayoutEffect, useRef, useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import HalstackContext from "../HalstackContext";
import useWidth from "../utils/useWidth";
import DropdownMenu from "./DropdownMenu";
import DropdownPropsType from "./types";
import { Tooltip } from "../tooltip/Tooltip";

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
  title,
}: DropdownPropsType): JSX.Element => {
  const id = useId();
  const triggerId = `trigger-${id}`;
  const menuId = `menu-${id}`;
  const [isOpen, changeIsOpen] = useState(false);
  const [visualFocusIndex, setVisualFocusIndex] = useState(0);

  const colorsTheme = useContext(HalstackContext);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const width = useWidth(triggerRef.current);

  const handleOnOpenMenu = () => {
    changeIsOpen(true);
  };
  const handleOnCloseMenu = () => {
    changeIsOpen(false);
    setVisualFocusIndex(0);
  };
  const handleMenuItemOnClick = useCallback(
    (value?: string) => {
      if (value) onSelectOption(value);
      handleOnCloseMenu();
      triggerRef.current?.focus();
    },
    [onSelectOption]
  );
  const handleOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleOnCloseMenu();
    }
  };

  const handleTriggerOnClick = () => {
    changeIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
  };
  const handleTriggerOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
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
      default:
        break;
    }
  };

  const setPreviousIndexFocus = () => {
    setVisualFocusIndex((currentFocusIndex) => {
      const index = currentFocusIndex === 0 ? options.length - 1 : currentFocusIndex - 1;
      return index;
    });
  };
  const setNextIndexFocus = () => {
    setVisualFocusIndex((currentFocusIndex) => {
      const index = currentFocusIndex === options.length - 1 ? 0 : currentFocusIndex + 1;
      return index;
    });
  };
  const handleMenuOnKeyDown = useCallback(
    (event: KeyboardEvent<HTMLUListElement>) => {
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
          handleMenuItemOnClick(options[visualFocusIndex]?.value);
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          if (isOpen) {
            event.stopPropagation();
          }
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
        default:
          break;
      }
    },
    [onSelectOption, visualFocusIndex, options]
  );

  useLayoutEffect(() => {
    const visualFocusedMenuItem = menuRef.current?.querySelectorAll("[role='menuitem']")[visualFocusIndex];
    visualFocusedMenuItem?.scrollIntoView?.({
      block: "nearest",
      inline: "start",
    });
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
          <Tooltip label={title}>
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
                aria-controls={isOpen ? menuId : undefined}
                aria-expanded={isOpen ? true : undefined}
                aria-label="Show options"
                tabIndex={tabIndex}
                ref={triggerRef}
              >
                <DropdownTriggerContent>
                  {label && iconPosition === "after" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
                  {icon && (
                    <DropdownTriggerIcon
                      disabled={disabled}
                      role={typeof icon === "string" ? undefined : "img"}
                      aria-hidden
                    >
                      {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
                    </DropdownTriggerIcon>
                  )}
                  {label && iconPosition === "before" && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
                </DropdownTriggerContent>
                {!caretHidden && (
                  <CaretIcon disabled={disabled}>
                    <DxcIcon icon={isOpen ? "arrow_drop_up" : "arrow_drop_down"} />{" "}
                  </CaretIcon>
                )}
              </DropdownTrigger>
            </Popover.Trigger>
          </Tooltip>
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
                styles={{ width, zIndex: "310" }}
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

const calculateWidth = (margin: DropdownPropsType["margin"], size: DropdownPropsType["size"]) =>
  size != null &&
  (size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size]);

const DropdownContainer = styled.div<{
  margin: DropdownPropsType["margin"];
  size: DropdownPropsType["size"];
}>`
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

const DropdownTriggerIcon = styled.span<{
  disabled: DropdownPropsType["disabled"];
}>`
  display: flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.buttonIconColor)};
  font-size: ${(props) => props.theme.buttonIconSize};

  svg {
    width: ${(props) => props.theme.buttonIconSize};
    height: ${(props) => props.theme.buttonIconSize};
  }
`;

const CaretIcon = styled.span<{ disabled: DropdownPropsType["disabled"] }>`
  display: flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.caretIconColor)};
  font-size: ${(props) => props.theme.caretIconSize};

  svg {
    width: ${(props) => props.theme.caretIconSize};
    height: ${(props) => props.theme.caretIconSize};
  }
`;

export default DxcDropdown;
