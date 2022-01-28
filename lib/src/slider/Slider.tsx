import React, { useState, useMemo, useContext } from "react";
import Slider from "@material-ui/lab/Slider";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import DxcTextInput from "../text-input/TextInput";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import BackgroundColorContext from "../BackgroundColorContext.js";
import SliderPropsType from "./types";

const DxcSlider = ({
  label = "",
  name = "",
  value,
  helperText = "",
  minValue = 0,
  maxValue = 100,
  step = 1,
  showLimitsValues = false,
  showInput = false,
  disabled = false,
  marks = false,
  onChange,
  onDragEnd,
  labelFormatCallback,
  margin,
  size = "fillParent",
}: SliderPropsType): JSX.Element => {
  const [innerValue, setInnerValue] = useState(0);
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const minLabel = useMemo(
    () => (labelFormatCallback ? labelFormatCallback(minValue) : minValue),
    [labelFormatCallback, minValue]
  );
  const maxLabel = useMemo(
    () => (labelFormatCallback ? labelFormatCallback(maxValue) : maxValue),
    [labelFormatCallback, maxValue]
  );

  const handlerSliderChange = (event, newValue) => {
    if (value == null) {
      const valueToCheck = value !== undefined ? value : innerValue; // ?? va a ser siempre innerValue, si no no entraria
      valueToCheck !== newValue && setInnerValue(newValue);
    }
    /**
     * PROPUESTA:
     * const valueToCheck = value ?? innerValue; // ?? va a ser siempre innerValue, si no no entraria
     * valueToCheck !== newValue && setInnerValue(newValue);
     */
    typeof onChange === "function" && onChange(newValue); // onChange?.(newValue); ??
  };

  const handleSliderOnChangeCommited = (event, selectedValue) => {
    onDragEnd?.(selectedValue);
  };

  const handlerInputChange = (event) => {
    const intValue = parseInt(event.value, 10);
    if (value == null) {
      if (!Number.isNaN(intValue)) setInnerValue(intValue > maxValue ? maxValue : intValue);
      // } else {
      //   setInnerValue("");
      // }
    }
    if (!Number.isNaN(intValue)) {
      onChange?.(intValue > maxValue ? maxValue : intValue);
    }
    // else {
    //   onChange("");
    // }
  };

  return (
    <ThemeProvider theme={colorsTheme.slider}>
      <Container margin={margin} size={size}>
        <Label>{label}</Label>
        <HelperText>{helperText}</HelperText>
        <SliderContainer backgroundType={backgroundType}>
          {showLimitsValues && (
            <MinLabelContainer backgroundType={backgroundType} disabled={disabled}>
              {minLabel}
            </MinLabelContainer>
          )}
          <Slider
            value={(value != null && value >= 0 && value) || innerValue}
            min={minValue}
            max={maxValue}
            onChange={handlerSliderChange}
            onChangeCommitted={handleSliderOnChangeCommited}
            step={step}
            marks={marks || []}
            disabled={disabled}
          />
          {showLimitsValues && (
            <MaxLabelContainer backgroundType={backgroundType} disabled={disabled} step={step}>
              {maxLabel}
            </MaxLabelContainer>
          )}
          {showInput && (
            <StyledTextInput>
              <DxcTextInput
                name={name}
                value={(value != null && value >= 0 && value) || innerValue}
                disabled={disabled}
                onChange={handlerInputChange}
                size="fillParent"
              />
            </StyledTextInput>
          )}
        </SliderContainer>
      </Container>
    </ThemeProvider>
  );
};

