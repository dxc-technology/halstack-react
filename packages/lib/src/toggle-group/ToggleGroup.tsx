import { useId, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import { Tooltip, TooltipWrapper } from "../tooltip/Tooltip";
import useTheme from "../useTheme";
import ToggleGroupPropsType, { OptionLabel } from "./types";

const DxcToggleGroup = ({
  label,
  helperText,
  defaultValue,
  value,
  onChange,
  disabled = false,
  options,
  margin,
  multiple = false,
  tabIndex = 0,
}: ToggleGroupPropsType): JSX.Element => {
  const toggleGroupLabelId = `label-toggle-group-${useId()}`;
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? (multiple ? [] : -1));

  const colorsTheme = useTheme();

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

  const handleOnKeyDown = (event, optionValue) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleToggleChange(optionValue);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.toggleGroup}>
      <ToggleGroup margin={margin}>
        <Label id={toggleGroupLabelId} disabled={disabled}>
          {label}
        </Label>
        <HelperText disabled={disabled}>{helperText}</HelperText>
        <OptionsContainer aria-labelledby={toggleGroupLabelId}>
          {options.map((option, i) => (
            <TooltipWrapper condition={Boolean(option.title)} label={option.title}>
              <ToggleButton
                key={`toggle-${i}-${option.label}`}
                aria-label={option.title}
                aria-pressed={
                  multiple
                    ? value
                      ? Array.isArray(value) && value.includes(option.value)
                      : Array.isArray(selectedValue) && selectedValue.includes(option.value)
                    : value
                      ? option.value === value
                      : option.value === selectedValue
                }
                disabled={disabled}
                onClick={() => {
                  handleToggleChange(option.value);
                }}
                onKeyDown={(event) => {
                  handleOnKeyDown(event, option.value);
                }}
                tabIndex={!disabled ? tabIndex : -1}
                hasIcon={option.icon}
                optionLabel={option.label}
                selected={
                  multiple
                    ? value
                      ? Array.isArray(value) && value.includes(option.value)
                      : Array.isArray(selectedValue) && selectedValue.includes(option.value)
                    : value
                      ? option.value === value
                      : option.value === selectedValue
                }
              >
                <DxcFlex alignItems="center">
                  {option.icon && (
                    <IconContainer optionLabel={option.label}>
                      {typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}
                    </IconContainer>
                  )}
                  {option.label && <LabelContainer>{option.label}</LabelContainer>}
                </DxcFlex>
              </ToggleButton>
            </TooltipWrapper>
          ))}
        </OptionsContainer>
      </ToggleGroup>
    </ThemeProvider>
  );
};

const ToggleGroup = styled.div<{ margin: ToggleGroupPropsType["margin"] }>`
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

const Label = styled.label<{ disabled: ToggleGroupPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span<{ disabled: ToggleGroupPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  width: max-content;
  height: calc(48px - 4px - 4px);
  padding: 0.25rem;
  border-width: ${(props) => props.theme.containerBorderThickness};
  border-style: ${(props) => props.theme.containerBorderStyle};
  border-radius: ${(props) => props.theme.containerBorderRadius};
  border-color: ${(props) => props.theme.containerBorderColor};
  margin-top: ${(props) => props.theme.containerMarginTop};
  background-color: ${(props) => props.theme.containerBackgroundColor};
`;

const ToggleButton = styled.button<{
  selected: boolean;
  hasIcon: OptionLabel["icon"];
  optionLabel: OptionLabel["label"];
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${(props) =>
    (props.optionLabel && props.hasIcon) || (props.optionLabel && !props.hasIcon)
      ? props.theme.labelPaddingLeft
      : props.theme.iconPaddingLeft};
  padding-right: ${(props) =>
    (props.optionLabel && props.hasIcon) || (props.optionLabel && !props.hasIcon)
      ? props.theme.labelPaddingRight
      : props.theme.iconPaddingRight};
  border-width: ${(props) => props.theme.optionBorderThickness};
  border-style: ${(props) => props.theme.optionBorderStyle};
  border-radius: ${(props) => props.theme.optionBorderRadius};
  background-color: ${(props) =>
    props.selected ? props.theme.selectedBackgroundColor : props.theme.unselectedBackgroundColor};
  color: ${(props) => (props.selected ? props.theme.selectedFontColor : props.theme.unselectedFontColor)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.selected ? props.theme.selectedHoverBackgroundColor : props.theme.unselectedHoverBackgroundColor};
  }
  &:active {
    background-color: ${(props) =>
      props.selected ? props.theme.selectedActiveBackgroundColor : props.theme.unselectedActiveBackgroundColor};
    color: #ffffff;
  }
  &:focus {
    outline: none;
    box-shadow: ${(props) => `0 0 0 ${props.theme.optionFocusBorderThickness} ${props.theme.focusColor}`};
  }
  &:disabled {
    background-color: ${(props) =>
      props.selected ? props.theme.selectedDisabledBackgroundColor : props.theme.unselectedDisabledBackgroundColor};
    color: ${(props) =>
      props.selected ? props.theme.selectedDisabledFontColor : props.theme.unselectedDisabledFontColor};
    cursor: not-allowed;
  }
`;

const LabelContainer = styled.span`
  font-family: ${(props) => props.theme.optionLabelFontFamily};
  font-size: ${(props) => props.theme.optionLabelFontSize};
  font-style: ${(props) => props.theme.optionLabelFontStyle};
  font-weight: ${(props) => props.theme.optionLabelFontWeight};
`;

const IconContainer = styled.div<{ optionLabel: OptionLabel["label"] }>`
  display: flex;
  margin-right: ${(props) => props.optionLabel && props.theme.iconMarginRight};
  overflow: hidden;
  font-size: 24px;
  svg {
    height: 24px;
    width: 24px;
  }
`;

export default DxcToggleGroup;
