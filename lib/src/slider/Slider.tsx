import React, { useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import useTheme from "../useTheme";
import SliderPropsType, { RefType } from "./types";
import { v4 as uuidv4 } from "uuid";

const DxcSlider = React.forwardRef<RefType, SliderPropsType>(
  (
    {
      label = "",
      name = "",
      defaultValue,
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
    },
    ref
  ): JSX.Element => {
    const [labelId] = useState(`label-${uuidv4()}`);
    const [innerValue, setInnerValue] = useState(defaultValue ?? 0);
    const [dragging, setDragging] = useState(false);
    const colorsTheme = useTheme();
    const isFirefox = navigator?.userAgent.indexOf("Firefox") !== -1;

    const minLabel = useMemo(
      () => (labelFormatCallback ? labelFormatCallback(minValue) : minValue),
      [labelFormatCallback, minValue]
    );

    const maxLabel = useMemo(
      () => (labelFormatCallback ? labelFormatCallback(maxValue) : maxValue),
      [labelFormatCallback, maxValue]
    );

    const tickMarks = useMemo(() => {
      const numberOfMarks = Math.floor(maxValue / step - minValue / step);
      const range = maxValue - minValue;
      const ticks = [];
      let index = 0;

      if (marks) {
        while (index <= numberOfMarks) {
          ticks.push(
            <TickMark
              disabled={disabled}
              stepPosition={(step * index) / range}
              stepValue={(value ?? innerValue) / maxValue}
              key={`tickmark-${index}-${labelId}`}
            />
          );

          index++;
        }
        return ticks;
      } else return null;
    }, [minValue, maxValue, step, value, innerValue]);

    const handleSliderChange = (event) => {
      const valueToCheck = event.target.value;
      (valueToCheck !== value || valueToCheck !== innerValue) && setInnerValue(valueToCheck);
      onChange?.(valueToCheck);
    };

    const handleSliderDragging = () => {
      setDragging(true);
    };

    const handleSliderOnChangeCommitted = (event) => {
      if (dragging) {
        setDragging(false);
        onDragEnd?.(event.target.value);
      }
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
        <Container margin={margin} size={size} ref={ref}>
          <Label id={labelId} disabled={disabled}>
            {label}
          </Label>
          <HelperText disabled={disabled}>{helperText}</HelperText>
          <SliderContainer>
            {showLimitsValues && <MinLabelContainer disabled={disabled}>{minLabel}</MinLabelContainer>}
            <SliderInputContainer>
              <SliderInput
                role="slider"
                type="range"
                value={value != null && value >= 0 ? value : innerValue}
                min={minValue}
                max={maxValue}
                step={step}
                disabled={disabled}
                aria-labelledby={labelId}
                aria-orientation="horizontal"
                aria-valuemax={maxValue}
                aria-valuemin={minValue}
                aria-valuenow={value != null && value >= 0 ? value : innerValue}
                onChange={handleSliderChange}
                onMouseUp={handleSliderOnChangeCommitted}
                onMouseDown={handleSliderDragging}
              />
              {marks && <MarksContainer isFirefox={isFirefox}>{tickMarks}</MarksContainer>}
            </SliderInputContainer>
            {showLimitsValues && (
              <MaxLabelContainer disabled={disabled} step={step}>
                {maxLabel}
              </MaxLabelContainer>
            )}
            {showInput && (
              <StyledTextInput>
                <DxcTextInput
                  name={name}
                  value={value != null && value >= 0 ? value.toString() : innerValue.toString()}
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
  }
);

const sizes = {
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin: SliderPropsType["margin"], size: SliderPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const getChromeStyles = () => `
  width: 100%;
  margin-right: 4px;`;

const getFireFoxStyles = () => `
  width: calc(100% - 16px);
  margin-right: 3px;`;

const Container = styled.div<{ margin: SliderPropsType["margin"]; size: SliderPropsType["size"] }>`
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

const Label = styled.label<{ disabled: SliderPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const HelperText = styled.span<{ disabled: SliderPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const SliderInput = styled.input<{
  disabled: SliderPropsType["disabled"];
  value: SliderPropsType["value"];
  min: SliderPropsType["minValue"];
  max: SliderPropsType["maxValue"];
}>`
  width: 100%;
  min-width: 240px;
  height: ${(props) => props.theme.trackLineThickness};
  display: inline-block;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledTotalLineColor + "61" : props.theme.totalLineColor};
  background-image: ${(props) =>
    props.disabled
      ? `linear-gradient(${props.theme.disabledTrackLineColor}, ${props.theme.disabledTrackLineColor})`
      : `linear-gradient(${props.theme.trackLineColor}, ${props.theme.trackLineColor})`};
  background-repeat: no-repeat;
  background-size: ${(props) => ((props.value - props.min) * 100) / (props.max - props.min) + "% 100%"};
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
    margin: 0px -8px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: ${(props) => props.theme.thumbHeight};
    width: ${(props) => props.theme.thumbWidth};
    border-radius: 25px;
    background: ${(props) =>
      props.disabled ? props.theme.disabledThumbBackgroundColor : props.theme.thumbBackgroundColor};
    &:active {
      ${(props) => {
        if (!props.disabled) {
          return `
          background: ${props.theme.activeThumbBackgroundColor};
            transform: scale(1.16667);`;
        }
      }}
    }
    &:hover {
      ${(props) => {
        if (!props.disabled) {
          return `height: ${props.theme.hoverThumbHeight};
          width: ${props.theme.hoverThumbWidth};
          transform: scale(1.16667);
          transform-origin: center center;
          background: ${props.theme.hoverThumbBackgroundColor};`;
        }
      }}
    }
  }
  &::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: ${(props) => props.theme.thumbHeight};
    width: ${(props) => props.theme.thumbWidth};
    border-radius: 25px;
    background: ${(props) =>
      props.disabled ? props.theme.disabledThumbBackgroundColor : props.theme.thumbBackgroundColor};
    &:active {
      background: ${(props) => props.theme.activeThumbBackgroundColor};
      transform: scale(1.16667);
    }
    &:hover {
      ${(props) => {
        if (!props.disabled) {
          return `height: ${props.theme.hoverThumbHeight};
          width: ${props.theme.hoverThumbWidth};
          transform: scale(1.16667);
          transform-origin: center center;
          background: ${props.theme.hoverThumbBackgroundColor};`;
        }
      }}
    }
  }
  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      outline: ${(props) => (props.disabled ? props.theme.disabledFocusColor : props.theme.focusColor)} auto 1px;
      outline-offset: 2px;
    }
    &::-moz-range-thumb {
      outline: ${(props) => (props.disabled ? props.theme.disabledFocusColor : props.theme.focusColor)} auto 1px;
      outline-offset: 2px;
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`;

const LimitLabelContainer = styled.span<{
  disabled: SliderPropsType["disabled"];
}>`
  color: ${(props) => (props.disabled ? props.theme.disabledLimitValuesFontColor : props.theme.limitValuesFontColor)};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.limitValuesFontSize};
  font-style: ${(props) => props.theme.limitValuesFontStyle};
  font-weight: ${(props) => props.theme.limitValuesFontWeight};
  letter-spacing: ${(props) => props.theme.limitValuesFontLetterSpacing};
  white-space: nowrap;
`;

const MinLabelContainer = styled(LimitLabelContainer)`
  margin-right: ${(props) => props.theme.floorLabelMarginRight};
`;

const MaxLabelContainer = styled(LimitLabelContainer)<{ step: number }>`
  margin-left: ${(props) => (props.step === 1 ? props.theme.ceilLabelMarginLeft : "1.25rem")};
`;

const SliderInputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -2px;
  padding-top: 1px;
  z-index: 0;
`;

const MarksContainer = styled.div<{ isFirefox: boolean }>`
  ${(props) => (props.isFirefox ? getFireFoxStyles() : getChromeStyles())}
  position: absolute;
  pointer-events: none;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TickMark = styled.span<{
  stepPosition: number;
  disabled: SliderPropsType["disabled"];
  stepValue: SliderPropsType["value"];
}>`
  position: absolute;
  background: ${(props) =>
    props.disabled ? props.theme.disabledTickBackgroundColor : props.theme.tickBackgroundColor};
  height: ${(props) => props.theme.tickHeight};
  width: ${(props) => props.theme.tickWidth};
  border-radius: 18px;
  left: ${(props) => `calc(${props.stepPosition} * 100%)`};
  z-index: ${(props) => `${props.stepPosition <= props.stepValue ? "-1" : "0"}`};
`;

const StyledTextInput = styled.div`
  margin-left: ${(props) => props.theme.inputMarginLeft};
  max-width: 70px;
`;

export default DxcSlider;