const sizes = {
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const Container = styled.div`
  display: flex;
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
  width: ${(props) => calculateWidth(props.margin, props.size)};
`;

const Label = styled.label`
  color: ${(props) => props.theme.labelFontColor};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span`
  color: ${(props) => props.theme.helperTextFontColor};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontstyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const SliderContainer = styled.div`
  display: flex;
  height: 48px;
  align-items: center;

  .MultiSlider-root {
    display: flex;
    align-items: center;
  }
  .MuiSlider-container {
    padding: 30px 24px;
  }
  .MuiSlider-root.Mui-disabled {
    color: ${(props) =>
      props.backgroundType === "dark"
        ? props.theme.disabledThumbBackgroundColorOnDark
        : props.theme.disabledThumbBackgroundColor};
    cursor: not-allowed;
  }
  .Mui-disabled {
    & .MuiSlider-thumb {
      height: ${(props) => props.theme.thumbHeight};
      width: ${(props) => props.theme.thumbWidth};
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.disabledThumbBackgroundColorOnDark
          : props.theme.disabledThumbBackgroundColor};
      top: ${(props) => props.theme.disabledThumbVerticalPosition};
    }
    & .MuiSlider-track {
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.disabledTrackLineColorOnDark
          : props.theme.disabledTrackLineColor};
    }
    & .MuiSlider-rail {
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.disabledTotalLineColorOnDark
          : props.theme.disabledTotalLineColor};
    }
    & > .MuiSlider-mark.MuiSlider-markActive {
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.disabledTickBackgroundColorOnDark
          : props.theme.disabledTickBackgroundColor} !important;
    }
    & > .MuiSlider-mark {
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.disabledTickBackgroundColorOnDark
          : props.theme.disabledTickBackgroundColor};
      height: ${(props) => props.theme.tickHeight};
      width: ${(props) => props.theme.tickWidth};
      border-radius: 18px;
      top: ${(props) => props.theme.disabledTickVerticalPosition};
    }
  }
  .MuiSlider-thumb {
    height: ${(props) => props.theme.thumbHeight};
    width: ${(props) => props.theme.thumbWidth};
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.thumbBackgroundColorOnDark : props.theme.thumbBackgroundColor};
    top: ${(props) => props.theme.thumbVerticalPosition};
    border-radius: 9999px;

    :hover,
    &.Mui-focusVisible {
      box-shadow: none;
    }
    &.MuiSlider-active {
      box-shadow: none;
    }
    :focus {
      outline: ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)}
        auto 1px;
      outline-offset: 2px;
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.focusThumbBackgroundColorOnDark
          : props.theme.focusThumbBackgroundColor};
    }
    :hover {
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.hoverThumbBackgroundColorOnDark
          : props.theme.hoverThumbBackgroundColor};
      transform: scale(${(props) => props.theme.hoverThumbScale});
      transform-origin: center;
      height: ${(props) => props.theme.hoverThumbHeight};
      width: ${(props) => props.theme.hoverThumbWidth};
      top: ${(props) => props.theme.hoverThumbVerticalPosition};
    }
    :active {
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.activeThumbBackgroundColorOnDark
          : props.theme.activeThumbBackgroundColor};
      transform: scale(${(props) => props.theme.activeThumbScale});
      transform-origin: center;
    }
  }
  .MuiSlider-track {
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.trackLineColorOnDark : props.theme.trackLineColor};
    height: ${(props) => props.theme.trackLineThickness};
    top: ${(props) => props.theme.trackLineVerticalPosition};
    border-radius: 9999px;
  }
  .MuiSlider-track.MuiSlider-trackAfter {
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.trackLineColorOnDark : props.theme.trackLineColor};
  }
  .MuiSlider-rail {
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.totalLineColorOnDark : props.theme.totalLineColor};
    height: ${(props) => props.theme.totalLineThickness};
    top: ${(props) => props.theme.totalLineVerticalPosition};
  }
  .MuiSlider-mark.MuiSlider-markActive {
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.tickBackgroundColorOnDark : props.theme.tickBackgroundColor};
  }
  .MuiSlider-mark {
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.tickBackgroundColorOnDark : props.theme.tickBackgroundColor};
    height: ${(props) => props.theme.tickHeight};
    width: ${(props) => props.theme.tickWidth};
    border-radius: 18px;
    top: ${(props) => props.theme.tickVerticalPosition};
  }
`;

const MinLabelContainer = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledFontColor
      : props.backgroundType === "dark"
      ? props.theme.fontColorOnDark
      : props.theme.fontColor};
  letter-spacing: ${(props) => props.theme.fontLetterSpacing};
  margin-right: ${(props) => props.theme.floorLabelMarginRight};
`;

const MaxLabelContainer = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledFontColor
      : props.backgroundType === "dark"
      ? props.theme.fontColorOnDark
      : props.theme.fontColor};
  letter-spacing: ${(props) => props.theme.fontLetterSpacing};
  margin-left: ${(props) => (props.step === 1 ? props.theme.ceilLabelMarginLeft : "1.25rem")};
`;

const StyledTextInput = styled.div`
  margin-left: ${(props) => props.theme.inputMarginLeft};
  label + .MuiInput-formControl {
    margin-top: 2px;
  }
  max-width: 70px;
`;

DxcSlider.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showLimitsValues: PropTypes.bool,
  showInput: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  disabled: PropTypes.bool,
  marks: PropTypes.bool,
  labelFormatCallback: PropTypes.func,
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

export default DxcSlider;
