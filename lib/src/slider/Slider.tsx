import React, { useState, useMemo, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";
import SliderPropsType, { Margin, Space, RefType } from "./types";
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
    const [innerValue, setInnerValue] = useState(defaultValue ?? 0);
    const [dragging, setDragging] = useState(false);
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

    const tickMarks = useMemo(() => {
      const ticks = [];
      const numberOfMarks = Math.floor(maxValue / step - minValue / step);
      let index = 0;
      const range = maxValue - minValue;
      if (marks) {
        while (index <= numberOfMarks) {
          ticks.push(
            <TickMark
              disabled={disabled}
              stepPosition={(step * index) / range}
              backgroundType={backgroundType}
              stepValue={(value ?? innerValue) / maxValue}
            ></TickMark>
          );

          index++;
        }
        return ticks;
      } else {
        return null;
      }
    }, [minValue, maxValue, step, value, innerValue]);

    const handleSliderChange = (event) => {
      const valueToCheck = event.target.value;
      (valueToCheck !== value || valueToCheck !== innerValue) && setInnerValue(valueToCheck);
      onChange?.(valueToCheck);
    };

    const handleSliderDragging = () => {
      setDragging(true);
    };

    const handleSliderOnChangeCommited = (event) => {
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

    const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;

    return (
      <ThemeProvider theme={colorsTheme.slider}>
        <Container margin={margin} size={size} ref={ref}>
          <Label id={labelId} disabled={disabled} backgroundType={backgroundType}>
            {label}
          </Label>
          <HelperText disabled={disabled} backgroundType={backgroundType}>
            {helperText}
          </HelperText>
          <SliderContainer>
            {showLimitsValues && (
              <MinLabelContainer backgroundType={backgroundType} disabled={disabled}>
                {minLabel}
              </MinLabelContainer>
            )}
            <SliderInputContainer>
              <SliderInput
                role="slider"
                type="range"
                value={value != null && value >= 0 ? value : innerValue}
                min={minValue}
                max={maxValue}
                step={step}
                marks={marks}
                disabled={disabled}
                aria-labelledby={labelId}
                aria-orientation="horizontal"
                aria-valuemax={maxValue}
                aria-valuemin={minValue}
                aria-valuenow={value != null && value >= 0 ? value : innerValue}
                onChange={handleSliderChange}
                onMouseUp={handleSliderOnChangeCommited}
                onMouseDown={handleSliderDragging}
                backgroundType={backgroundType}
              />
              {marks && <MarksContainer isFirefox={isFirefox}>{tickMarks}</MarksContainer>}
            </SliderInputContainer>
            {showLimitsValues && (
              <MaxLabelContainer backgroundType={backgroundType} disabled={disabled} step={step}>
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

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const getChromeStyles = () => {
  return `
  width: 100%;
  margin-right: 4px;`;
};

const getFireFoxStyles = () => {
  return `
  width: calc(100% - 16px);
  margin-right: 3px;`;
};

type ContainerPropsType = { margin: Margin | Space; size: "medium" | "large" | "fillParent" };

const Container = styled.div<ContainerPropsType>`
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

type LabelPropsType = { disabled: boolean; backgroundType: "dark" | "light" };

const Label = styled.label<LabelPropsType>`
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

const HelperText = styled.span<LabelPropsType>`
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

type SliderInputPropsType = {
  disabled: boolean;
  backgroundType: "dark" | "light";
  value: number;
  min: number;
  max: number;
  marks: boolean;
};

const SliderInput = styled.input<SliderInputPropsType>`
  width: 100%;
  min-width: 240px;
  height: ${(props) => props.theme.trackLineThickness};
  display: inline-block;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledTotalLineColorOnDark + "61"
        : props.theme.disabledTotalLineColor + "61"
      : props.backgroundType === "dark"
      ? props.theme.totalLineColorOnDark + "61"
      : props.theme.totalLineColor};
  background-image: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? `linear-gradient(${props.theme.disabledTrackLineColorOnDark}, ${props.theme.disabledTrackLineColorOnDark})`
        : `linear-gradient(${props.theme.disabledTrackLineColor}, ${props.theme.disabledTrackLineColor})`
      : props.backgroundType === "dark"
      ? `linear-gradient(${props.theme.trackLineColorOnDark}, ${props.theme.trackLineColorOnDark})`
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
      props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledThumbBackgroundColorOnDark
          : props.theme.disabledThumbBackgroundColor
        : props.backgroundType === "dark"
        ? props.theme.thumbBackgroundColorOnDark
        : props.theme.thumbBackgroundColor};
    &:active {
      ${(props) => {
        if (!props.disabled) {
          return `
          background: ${
            props.backgroundType === "dark"
              ? props.theme.activeThumbBackgroundColorOnDark
              : props.theme.activeThumbBackgroundColor
          };
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
          background: ${
            props.backgroundType === "dark"
              ? props.theme.hoverThumbBackgroundColorOnDark
              : props.theme.hoverThumbBackgroundColor
          };`;
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
      props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledThumbBackgroundColorOnDark
          : props.theme.disabledThumbBackgroundColor
        : props.backgroundType === "dark"
        ? props.theme.thumbBackgroundColorOnDark
        : props.theme.thumbBackgroundColor};
    &:active {
      background: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.activeThumbBackgroundColorOnDark
          : props.theme.activeThumbBackgroundColor};
      transform: scale(1.16667);
    }
    &:hover {
      ${(props) => {
        if (!props.disabled) {
          return `height: ${props.theme.hoverThumbHeight};
          width: ${props.theme.hoverThumbWidth};
          transform: scale(1.16667);
          transform-origin: center center;
          background: ${
            props.backgroundType === "dark"
              ? props.theme.hoverThumbBackgroundColorOnDark
              : props.theme.hoverThumbBackgroundColor
          };`;
        }
      }}
    }
  }
  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      outline: ${(props) =>
          props.disabled
            ? props.backgroundType === "dark"
              ? props.theme.disabledFocusColorOnDark
              : props.theme.disabledFocusColor
            : props.backgroundType === "dark"
            ? props.theme.focusColorOnDark
            : props.theme.focusColor}
        auto 1px;
      outline-offset: 2px;
    }
    &::-moz-range-thumb {
      outline: ${(props) =>
          props.disabled
            ? props.backgroundType === "dark"
              ? props.theme.disabledFocusColorOnDark
              : props.theme.disabledFocusColor
            : props.backgroundType === "dark"
            ? props.theme.focusColorOnDark
            : props.theme.focusColor}
        auto 1px;
      outline-offset: 2px;
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`;

const LimitLabelContainer = styled.span<LabelPropsType>`
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

type MarksContainerPropsType = { isFirefox: boolean };

const MarksContainer = styled.div<MarksContainerPropsType>`
  ${(props) => (props.isFirefox ? getFireFoxStyles() : getChromeStyles())}
  position: absolute;
  pointer-events: none;
  height: 100%;
  display: flex;
  align-items: center;
`;

type TickMarkPropsType = {
  stepPosition: number;
  disabled: boolean;
  backgroundType: "dark" | "light";
  stepValue: number;
};

const TickMark = styled.span<TickMarkPropsType>`
  position: absolute;
  background: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledTickBackgroundColorOnDark
        : props.theme.disabledTickBackgroundColor
      : props.backgroundType === "dark"
      ? props.theme.tickBackgroundColorOnDark
      : props.theme.tickBackgroundColor};
  height: ${(props) => props.theme.tickHeight};
  width: ${(props) => props.theme.tickWidth};
  border-radius: 18px;
  left: ${(props) => `calc(${props.stepPosition} * 100%)`};
  ${(props) => (!props.disabled ? `z-index: ${props.stepPosition <= props.stepValue ? "-1" : "0"}` : ``)};
`;

const StyledTextInput = styled.div`
  margin-left: ${(props) => props.theme.inputMarginLeft};
  max-width: 70px;
`;

export default DxcSlider;
