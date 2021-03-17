import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import styled, { ThemeProvider } from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import DxcCheckbox from "../checkbox/Checkbox";
import "../common/OpenSans.css";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import DxcRequired from "../common/RequiredComponent";

const useStyles = makeStyles(() => ({
  root: (props) => ({
    minWidth: props.width,
  }),
  dropdownStyle: (props) => ({
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.3)",
    minWidth: props.width,
    width: props.width,
    maxHeight: "250px",
    "&::-webkit-scrollbar": {
      width: "3px",
      margin: "5px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "3px",
      backgroundColor: props.scrollBarTrackColor,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "3px",
      backgroundColor: props.scrollBarThumbColor,
    },
    "& .MuiList-root": {
      width: "auto !important",
      paddingRight: "0 !important",
    },
  }),
  itemList: (props) => ({
    color: props.color,
    "&.MuiList-padding": {
      paddingBottom: "0px",
      paddingTop: "0px",
    },
    "& li": {
      fontSize: "16px",
      "&:hover": {
        backgroundColor: props.hoveredOptionBackgroundColor,
        color: props.color,
      },
      "&:active": {
        backgroundColor: props.selectedOptionBackgroundColor + props.hoverOptionBackgroundColor,
        color: props.color,
      },
      "&.MuiListItem-root.Mui-selected": {
        backgroundColor: props.selectedOptionBackgroundColor,
        color: props.color,
      },
    },
  }),
}));

