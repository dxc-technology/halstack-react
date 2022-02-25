import React, { useState, useMemo, useContext } from "react";
import Slider from "@material-ui/lab/Slider";
import styled, { ThemeProvider } from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";
import SliderPropsType from "./types";
import { v4 as uuidv4 } from "uuid";

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

  const [labelId] = useState(`label-${uuidv4()}`);

  const minLabel = useMemo(
    () => (labelFormatCallback ? labelFormatCallback(minValue) : minValue),
    [labelFormatCallback, minValue]
  );
  const maxLabel = useMemo(
    () => (labelFormatCallback ? labelFormatCallback(maxValue) : maxValue),
    [labelFormatCallback, maxValue]
  );

  const handlerSliderChange = (event, newValue) => {
    const valueToCheck = value ?? innerValue;
    valueToCheck !== newValue && setInnerValue(newValue);
    onChange?.(newValue);
  };

  const handleSliderOnChangeCommited = (event, selectedValue) => {
    onDragEnd?.(selectedValue);
  };

  const handlerInputChange = (event) => {
    const intValue = parseInt(event.value, 10);
    if (value == null) {
      if (!Number.isNaN(intValue)) setInnerValue(intValue > maxValue ? maxValue : intValue);
    }
    if (!Number.isNaN(intValue)) {
      onChange?.(intValue > maxValue ? maxValue : intValue);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.slider}>
      <Container margin={margin} size={size}>
        <Label id={labelId} disabled={disabled} backgroundType={backgroundType}>
          {label}
        </Label>
        <HelperText disabled={disabled} backgroundType={backgroundType}>
          {helperText}
        </HelperText>
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
            aria-labelledby={labelId}
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
                value={(value != null && value >= 0 && value.toString()) || innerValue.toString()}
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
  medium: "360px",
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
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledLabelFontColorOnDark
        : props.theme.disabledLabelFontColor
      : props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.theme.labelFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span`
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledHelperTextFontColorOnDark
        : props.theme.disabledHelperTextFontColor
      : props.backgroundType === "dark"
      ? props.theme.helperTextFontColorOnDark
      : props.theme.helperTextFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const SliderContainer = styled.div`
  display: flex;
  height: 48px;
  align-items: center;

  .MuiSlider-root {
    min-width: 15rem;
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
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledLimitValuesFontColor
      : props.backgroundType === "dark"
      ? props.theme.limitValuesFontColorOnDark
      : props.theme.limitValuesFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.limitValuesFontSize};
  font-style: ${(props) => props.theme.limitValuesFontStyle};
  font-weight: ${(props) => props.theme.limitValuesFontWeight};
  letter-spacing: ${(props) => props.theme.limitValuesFontLetterSpacing};
  white-space: nowrap;
  margin-right: ${(props) => props.theme.floorLabelMarginRight};
`;

const MaxLabelContainer = styled.span`
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledLimitValuesFontColor
      : props.backgroundType === "dark"
      ? props.theme.limitValuesFontColorOnDark
      : props.theme.limitValuesFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.limitValuesFontSize};
  font-style: ${(props) => props.theme.limitValuesFontStyle};
  font-weight: ${(props) => props.theme.limitValuesFontWeight};
  letter-spacing: ${(props) => props.theme.limitValuesFontLetterSpacing};
  white-space: nowrap;
  margin-left: ${(props) => (props.step === 1 ? props.theme.ceilLabelMarginLeft : "1.25rem")};
`;

const StyledTextInput = styled.div`
  margin-left: ${(props) => props.theme.inputMarginLeft};
  label + .MuiInput-formControl {
    margin-top: 2px;
  }
  max-width: 70px;
`;

export default DxcSlider;
