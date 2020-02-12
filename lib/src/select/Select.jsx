import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import DxcCheckbox from "../checkbox/Checkbox";

import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";

const useStyles = makeStyles(theme => ({
  root: props => ({
    minWidth: props.width
  }),
  dropdownStyle: props => ({
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.3)",
    minWidth: props.width,
    width: props.width
  }),
  itemList: props => ({
    color: colors.darkGrey,
    "&.MuiList-padding": {
      paddingBottom: "0px",
      paddingTop: "0px"
    },
    "& li": {
      fontSize: "16px",
      "&:hover": {
        backgroundColor: colors.darkWhite,
        color: colors.darkGrey
      },
      "&:active": {
        backgroundColor: colors.lightGrey,
        color: colors.black
      },
      "&.Mui-selected": {
        backgroundColor: colors.lightGrey,
        color: colors.black
      }
    }
  })
}));

const DxcSelect = ({
  value,
  name,
  onChange,
  label,
  required = false,
  disabled = false,
  options = [],
  theme = "light",
  disableRipple = false,
  iconPosition = "before",
  multiple = false,
  margin,
  size = "medium"
}) => {
  const [selectedValue, setSelectedValue] = useState((multiple && []) || "");
  const selectValues = { width: "auto" };
  const classes = useStyles(selectValues);

  const handleSelectChange = selectedOption => {
    if (multiple) {
      setSelectedValue(selectedOption.target.value);
      if (typeof onChange === "function") {
        onChange(selectedOption.target.value);
      }
    } else {
      setSelectedValue(selectedOption.target.value);
      if (typeof onChange === "function") {
        onChange(selectedOption.target.value);
      }
    }
  };

  const getLabelForSingleSelect = selected => {
    const selectedItem = options.filter(option => option.value === selected)[0];
    return (
      <SelectedIconContainer iconPosition={iconPosition} multiple={multiple} label={selectedItem.label}>
        {selectedItem.iconSrc && <ListIcon src={selectedItem.iconSrc} />}{" "}
        {selectedItem.label && (
          <SelectedLabelContainer
            iconSrc={selectedItem.iconSrc}
            iconPosition={iconPosition}
            theme={theme}
            disabled={disabled}
          >
            {selectedItem.label}
          </SelectedLabelContainer>
        )}
      </SelectedIconContainer>
    );
  };

  const getSelectedValuesWithLabel = (optionsList, selected) => {
    return optionsList
      .filter(x => selected.includes(x.value))
      .map(optionToRender => optionToRender.label)
      .join(", ");
  };

  const getSelectedValuesWithIcons = (optionsList, selected) => {
    return options
      .filter(x => selected.includes(x.value))
      .map(optionToRender => getLabelForSingleSelect(optionToRender.value));
  };

  const labelForMultipleSelect = selected => {
    return options.findIndex(option => !option.label) !== -1
      ? getSelectedValuesWithIcons(options, selected)
      : getSelectedValuesWithLabel(options, selected);
  };
  const getRenderValue = selected => {
    return (multiple && labelForMultipleSelect(selected)) || getLabelForSingleSelect(selected);
  };
  const isChecked = (checkedValue, value, option) => {
    if (value !== undefined) {
      let result = false;
      value.map(val => {
        if (val === option.value) {
          result = true;
        }
      });
      return result;
    } else if (checkedValue) {
      return checkedValue.findIndex(element => element === option.value) !== -1 || false;
    }
  };

  return (
    <SelectContainer margin={margin} theme={theme} required={required} size={size}>
      <FormControl>
        <InputLabel disabled={disabled}>{label}</InputLabel>
        <Select
          name={name}
          theme={theme}
          multiple={multiple}
          renderValue={getRenderValue}
          onChange={handleSelectChange}
          value={value !== undefined ? value : selectedValue}
          disabled={disabled}
          MenuProps={{
            classes: { paper: classes.dropdownStyle, list: classes.itemList },
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            }
          }}
        >
          {options.map(option => {
            return (
              <MenuItem id={option.value} value={option.value} disableRipple={disableRipple}>
                {multiple && (
                  <DxcCheckbox
                    size={"fitContent"}
                    disableRipple={true}
                    checked={isChecked(selectedValue, value, option)}
                  />
                )}
                <OptionContainer iconPosition={iconPosition}>
                  {option.iconSrc && <ListIcon src={option.iconSrc} label={option.label} iconPosition={iconPosition} />}{" "}
                  <LabelCont>{option.label}</LabelCont>
                </OptionContainer>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </SelectContainer>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%"
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const LabelCont = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SelectedIconContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.iconPosition === "before" && "row") || "row-reverse"};
  justify-content: ${props => (props.iconPosition === "before" && "flex-start") || "flex-end"};
  margin-right: ${props => (props.multiple && props.label && "15px") || "0px"};
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    margin: 0 4px;
    ${props => props.iconPosition === "after" && props.label && props.label !== "" && props.multiple && "content:','"};
  }
  &::after {
    content: '${props => (props.iconPosition === "before" && props.label && props.label !== "" && ",") || ""}'; 
    margin: '${props => (props.label && props.label !== "" && "0 4px") || ""}';
  }
`;
const SelectedLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  margin-left: ${props => ((props.iconPosition === "after" || !props.iconSrc) && "0px") || "10px"};
  margin-right: ${props => ((props.iconPosition === "before" || !props.iconSrc) && "0px") || "10px"};
  overflow: hidden;
  text-overflow: ellipsis;
`;
const OptionContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.iconPosition === "before" && "row") || "row-reverse"};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
  margin-left: ${props => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
`;

const SelectContainer = styled.div`
  width: ${props => calculateWidth(props.margin, props.size)};
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
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiFormLabel-root {
    font-size: 16px;
      color: ${props => (props.theme === "light" ? colors.darkGrey : colors.lightGrey)};
      margin-top: -3px;
      &::before {
        content:'${props => (props.required && "*") || ""}';
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        font-size: 18px; 
      }
      &.Mui-disabled{
        opacity:0.5;
        color: ${props => (props.theme === "light" ? colors.darkGrey : colors.lightGrey)};
      }
      &.Mui-focused{
        font-size: 16px;
        color: ${props => (props.theme === "light" ? colors.black : colors.lightGrey)};
      }
  }
  .MuiSelect-select {
    width: calc(100% - 24px);
    height: 20px;
    display: flex;
    padding-right: unset;
    color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
    align-items: center;
    :focus {
      background-color: transparent;
    }
    & > *:last-child::after {
      content: unset;
    }
    & > *:not(:last-child)::before {
      content: ",";
    }
    &.Mui-disabled {
      color: ${props => (props.theme === "light" ? colors.darkGrey : colors.lightGrey)};
        opacity:0.5;
        cursor: not-allowed;
    }
  }
  .MuiInputBase-root {
    width: 100%;
    &.Mui-disabled {
        opacity:0.5;
        cursor: not-allowed;
    }
  }
  .MuiInput-underline{
    &.Mui-disabled:before{
      border-bottom-style: solid;
      opacity: 0.5;
    }
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  .MuiSelect-icon {
    color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  & label{
    text-overflow: ellipsis;
    overflow: hidden;
    width: calc(100% - 24px);
  }
`;

DxcSelect.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  disableRipple: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      iconSrc: PropTypes.string
    })
  ),
  multiple: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};
export default DxcSelect;
