import * as Popover from "@radix-ui/react-popover";
import { FocusEvent, KeyboardEvent, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import useWidth from "../utils/useWidth";
import DropdownMenu from "./DropdownMenu";
import DropdownPropsType from "./types";
import { Tooltip } from "../tooltip/Tooltip";

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
  gap: var(--spacing-gap-s);
  width: 100%;
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  min-width: ${(props) => (props.label === "" ? "0px" : calculateWidth(props.margin, props.size))};
  border: 0;
  border-radius: var(--border-radius-s);
  background-color: var(--color-bg-neutral-lightest);
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-dark);")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.disabled &&
    `
      &:focus {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        outline-offset: -2px;
      }
      &:hover, &:active {
        background-color: var(--color-bg-neutral-light);
      }
  `};
`;

const DropdownTriggerContent = styled.span<{ iconPosition: DropdownPropsType["iconPosition"] }>`
  display: flex;
  ${({ iconPosition }) => (iconPosition === "after" ? "flex-direction: row-reverse;" : "flex-direction: row;")}
  align-items: center;
  gap: var(--spacing-gap-xs);
  width: 100%;
  overflow: hidden;
`;

const DropdownTriggerLabel = styled.span`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const DropdownTriggerIcon = styled.span<{
  disabled: DropdownPropsType["disabled"];
}>`
  display: flex;
  font-size: var(--height-xs);

  svg {
    width: 20px;
    height: var(--height-xs);
  }
`;

const CaretIcon = styled.span<{ disabled: DropdownPropsType["disabled"] }>`
  display: flex;
  font-size: var(--typography-label-l);

  svg {
    width: 16px;
    height: var(--height-xxs);
  }
`;

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
}: DropdownPropsType) => {
  const id = useId();
  const triggerId = `trigger-${id}`;
  const menuId = `menu-${id}`;
  const [isOpen, changeIsOpen] = useState(false);
  const [visualFocusIndex, setVisualFocusIndex] = useState(0);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalContainer(document?.getElementById(`${id}-portal`));
  }, []);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const width = useWidth(triggerRef);

  const handleOnOpenMenu = () => {
    changeIsOpen(true);
  };
  const handleOnCloseMenu = () => {
    changeIsOpen(false);
    setVisualFocusIndex(0);
  };
  const handleMenuItemOnClick = useCallback(
    (value?: string) => {
      if (value) {
        onSelectOption(value);
      }
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
    <>
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
                <DropdownTriggerContent iconPosition={iconPosition}>
                  {icon && (
                    <DropdownTriggerIcon
                      disabled={disabled}
                      role={typeof icon === "string" ? undefined : "img"}
                      aria-hidden
                    >
                      {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
                    </DropdownTriggerIcon>
                  )}
                  {label && <DropdownTriggerLabel>{label}</DropdownTriggerLabel>}
                </DropdownTriggerContent>
                {!caretHidden && (
                  <CaretIcon disabled={disabled}>
                    <DxcIcon icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} />
                  </CaretIcon>
                )}
              </DropdownTrigger>
            </Popover.Trigger>
          </Tooltip>
          {portalContainer && (
            <Popover.Portal container={portalContainer}>
              <Popover.Content aria-label="Dropdown options" asChild sideOffset={1}>
                <DropdownMenu
                  id={menuId}
                  dropdownTriggerId={triggerId}
                  options={options}
                  iconsPosition={optionsIconPosition}
                  visualFocusIndex={visualFocusIndex}
                  menuItemOnClick={handleMenuItemOnClick}
                  onKeyDown={handleMenuOnKeyDown}
                  styles={{ width }}
                  ref={menuRef}
                />
              </Popover.Content>
            </Popover.Portal>
          )}
        </Popover.Root>
      </DropdownContainer>

      <div id={`${id}-portal`} style={{ position: "absolute" }} />
    </>
  );
};

export default DxcDropdown;
