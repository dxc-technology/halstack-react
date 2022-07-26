// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import { ClickAwayListener } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import DropdownPropsType from "./types";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";

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
  const [width, setWidth] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const colorsTheme = useTheme();
  const ref = useRef(null);

  const handleResize = () => {
    setWidth(ref?.current?.offsetWidth);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (option) => {
    setAnchorEl(null);
    onSelectOption(option.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <ThemeProvider theme={colorsTheme.dropdown}>
      <DropdownContainer margin={margin} size={size} disabled={disabled}>
        <DropdownTrigger
          opened={anchorEl === null ? false : true}
          onClick={handleClickListItem}
          onMouseOver={expandOnHover && !disabled ? handleClickListItem : undefined}
          onMouseOut={expandOnHover && !disabled ? handleClose : undefined}
          onFocus={expandOnHover && !disabled ? handleClose : undefined}
          onBlur={expandOnHover && !disabled ? handleClose : undefined}
          disabled={disabled}
          label={label}
          margin={margin}
          size={size}
          ref={ref}
          tabIndex={tabIndex}
        >
          <DropdownTriggerContent caretHidden={caretHidden}>
            {label && iconPosition === "after" && (
              <DropdownTriggerLabel iconPosition={iconPosition} label={label}>
                {label}
              </DropdownTriggerLabel>
            )}
            {icon && (
              <DropdownTriggerIcon label={label} iconPosition={iconPosition} disabled={disabled}>
                {typeof icon === "string" ? <DropdownTriggerImg src={icon} /> : icon}
              </DropdownTriggerIcon>
            )}
            {label && iconPosition === "before" && (
              <DropdownTriggerLabel iconPosition={iconPosition} label={label}>
                {label}
              </DropdownTriggerLabel>
            )}
          </DropdownTriggerContent>
          {!caretHidden && (
            <CaretIcon disabled={disabled}>
              {!caretHidden && (anchorEl === null ? downArrowIcon : upArrowIcon)}
            </CaretIcon>
          )}
        </DropdownTrigger>
        <DropdownMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          size={size}
          width={width}
          role={undefined}
          transition
          disablePortal
          placement="bottom-start"
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={Boolean(anchorEl)} id="menu-list-grow">
                    {options.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        disableRipple={true}
                        onClick={(event) => handleMenuItemClick(option)}
                      >
                        {optionsIconPosition === "after" && <span className="optionLabel">{option.label}</span>}
                        {option.icon && (
                          <ListIconContainer label={option.label} iconPosition={optionsIconPosition}>
                            {typeof option.icon === "string" ? <ListIcon src={option.icon} /> : option.icon}
                          </ListIconContainer>
                        )}
                        {optionsIconPosition === "before" && <span className="optionLabel">{option.label}</span>}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </DropdownMenu>
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

const DropdownContainer = styled.div`
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
  display: inline-block;
`;

const DropdownMenu = styled(Popper)`
  z-index: 1;

  .MuiMenuItem-gutters {
    width: ${(props) => calculateWidth(props.margin, props.size)};
  }
  .MuiMenuItem-root {
    min-height: 36px;
    padding-top: ${(props) => props.theme.optionPaddingTop};
    padding-bottom: ${(props) => props.theme.optionPaddingBottom};
    padding-left: ${(props) => props.theme.optionPaddingLeft};
    padding-right: ${(props) => props.theme.optionPaddingRight};
    height: auto;
  }
  .MuiPaper-root {
    min-width: ${(props) => `${props.width}px`};
    border-width: ${(props) => props.theme.borderThickness};
    border-style: ${(props) => props.theme.borderStyle};
    border-color: ${(props) => props.theme.borderColor};
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    max-height: 230px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.scrollBarTrackColor};
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollBarThumbColor};
      border-radius: 3px;
    }

    .MuiList-padding {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .MuiListItem-button {
      display: flex;
      background-color: ${(props) => props.theme.optionBackgroundColor};
      font-family: ${(props) => props.theme.optionFontFamily};
      font-size: ${(props) => props.theme.optionFontSize};
      font-style: ${(props) => props.theme.optionFontStyle};
      font-weight: ${(props) => props.theme.optionFontWeight};
      color: ${(props) => props.theme.optionFontColor};
      cursor: pointer;
    }
    .MuiListItem-button:focus {
      outline: ${(props) => props.theme.focusColor} solid 2px;
      outline-offset: -2px;
    }
    .MuiListItem-button:hover {
      background-color: ${(props) => props.theme.hoverOptionBackgroundColor};
    }
    .MuiListItem-button:active {
      background-color: ${(props) => props.theme.activeOptionBackgroundColor};
      outline: ${(props) => props.theme.focusColor} solid 2px;
      outline-offset: -2px;
    }
  }
`;

const DropdownTrigger = styled.button`
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
  border-bottom-right-radius: ${(props) => (props.opened ? "0px" : props.theme.borderRadius)};
  border-bottom-left-radius: ${(props) => (props.opened ? "0px" : props.theme.borderRadius)};
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

const DropdownTriggerIcon = styled.div`
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

const CaretIcon = styled.span`
  display: inline-flex;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.caretIconColor)};

  svg {
    width: ${(props) => props.theme.caretIconSize};
    height: ${(props) => props.theme.caretIconSize};
  }
`;

const ListIcon = styled.img``;

const ListIconContainer = styled.div`
  overflow: hidden;
  width: ${(props) => props.theme.optionIconSize};
  height: ${(props) => props.theme.optionIconSize};
  margin-left: ${(props) =>
    (props.iconPosition === "after" && props.label !== "" && props.theme.optionIconSpacing) || "0px"};
  margin-right: ${(props) =>
    (props.iconPosition === "before" && props.label !== "" && props.theme.optionIconSpacing) || "0px"};
  color: ${(props) => props.theme.optionIconColor};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default DxcDropdown;
