import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import caretUp from "./baseline-arrow_drop_up.svg";
import caretDown from "./baseline-arrow_drop_down.svg";
import caretUpWh from "./baseline-arrow_drop_up_wh.svg";
import caretDownWh from "./baseline-arrow_drop_down_wh.svg";
import "../common/OpenSans.css"

const DxcDropdown = ({
  options,
  optionsIconPosition = "before",
  iconSrc = "",
  iconPosition = "before",
  label = "",
  theme = "light",
  mode = "basic",
  caretHidden = false,
  disableRipple = false,
  onSelectOption
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(option) {
    onSelectOption(option.value);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <span>
      <DropdownTrigger
        opened={anchorEl === null ? false : true}
        onClick={handleClickListItem}
        mode={mode}
        theme={theme}
        label={label}
        caretHidden={caretHidden}
      >
        <DropdownTriggerContainer iconPosition={iconPosition}>
          {iconSrc && <ListIcon src={iconSrc} iconPosition={iconPosition} />}
          <DropdownTriggerLabel iconPosition={iconPosition} label={label}>
            {label}
          </DropdownTriggerLabel>
        </DropdownTriggerContainer>
        <CaretIcon
          caretHidden={caretHidden}
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
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
            disableRipple={disableRipple}
            onClick={event => handleMenuItemClick(option)}
          >
            {option.iconSrc && <ListIcon label={label} src={option.iconSrc} iconPosition={optionsIconPosition} />}
            <span className="optionLabel">{option.label}</span>
          </MenuItem>
        ))}
      </DxcMenu>
    </span>
  );
};

const DxcMenu = styled(Menu)`
  .MuiPaper-root {
    min-width: ${props => (props.mode === "outlined" ? "226px" : "230px")};

    border: ${props => (props.mode === "outlined" ? "2px solid" : "transparent")};

    border-color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? "#000000"
        : props.theme === "light" && props.mode === "basic"
        ? "#FFFFFF"
        : props.theme === "dark" && props.mode === "outlined"
        ? "#FFFFFF"
        : props.theme === "dark" && props.mode === "basic"
        ? "#000000"
        : "#000000"};

    background-color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? "#FFFFFF"
        : props.theme === "light" && props.mode === "basic"
        ? "#000000"
        : props.theme === "dark" && props.mode === "outlined"
        ? "#000000"
        : props.theme === "dark" && props.mode === "basic"
        ? "#FFFFFF"
        : "#FFFFFF"};

    color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? "#000000"
        : props.theme === "light" && props.mode === "basic"
        ? "#FFFFFF"
        : props.theme === "dark" && props.mode === "outlined"
        ? "#FFFFFF"
        : props.theme === "dark" && props.mode === "basic"
        ? "#000000"
        : "#000000"};

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
      .optionLabel {
        margin-right: ${props => {
          if (props.optionsIconPosition === "after") {
            return "10px";
          } else {
            return "0px";
          }
        }};
        margin-left: ${props => {
          if (props.optionsIconPosition === "before") {
            return "10px";
          } else {
            return "0px";
          }
        }};
      }
    }
    .MuiListItem-button:hover {
      background-color: #eeeeee;
      color: #000;
    }
  }
`;

const DropdownTrigger = styled.button`
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  height: 46px;
  min-height: 46px;
  min-height: 46px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${props => (props.label === "" ? "0px" : "230px")};
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
  margin: 15px;
  &:focus {
    outline: none;
  }

  background-color: ${props =>
    props.theme === "light" && props.mode === "outlined" && !props.opened
      ? "#FFFFFF"
      : props.theme === "light" && props.mode === "basic" && !props.opened
      ? "#000000"
      : props.theme === "dark" && props.mode === "outlined" && !props.opened
      ? "#000000"
      : props.theme === "dark" && props.mode === "basic" && !props.opened
      ? "#FFFFFF"
      :props.theme === "light" && props.mode === "basic"  && props.opened
      ? "#212121"
      : props.theme === "dark" && props.mode === "outlined" && props.opened
      ? "#212121"
      : "#EEEEEE"};

  color: ${props =>
    props.theme === "light" && props.mode === "outlined" 
      ? "#000000"
      : props.theme === "light" && props.mode === "basic"
      ? "#FFFFFF"
      : props.theme === "dark" && props.mode === "outlined"
      ? "#FFFFFF"
      : props.theme === "dark" && props.mode === "basic"
      ? "#000000"
      : "#000000"};

  border-color: ${props =>
    props.theme === "light" && props.mode === "outlined"
      ? "#000000"
      : props.theme === "light" && props.mode === "basic"
      ? "#FFFFFF"
      : props.theme === "dark" && props.mode === "outlined"
      ? "#FFFFFF"
      : props.theme === "dark" && props.mode === "basic"
      ? "#000000"
      : "#000000"};

  border: ${props => (props.mode === "outlined" ? "2px solid" : "none")};
  border-radius: 2px;
  border-bottom-right-radius: ${props => (props.opened === true ? "0px" : "2px")};
  border-bottom-left-radius: ${props => (props.opened === true ? "0px" : "2px")};
`;

const DropdownTriggerLabel = styled.span`
  margin-right: ${props => {
    if (props.iconPosition === "after" && props.label !== "") {
      return "10px";
    } else {
      return "0px";
    }
  }};
  margin-left: ${props => {
    if (props.iconPosition === "before" && props.label !== "") {
      return "10px";
    } else {
      return "0px";
    }
  }};
`;

const DropdownTriggerContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.iconPosition === "after" && "row-reverse") || "row"};
  margin-left: 0px;
  margin-right: 0px;
`;

const ListIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
`;

const CaretIcon = styled.img`
  display: ${props => (props.caretHidden === true ? "none" : "block")};
  margin-left: 10px;
`;

DxcDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      iconSrc: PropTypes.string
    })
  ),
  optionsIconPosition: PropTypes.oneOf(["after", "before", ""]),
  iconSrc: PropTypes.string,
  iconPosition: PropTypes.oneOf(["after", "before", ""]),
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  mode: PropTypes.oneOf(["basic", "outlined", ""]),
  caretHidden: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onSelectOption: PropTypes.func
};

export default DxcDropdown;
