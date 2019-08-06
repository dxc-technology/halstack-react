import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import caretUp from "./baseline-arrow_drop_up.svg";
import caretDown from "./baseline-arrow_drop_down.svg";
import caretUpWh from "./baseline-arrow_drop_up_wh.svg";
import caretDownWh from "./baseline-arrow_drop_down_wh.svg";

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
    <DropdownContainer>
      <DropdownTrigger onClick={handleClickListItem} mode={mode} theme={theme} label={label}>
        <DropdownTriggerLabel iconPosition={iconPosition}>
          {iconSrc && <ListIcon src={iconSrc} iconPosition={iconPosition} />} <span>{label}</span>
        </DropdownTriggerLabel>
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
            {option.iconSrc && <ListIcon src={option.iconSrc} iconPosition={optionsIconPosition} />}
            {""}
            <span>{option.label}</span>
          </MenuItem>
        ))}
      </DxcMenu>
    </DropdownContainer>
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
    border-radius: 2px;
    .MuiList-padding {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .MuiListItem-button {
      display: flex;
      flex-direction: ${props => (props.optionsIconPosition === "after" && "row-reverse") || "row"};
      justify-content: ${props => (props.optionsIconPosition === "after" && "flex-end") || ""};
    }
    .MuiListItem-button:hover {
      background-color: #d9d9d9;
      color: #000;
    }
  }
`;

const DropdownContainer = styled.span``;

const DropdownTrigger = styled.button`
  cursor: pointer;
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${props => (props.label === "" ? "0px" : "230px")};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: 15px;
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

  border: ${props => (props.mode === "outlined" ? "2px solid" : "none")};
  border-radius: 2px;
`;

const DropdownTriggerLabel = styled.span`
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
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;

const CaretIcon = styled.img`
  display: ${props => (props.caretHidden === true ? "none" : "block")};
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
