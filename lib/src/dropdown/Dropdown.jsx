import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Popper from '@material-ui/core/Popper';
import MenuItem from "@material-ui/core/MenuItem";
import { ClickAwayListener } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import caretUp from "./baseline-arrow_drop_up.svg";
import caretDown from "./baseline-arrow_drop_down.svg";
import caretUpWh from "./baseline-arrow_drop_up_wh.svg";
import caretDownWh from "./baseline-arrow_drop_down_wh.svg";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";


const DxcDropdown = ({
  options = [],
  optionsIconPosition = "before",
  iconSrc = "",
  iconPosition = "before",
  label = "",
  theme = "light",
  mode = "basic",
  caretHidden = false,
  disableRipple = false,
  onSelectOption,
  margin,
  size = "fitContent",
  expandOnHover = true
}) => {
  const [width, setWidth] = useState();

  const ref = useRef(null);
  const handleResize = () => {
    setWidth(ref.current.offsetWidth);
  };

  useEffect(() => {
    if (ref.current) ref.current.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      ref.current.removeEventListener("resize", handleResize);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(option) {
    if (typeof onSelectOption === "function") {
      onSelectOption(option.value);
    }
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleCloseOver = expandOnHover ? handleClose : undefined;

  return (
    <DxCDropdownContainer mode={mode} margin={margin} size={size} ref={ref}>
      <div 
        onMouseOver={expandOnHover ? handleClickListItem : undefined}
        onMouseOut={handleCloseOver}
        onFocus={handleCloseOver}
        onBlur={handleCloseOver} 
      >
        <DropdownTrigger
          opened={anchorEl === null ? false : true}
          onClick={handleClickListItem}
          mode={mode}
          theme={theme}
          label={label}
          caretHidden={caretHidden}
          margin={margin}
          size={size}
        >
          <DropdownTriggerContainer iconPosition={iconPosition}>
            {iconSrc && <ListIcon label={label} src={iconSrc} iconPosition={iconPosition} />}
            <DropdownTriggerLabel iconPosition={iconPosition} label={label}>
              {label}
            </DropdownTriggerLabel>
          </DropdownTriggerContainer>
          <CaretIcon
            caretHidden={caretHidden}
            margin={margin}
            src={
              theme === "light" && mode === "outlined"
                ? anchorEl === null
                  ? caretDown
                  : caretUp
                : theme === "light" && mode === "basic"
                ? anchorEl === null
                  ? caretDownWh
                  : caretUpWh
                : theme === "dark" && mode === "basic"
                ? anchorEl === null
                  ? caretDown
                  : caretUp
                : theme === "dark" && mode === "outlined"
                ? anchorEl === null
                  ? caretDownWh
                  : caretUpWh
                : ""
            }
          />
        </DropdownTrigger>
        <DxcMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          optionsIconPosition={optionsIconPosition}
          mode={mode}
          theme={theme}
          size={size}
          width={width}

          role={undefined} 
          transition 
          disablePortal
          placement="bottom-start"
        >
          {({TransitionProps}) => (
            <Grow
              {...TransitionProps}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={Boolean(anchorEl)} id="menu-list-grow" onKeyDown={handleClose}>


                    {options.map(option => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        disableRipple={disableRipple}
                        onClick={event => handleMenuItemClick(option)}
                      >
                        {option.iconSrc && (
                        <ListIcon label={option.label} src={option.iconSrc} iconPosition={optionsIconPosition} />
                      )}
                        <span className="optionLabel">{option.label}</span>
                      </MenuItem>
                  ))}


                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </DxcMenu>
      </div>
    </DxCDropdownContainer>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset"
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};
const DxCDropdownContainer = styled.div`
  width: ${props =>
    props.mode === "outlined"
      ? `calc(${calculateWidth(props.margin, props.size)})`
      : calculateWidth(props.margin, props.size)};
  text-overflow: ellipsis;
  overflow: hidden;
  margin: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: inline-block;
`;

const DxcMenu = styled(Popper)`
  z-index: 1;

  .MuiMenuItem-gutters {
    width: ${props =>
      props.mode === "outlined"
        ? `calc(${calculateWidth(props.margin, props.size)} - 4px)`
        : calculateWidth(props.margin, props.size)};
  }
  .MuiMenuItem-root {
    min-height: 46px;
    height: auto;
  }

  .MuiPaper-root {
    min-width: ${props => `${props.width}px`};
    border: ${props => (props.mode === "outlined" ? "2px solid" : "transparent")};

    border-color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? colors.black
        : props.theme === "light" && props.mode === "basic"
        ? colors.white
        : props.theme === "dark" && props.mode === "outlined"
        ? colors.white
        : props.theme === "dark" && props.mode === "basic"
        ? colors.black
        : colors.black};

    background-color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? colors.white
        : props.theme === "light" && props.mode === "basic"
        ? colors.black
        : props.theme === "dark" && props.mode === "outlined"
        ? colors.black
        : props.theme === "dark" && props.mode === "basic"
        ? colors.white
        : colors.white};

    color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? colors.black
        : props.theme === "light" && props.mode === "basic"
        ? colors.white
        : props.theme === "dark" && props.mode === "outlined"
        ? colors.white
        : props.theme === "dark" && props.mode === "basic"
        ? colors.black
        : colors.black};

    margin-top: ${props => (props.mode === "outlined" ? "-2px" : "2px")};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    .MuiList-padding {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .MuiListItem-button {
      display: flex;
      flex-direction: ${props => (props.optionsIconPosition === "after" && "row-reverse") || "row"};
      justify-content: ${props => (props.optionsIconPosition === "after" && "flex-end") || ""};
      font-size: 16px;
      font-family: "Open Sans", sans-serif;
      cursor: pointer;
    }
    .MuiListItem-button:hover {
      background-color: ${colors.darkWhite};
      color: ${colors.black};
    }
  }
`;

const DropdownTrigger = styled.button`
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  width: 100%;
  height: auto;
  min-height: 46px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${props => (props.label === "" ? "0px" : calculateWidth(props.margin, props.size))};

  padding: ${props => {
    if (props.caretHidden === true && props.label === "") {
      if (props.mode === "outlined") {
        return "8px 13px";
      } else {
        return "10px 15px";
      }
    } else {
      if (props.mode === "outlined") {
        return "8px 13px 8px 18px";
      } else {
        return "10px 15px 10px 20px";
      }
    }
  }};
  &:focus {
    outline: none;
  }

  background-color: ${props =>
    props.theme === "light" && props.mode === "outlined" && !props.opened
      ? colors.white
      : props.theme === "light" && props.mode === "basic" && !props.opened
      ? colors.black
      : props.theme === "dark" && props.mode === "outlined" && !props.opened
      ? colors.black
      : props.theme === "dark" && props.mode === "basic" && !props.opened
      ? colors.white
      : props.theme === "light" && props.mode === "basic" && props.opened
      ? colors.lightBlack
      : props.theme === "dark" && props.mode === "outlined" && props.opened
      ? colors.lightBlack
      : colors.darkWhite};

  color: ${props =>
    props.theme === "light" && props.mode === "outlined"
      ? colors.black
      : props.theme === "light" && props.mode === "basic"
      ? colors.white
      : props.theme === "dark" && props.mode === "outlined"
      ? colors.white
      : props.theme === "dark" && props.mode === "basic"
      ? colors.black
      : colors.black};

  border-color: ${props =>
    props.theme === "light" && props.mode === "outlined"
      ? colors.black
      : props.theme === "light" && props.mode === "basic"
      ? colors.white
      : props.theme === "dark" && props.mode === "outlined"
      ? colors.white
      : props.theme === "dark" && props.mode === "basic"
      ? colors.black
      : colors.black};

  border: ${props => (props.mode === "outlined" ? "2px solid" : "none")};
  border-radius: 2px;
  border-bottom-right-radius: ${props => (props.opened === true ? "0px" : "2px")};
  border-bottom-left-radius: ${props => (props.opened === true ? "0px" : "2px")};
`;

const DropdownTriggerLabel = styled.span`
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DropdownTriggerContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.iconPosition === "after" && "row-reverse") || "row"};
  margin-left: 0px;
  margin-right: 0px;
  width: calc(100% - 24px);
  white-space: nowrap;
`;

const ListIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
  margin-right: ${props => {
    if (props.iconPosition === "before" && props.label !== "") {
      return "10px";
    } else {
      return "0px";
    }
  }};
  margin-left: ${props => {
    if (props.iconPosition === "after" && props.label !== "") {
      return "10px";
    } else {
      return "0px";
    }
  }};
`;

const CaretIcon = styled.img`
  display: ${props => (props.caretHidden === true ? "none" : "block")};
  margin-left: 10px;
  margin-right: 10px;
`;

DxcDropdown.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ]),
  optionsIconPosition: PropTypes.oneOf(["after", "before", ""]),
  iconSrc: PropTypes.string,
  iconPosition: PropTypes.oneOf(["after", "before", ""]),
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  mode: PropTypes.oneOf(["basic", "outlined", ""]),
  caretHidden: PropTypes.bool,
  disableRipple: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  onSelectOption: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      iconSrc: PropTypes.string
    })
  )
};

export default DxcDropdown;
