import React, { useState } from "react";
import Slider from "@material-ui/lab/Slider";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import PropTypes from "prop-types";

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
    const valueToCheck = value !== undefined ? value : innerValue;
    if (valueToCheck !== newValue) {
      setInnerValue(newValue);
      onChange(newValue);
    } 
  }
  const handlerInputChange = (event) => {
    setInnerValue(event.target.value > maxValue ? maxValue : event.target.value);
    onChange(event.target.value > maxValue ? maxValue : event.target.value)
  } 
  

  return (
    <SliderContainer theme={theme}>
      {showLimitsValues && <MinLabelContainer theme={theme}>{minValue}</MinLabelContainer>}
      <Slider
        value={value >= 0 || innerValue}
        min={minValue}
        max={maxValue}
        onChange={handlerSliderChange}
        onChangeCommitted={(event, value) => onDragEnd(value)}
        step={step}
        marks={marks || []}
        disabled={disabled}
      />
      {showLimitsValues && <MaxLabelContainer theme={theme}>{maxValue}</MaxLabelContainer>}
      {showInput && (
        <StyledTextInput theme={theme}>
          <TextField
            name={name}
            value={value >= 0 || innerValue}
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
  value: PropTypes.number,
  showLimitsValues: PropTypes.bool,
  showInput: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"])
};

const StyledTextInput = styled.div`
  .MuiTextField-root {
    margin-left: 15px;
    font-size: 16px;
    width: 50px;
    .MuiInputBase-input {
      color: ${props => (props.theme === "light" && "#000000") || "#ffffff"};
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 15px 15px 15px;

  .MultiSlider-root {
    display: flex;
    align-items: center;
  }
  .MuiSlider-container {
    padding: 30px 24px;
  }

  .Mui-disabled {
    & .MuiSlider-thumb {
      height: 14px;
      width: 14px;
      background-color: #d9d9d9;
      top: 38%;
    }
    & .MuiSlider-track {
      background-color: #d9d9d9;
    }
    & > .MuiSlider-mark.MuiSlider-markActive {
      background-color: #d9d9d9 !important;
    }
    & > .MuiSlider-mark {
      background-color: #d9d9d9;
      width: 4px;
      height: 4px;
      border-radius: 18px;
    }
  }
  .MuiSlider-thumb {
    height: 14px;
    width: 14px;
    background-color: ${props => (props.theme === "light" && "#000") || "#d9d9d9"};
    top: 45%;
    :hover,
    &.Mui-focusVisible {
      box-shadow: none;
    }

    :hover:not(:active) {
      box-shadow: ${props => (props.theme === "light" && "0px 0px 0px 18px #66666633") || "0px 0px 0px 18px #d9d9d933"};
    }
    :active {
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      background-color: ${props => (props.theme === "light" && "#000") || "#ffed00"};
      width: 18px;
      height: 18px;
      top: 32%;
    }
  }
  .MuiSlider-track {
    background-color: ${props => (props.theme === "light" && "#000000") || "#d9d9d9"};
    height: 1px;
    top: 52%;
  }

  .MuiSlider-track.MuiSlider-trackAfter {
    background-color: #000000;
  }
  .MuiSlider-rail {
    background-color: ${props => (props.theme === "light" && "#d9d9d9") || "#d9d9d9"};
    top: 50%;
  }
  .MuiSlider-mark.MuiSlider-markActive {
    background-color: #000000;
  }
  .MuiSlider-mark {
    background-color: #000000;
    width: 4px;
    height: 4px;
    border-radius: 18px;
  }
`;

const MinLabelContainer = styled.span`
  color: ${props => (props.theme === "light" && "#000000") || "#d9d9d9"};
  font-size: 16px;
  margin: 5px 15px 5px;
`;

const MaxLabelContainer = styled.span`
  color: ${props => (props.theme === "light" && "#000000") || "#d9d9d9"};
  font-size: 14px;
  margin: 0px 0px 5px 15px;
`;

export default DxcSlider;
