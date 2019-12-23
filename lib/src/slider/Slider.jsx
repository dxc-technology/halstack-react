import React, { useState } from "react";
import Slider from "@material-ui/lab/Slider";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import DxcInput from "../input-text/InputText";
import colors from "../common/variables.js";

const DxcSlider = ({
  minValue = 0,
  maxValue = 100,
  step = 1,
  value,
  showLimitsValues,
  showInput,
  name,
  onChange,
  onDragEnd,
  disabled,
  theme = "light",
  marks
}) => {
  const [innerValue, setInnerValue] = useState(0);

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
  const handlerInputChange = event => {
    if (value == null) {
      setInnerValue(event > maxValue ? maxValue : event);
    }
    if (typeof onChange === "function") {
      onChange(event > maxValue ? maxValue : event);
    }
  };

  return (
    <SliderContainer theme={theme}>
      {showLimitsValues && (
        <MinLabelContainer theme={theme} disabled={disabled}>
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
        <MaxLabelContainer theme={theme} disabled={disabled} step={step}>
          {maxValue}
        </MaxLabelContainer>
      )}
      {showInput && (
        <StyledTextInput theme={theme}>
          <DxcInput
            name={name}
            theme={theme}
            value={(value != null && value >= 0 && value) || innerValue}
            disabled={disabled}
            onChange={handlerInputChange}
          />
        </StyledTextInput>
      )}
    </SliderContainer>
  );
};
DxcSlider.propTypes = {
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
  marks: PropTypes.bool
};

const StyledTextInput = styled.div`
  .MuiTextField-root {
    margin-left: 15px;
    font-size: 16px;
    width: 50px;
    .MuiInputBase-input {
      color: ${props => (props.theme === "light" && colors.black) || colors.white};
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 15px 15px 15px;
  min-width: 185px;
  max-width: 100%;

  .MultiSlider-root {
    display: flex;
    align-items: center;
  }
  .MuiSlider-container {
    padding: 30px 24px;
  }

  .MuiSlider-root.Mui-disabled {
    opacity: ${props => (props.theme === "light" && 1) || 0.3};
    color: ${colors.lightGrey};
    cursor: not-allowed;
  }

  .Mui-disabled {
    & .MuiSlider-thumb {
      height: 14px;
      width: 14px;
      background-color: ${colors.lightGrey};
      top: 35%;
    }
    & .MuiSlider-track {
      background-color: ${colors.lightGrey};
    }
    & > .MuiSlider-mark.MuiSlider-markActive {
      background-color: ${colors.lightGrey} !important;
    }
    & > .MuiSlider-mark {
      background-color: ${colors.lightGrey};
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
    background-color: ${props => (props.theme === "light" && colors.black) || colors.lightGrey};
    top: 45%;
    :hover,
    &.Mui-focusVisible {
      box-shadow: none;
    }
    &.MuiSlider-active {
      box-shadow: none;
    }
    :hover:not(:active) {
      box-shadow: ${props => (props.theme === "light" && "0px 0px 0px 18px #66666633") || "0px 0px 0px 18px #d9d9d933"};
    }
    :active {
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      background-color: ${props => (props.theme === "light" && colors.black) || colors.yellow};
      top: 45%;
      transform: scale(1.25);
      transform-origin: center;
    }
  }
  .MuiSlider-track {
    background-color: ${props => (props.theme === "light" && colors.black) || colors.lightGrey};
    height: 2px;
    top: 50%;
  }

  .MuiSlider-track.MuiSlider-trackAfter {
    background-color: ${colors.black};
  }
  .MuiSlider-rail {
    background-color: ${props => (props.theme === "light" && colors.lightGrey) || colors.lightGrey};
    top: 50%;
    opacity: 0.54;
  }
  .MuiSlider-mark.MuiSlider-markActive {
    background-color: ${props => (props.theme === "light" && colors.black) || colors.lightGrey};
  }
  .MuiSlider-mark {
    background-color: ${props => (props.theme === "light" && colors.black) || colors.lightGrey};
    width: 6px;
    height: 6px;
    border-radius: 18px;
    top: ${props => (props.theme === "light" && "40%") || "44%"};
  }
`;

const MinLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: ${props =>
    props.theme === "dark" && props.disabled
      ? colors.darkGrey
      : props.theme === "dark"
      ? colors.white
      : props.theme === "light" && props.disabled
      ? colors.lightGrey
      : colors.black};
  font-size: 16px;
  margin-right: 15px;
`;

const MaxLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: ${props =>
    props.theme === "dark" && props.disabled
      ? colors.darkGrey
      : props.theme === "dark"
      ? colors.white
      : props.theme === "light" && props.disabled
      ? colors.lightGrey
      : colors.black};
  font-size: 16px;
  margin-left: ${props => (props.step === 1 ? "15px" : "20px")};
`;

export default DxcSlider;