const DxcSelect = ({
  value,
  name,
  onChange,
  label,
  required = false,
  disabled = false,
  invalid = false,
  options = [],
  iconPosition = "before",
  multiple = false,
  margin,
  size = "medium",
}) => {
  const colorsTheme = useTheme();
  const [selectedValue, setSelectedValue] = useState((multiple && []) || "");
  const selectValues = { width: "auto", ...colorsTheme.select };
  const classes = useStyles(selectValues);

  const handleSelectChange = (selectedOption) => {
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

  const getLabelForSingleSelect = (selected) => {
    const selectedItem = options.filter((option) => option.value === selected)[0];
    return (
      <SelectedIconContainer
        iconPosition={iconPosition}
        multiple={multiple}
        label={selectedItem && selectedItem.label}
        key={selectedItem && selectedItem.label}
      >
        {selectedItem && selectedItem.icon ? (
          <ListIconContainer disabled={disabled}>
            {typeof selectedItem.icon === "object" ? selectedItem.icon : React.createElement(selectedItem.icon)} jairo{" "}
            {(disabled === true && "YESS") || "NOOOOOOOOOOO"}
          </ListIconContainer>
        ) : (
          selectedItem && selectedItem.iconSrc && <ListIcon src={selectedItem && selectedItem.iconSrc} />
        )}
        {selectedItem && selectedItem.label && (
          <SelectedLabelContainer
            iconSrc={selectedItem && selectedItem.iconSrc && selectedItem.icon}
            iconPosition={iconPosition}
            disabled={disabled}
          >
            {selectedItem && selectedItem.label}
          </SelectedLabelContainer>
        )}
      </SelectedIconContainer>
    );
  };

  const getSelectedValuesWithLabel = (optionsList, selected) => {
    return (
      <MultipleLabelSelected>
        {optionsList
          .filter((x) => selected.includes(x.value))
          .map((optionToRender) => optionToRender.label)
          .join(", ")}
      </MultipleLabelSelected>
    );
  };

  const getSelectedValuesWithIcons = (optionsList, selected) => {
    return options
      .filter((x) => selected.includes(x.value))
      .map((optionToRender) => getLabelForSingleSelect(optionToRender.value));
  };

  const labelForMultipleSelect = (selected) => {
    return options.findIndex((option) => !option.label) !== -1
      ? getSelectedValuesWithIcons(options, selected)
      : getSelectedValuesWithLabel(options, selected);
  };
  const getRenderValue = (selected) => {
    return (multiple && labelForMultipleSelect(selected)) || getLabelForSingleSelect(selected);
  };
  const isChecked = (checkedValue, value, option) => {
    if (value !== undefined) {
      let result = false;
      value.map((val) => {
        if (val === option.value) {
          result = true;
        }
      });
      return result;
    } else if (checkedValue) {
      return checkedValue.findIndex((element) => element === option.value) !== -1 || false;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <SelectContainer margin={margin} size={size} invalid={invalid}>
        <FormControl>
          <InputLabel disabled={disabled}>
            {required && <DxcRequired />}
            {label}
          </InputLabel>
          <Select
            tabIndex="0"
            name={name}
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
                horizontal: "left",
              },
            }}
          >
            {options.map((option) => {
              return (
                <MenuItem id={option.value} value={option.value} disableRipple key={option.value}>
                  {multiple && <DxcCheckbox size={"fitContent"} checked={isChecked(selectedValue, value, option)} />}
                  <OptionContainer iconPosition={iconPosition}>
                    {option.icon ? (
                      <ListIconContainer label={option.label} iconPosition={iconPosition}>
                        {typeof option.icon === "object" ? option.icon : React.createElement(option.icon)}
                      </ListIconContainer>
                    ) : (
                      option.iconSrc && (
                        <ListIcon src={option.iconSrc} label={option.label} iconPosition={iconPosition} />
                      )
                    )}{" "}
                    <LabelCont>{option.label}</LabelCont>
                  </OptionContainer>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </SelectContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const MultipleLabelSelected = styled.div`
  width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelCont = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SelectedIconContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.iconPosition === "before" && "row") || "row-reverse"};
  justify-content: ${(props) => (props.iconPosition === "before" && "flex-start") || "flex-end"};
  margin-right: ${(props) => (props.multiple && props.label && "15px") || "0px"};
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => (!props.multiple && "calc(100% - 24px)") || "auto"};

  &::before {
    margin: 0 4px;
    ${(props) => props.iconPosition === "after" && (props.label !== "" || props.label === undefined) && "content:','"};
  }
  &::after {
    margin: 0 4px;
    ${(props) => props.iconPosition === "before" && (props.label !== "" || props.label === undefined) && "content:','"};
  }
`;

const SelectedLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  margin-left: ${(props) => ((props.iconPosition === "after" || !props.iconSrc) && "0px") || "10px"};
  margin-right: ${(props) => ((props.iconPosition === "before" || !props.iconSrc) && "0px") || "10px"};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.iconPosition === "before" && "row") || "row-reverse"};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
`;

const ListIconContainer = styled.div`
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
  overflow: hidden;
  opacity: ${(props) => props.disabled && "0.34"};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const SelectContainer = styled.div`
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
  display: inline-block;
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiFormLabel-root {
    font-size: 16px;
    color: ${(props) => (props.invalid === true ? props.theme.select.error : props.theme.select.color)};
    margin-top: -3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 22px;
    display: flex;
    align-items: center;

    &.Mui-disabled {
      color: ${(props) => props.theme.select.disabledColor};
    }
    &.Mui-focused {
      font-size: 16px;
      color: ${(props) => (props.invalid === true ? props.theme.select.error : props.theme.select.color)};
    }
  }
  .MuiSelect-select.MuiSelect-select {
      padding-right: unset;
  }

  .MuiSelect-select {
    width: 100%;
    height: 20px;
    display: flex;
    padding-right: unset;
    color: ${(props) => props.theme.select.color};
    align-items: center;
    :focus {
      background-color: transparent;
    }
    & > *:last-child::after {
      content: unset;
    }
    & > *:last-child::before {
      content: unset;
    }
    &.Mui-disabled {
      color: ${(props) => props.theme.select.disabledColor};
      cursor: not-allowed;
    }
  }
  .MuiInputBase-root {
    width: 100%;
    &:focus {
      outline: ${(props) => props.theme.select.focusColor} auto 1px;
    }
    &.Mui-disabled {
      opacity: ${(props) => props.theme.select.disabled};
      cursor: not-allowed;
      &:focus {
        outline: none;
      }
    }
  }
  .MuiInput-underline {
    &:focus {
      border-bottom: 2px solid;
      border-bottom-color: ${(props) => (props.invalid === true ? props.theme.select.error : props.theme.select.color)};
    }
    &.Mui-disabled:before {
      border-bottom-style: solid;
    }
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid;
    border-bottom-color: ${(props) => (props.invalid === true ? props.theme.select.error : props.theme.select.color)};
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid;
    border-bottom-color: ${(props) => (props.invalid === true ? props.theme.select.error : props.theme.select.color)};
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid;
    border-bottom-color: ${(props) => (props.invalid === true ? props.theme.select.error : props.theme.select.color)}};
  }
  .MuiSelect-icon {
    color: ${(props) => props.theme.select.color};
  }
  & label {
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
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      iconSrc: PropTypes.string,
    })
  ),
  multiple: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};
export default DxcSelect;
