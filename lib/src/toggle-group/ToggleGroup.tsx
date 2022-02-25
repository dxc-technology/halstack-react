import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import ToogleGroupPropsType from "./types";

const DxcToggleGroup = ({
  label,
  helperText,
  value,
  onChange,
  disabled = false,
  options,
  margin,
  multiple = false,
  tabIndex = 0,
}: ToogleGroupPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [selectedValue, setSelectedValue] = useState<typeof value>(multiple ? [] : -1);
  const [toggleGroupId] = useState(`toggle-group-${uuidv4()}`);

  const handleToggleChange = (selectedOption) => {
    let newSelectedOptions;

    if (value == null) {
      if (multiple && Array.isArray(selectedValue)) {
        newSelectedOptions = selectedValue.map((value) => value);
        if (newSelectedOptions.includes(selectedOption)) {
          const index = newSelectedOptions.indexOf(selectedOption);
          newSelectedOptions.splice(index, 1);
        } else {
          newSelectedOptions.push(selectedOption);
        }
        setSelectedValue(newSelectedOptions);
      } else setSelectedValue(selectedOption === selectedValue ? null : selectedOption);
    } else if (multiple) {
      newSelectedOptions = Array.isArray(value) ? value.map((v) => v) : value;
      if (newSelectedOptions.includes(selectedOption)) {
        const index = newSelectedOptions.indexOf(selectedOption);
        newSelectedOptions.splice(index, 1);
      } else newSelectedOptions.push(selectedOption);
    }

    onChange?.(multiple ? newSelectedOptions : selectedOption);
  };

  const handleKeyPress = (event, optionValue) => {
    event.preventDefault();
    if (!disabled && (event.nativeEvent.code === "Enter" || event.nativeEvent.code === "Space"))
      handleToggleChange(optionValue);
  };
  return (
    <ThemeProvider theme={colorsTheme.toggleGroup}>
      <ToggleGroup margin={margin} disabled={disabled}>
        <Label htmlFor={toggleGroupId} disabled={disabled}>
          {label}
        </Label>
        <HelperText disabled={disabled}>{helperText}</HelperText>
        <OptionsContainer id={toggleGroupId} role={multiple ? "group" : "radiogroup"}>
          {options.map((option, i) => (
            <ToggleContainer
              selected={
                multiple && Array.isArray(value)
                  ? value
                    ? value.includes(option.value)
                    : Array.isArray(selectedValue) && selectedValue.includes(option.value)
                  : value
                  ? option.value === value
                  : option.value === selectedValue
              }
              role={multiple ? "switch" : "radio"}
              aria-checked={
                multiple && Array.isArray(value)
                  ? value
                    ? value.includes(option.value)
                    : Array.isArray(selectedValue) && selectedValue.includes(option.value)
                  : value
                  ? option.value === value
                  : option.value === selectedValue
              }
              tabIndex={!disabled ? tabIndex : -1}
              onClick={() => !disabled && handleToggleChange(option.value)}
              isFirst={i === 0}
              isLast={i === options.length - 1}
              isIcon={option.iconSrc || option.icon}
              optionLabel={option.label}
              disabled={disabled}
              onKeyPress={(event) => {
                handleKeyPress(event, option.value);
              }}
              key={`toggle-${i}-${option.label}`}
            >
              <OptionContent>
                {option.icon && (
                  <IconContainer optionLabel={option.label}>
                    {typeof option.icon === "object" ? option.icon : React.createElement(option.icon)}
                  </IconContainer>
                )}
                {option.iconSrc && <Icon src={option.iconSrc} optionLabel={option.label} />}
                {option.label && <LabelContainer>{option.label}</LabelContainer>}
              </OptionContent>
            </ToggleContainer>
          ))}
        </OptionsContainer>
      </ToggleGroup>
    </ThemeProvider>
  );
};

const Label = styled.label`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontcolor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
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

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 1;
  height: calc(48px - 4px - 4px);
  border-width: ${(props) => props.theme.containerBorderThickness};
  border-style: ${(props) => props.theme.containerBorderStyle};
  border-radius: ${(props) => props.theme.containerBorderRadius};
  border-color: ${(props) => props.theme.containerBorderColor};
  background-color: ${(props) => props.theme.containerBackgroundColor};
  padding: 4px;
  margin-top: ${(props) => props.theme.containerMarginTop};
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: ${(props) => !props.isLast && "4px"};

  ${(props) => `
    background-color: ${
      props.selected
        ? props.disabled
          ? props.theme.selectedDisabledBackgroundColor
          : props.theme.selectedBackgroundColor
        : props.disabled
        ? props.theme.unselectedDisabledBackgroundColor
        : props.theme.unselectedBackgroundColor
    };
    border-width: ${props.theme.optionBorderThickness};
    border-style: ${props.theme.optionBorderStyle};
    border-radius: ${props.theme.optionBorderRadius};
    padding-left: ${
      (props.optionLabel && props.isIcon) || (props.optionLabel && !props.isIcon)
        ? props.theme.labelPaddingLeft
        : props.theme.iconPaddingLeft
    };
    padding-right: ${
      (props.optionLabel && props.isIcon) || (props.optionLabel && !props.isIcon)
        ? props.theme.labelPaddingRight
        : props.theme.iconPaddingRight
    };
    ${
      !props.disabled
        ? `:hover {
          background-color: ${
            props.selected ? props.theme.selectedHoverBackgroundColor : props.theme.unselectedHoverBackgroundColor
          };
        }
        :active {
          background-color: ${
            props.selected ? props.theme.selectedActiveBackgroundColor : props.theme.unselectedActiveBackgroundColor
          };
          color: #ffffff;
        }        
        :focus {
          border-color: transparent;
          box-shadow: 0 0 0 ${props.theme.optionFocusBorderThickness} ${
            props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor
          };
        }
        &:focus-visible {
          outline: none;
        }
        cursor: pointer;
        color: ${props.selected ? props.theme.selectedFontColor : props.theme.unselectedFontColor};
`
        : `color: ${props.selected ? props.theme.selectedDisabledFontColor : props.theme.unselectedDisabledFontColor};
        cursor: not-allowed;`
    }
  `}
`;

const LabelContainer = styled.span`
  font-family: ${(props) => props.theme.optionLabelFontFamily};
  font-size: ${(props) => props.theme.optionLabelFontSize};
  font-style: ${(props) => props.theme.optionLabelFontStyle};
  font-weight: ${(props) => props.theme.optionLabelFontWeight};
`;

const OptionContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: ${(props) => props.optionLabel && props.theme.iconMarginRight};
`;

const IconContainer = styled.div`
  margin-right: ${(props) => props.optionLabel && props.theme.iconMarginRight};
  height: 24px;
  width: 24px;
  overflow: hidden;
  display: flex;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;
export default DxcToggleGroup;
