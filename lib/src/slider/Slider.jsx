import React, { useState, useContext } from "react";
import Slider from "@material-ui/lab/Slider";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import DxcInput from "../input-text/InputText";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcSlider = ({
  minValue = 0,
  maxValue = 100,
  step = 1,
  value,
  showLimitsValues = false,
  showInput = false,
  name,
  onChange,
  onDragEnd,
  disabled = false,
  theme = "light",
  marks = false,
  margin,
  size = "fillParent",
}) => {
  const [innerValue, setInnerValue] = useState(0);
  const colorsTheme = useContext(ThemeContext) || colors;

  const handlerSliderChange = (event, newValue) => {
    if (value == null) {
      const valueToCheck = value !== undefined ? value : innerValue;
      if (valueToCheck !== newValue) {
        setInnerValue(newValue);
      }
    }
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  };
  const handlerInputChange = (event) => {
    if (value == null) {
      setInnerValue(event > maxValue ? maxValue : event);
    }
    if (typeof onChange === "function") {
      onChange(event > maxValue ? maxValue : event);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <SliderContainer brightness={theme} margin={margin} size={size}>
        {showLimitsValues && (
          <MinLabelContainer brightness={theme} disabled={disabled}>
            {minValue}
          </MinLabelContainer>
        )}
        <Slider
          value={(value != null && value >= 0 && value) || innerValue}
          min={minValue}
          max={maxValue}
          onChange={handlerSliderChange}
          onChangeCommitted={onDragEnd && ((event, selectedValue) => onDragEnd(selectedValue))}
          step={step}
          marks={marks || []}
          disabled={disabled}
        />
        {showLimitsValues && (
          <MaxLabelContainer brightness={theme} disabled={disabled} step={step}>
            {maxValue}
          </MaxLabelContainer>
        )}
        {showInput && (
          <StyledTextInput brightness={theme}>
            <DxcInput
              name={name}
              brightness={theme}
              value={(value != null && value >= 0 && value) || innerValue}
              disabled={disabled}
              onChange={handlerInputChange}
              size="small"
              margin={{ left: "medium" }}
            />
          </StyledTextInput>
        )}
      </SliderContainer>
    </ThemeProvider>
  );
};

const sizes = {
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

DxcSlider.propTypes = {
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
  theme: PropTypes.oneOf(["dark", "light"]),
  marks: PropTypes.bool,
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

const StyledTextInput = styled.div`
  .MuiTextField-root {
    font-size: 16px;
    .MuiInputBase-input {
      color: ${(props) => (props.brightness === "light" && props.theme.black) || props.theme.white};
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;

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

  .MultiSlider-root {
    display: flex;
    align-items: center;
  }
  .MuiSlider-container {
    padding: 30px 24px;
  }

  .MuiSlider-root.Mui-disabled {
    opacity: ${(props) => (props.brightness === "light" && 1) || 0.3};
    color: ${(props) => props.theme.lightGrey};
    cursor: not-allowed;
  }

  .Mui-disabled {
    & .MuiSlider-thumb {
      height: 14px;
      width: 14px;
      background-color: ${(props) => props.theme.lightGrey};
      top: 35%;
    }
    & .MuiSlider-track {
      background-color: ${(props) => props.theme.lightGrey};
    }
    & > .MuiSlider-mark.MuiSlider-markActive {
      background-color: ${(props) => props.theme.lightGrey} !important;
    }
    & > .MuiSlider-mark {
      background-color: ${(props) => props.theme.lightGrey};
      width: 6px;
      height: 6px;
      border-radius: 18px;
    }
    & .MuiSlider-rail {
      opacity: 1;
    }
  }
  .MuiSlider-thumb {
    height: 14px;
    width: 14px;
    background-color: ${(props) => (props.brightness === "light" && props.theme.black) || props.theme.lightGrey};
    top: 45%;
    :hover,
    &.Mui-focusVisible {
      box-shadow: none;
    }
    &.MuiSlider-active {
      box-shadow: none;
    }
    :hover:not(:active) {
      box-shadow: ${(props) =>
        (props.brightness === "light" && "0px 0px 0px 18px #66666633") || "0px 0px 0px 18px #d9d9d933"};
    }
    :active {
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      background-color: ${(props) => (props.brightness === "light" && props.theme.black) || props.theme.yellow};
      top: 45%;
      transform: scale(1.25);
      transform-origin: center;
    }
  }
  .MuiSlider-track {
    background-color: ${(props) => (props.brightness === "light" && props.theme.black) || props.theme.lightGrey};
    height: 2px;
    top: 50%;
  }

  .MuiSlider-track.MuiSlider-trackAfter {
    background-color: ${(props) => props.theme.black};
  }
  .MuiSlider-rail {
    background-color: ${(props) => (props.brightness === "light" && props.theme.lightGrey) || props.theme.lightGrey};
    top: 50%;
    opacity: 0.54;
  }
  .MuiSlider-mark.MuiSlider-markActive {
    background-color: ${(props) => (props.brightness === "light" && props.theme.black) || props.theme.lightGrey};
  }
  .MuiSlider-mark {
    background-color: ${(props) => (props.brightness === "light" && props.theme.black) || props.theme.lightGrey};
    width: 6px;
    height: 6px;
    border-radius: 18px;
    top: ${(props) => (props.brightness === "light" && "40%") || "44%"};
  }
`;

const MinLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: ${(props) =>
    props.brightness === "dark" && props.disabled
      ? props.theme.darkGrey
      : props.brightness === "dark"
      ? props.theme.white
      : props.brightness === "light" && props.disabled
      ? props.theme.lightGrey
      : props.theme.black};
  font-size: 16px;
  margin-right: 15px;
`;

const MaxLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: ${(props) =>
    props.brightness === "dark" && props.disabled
      ? props.theme.darkGrey
      : props.brightness === "dark"
      ? props.theme.white
      : props.brightness === "light" && props.disabled
      ? props.theme.lightGrey
      : props.theme.black};
  font-size: 16px;
  margin-left: ${(props) => (props.step === 1 ? "15px" : "20px")};
`;

export default DxcSlider;
