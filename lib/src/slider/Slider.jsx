import React from "react";
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
  required,
  theme = "light"
}) => {
  return (
    <SliderContainer theme={theme}>
      {showLimitsValues && <MinLabelContainer theme={theme}>{minValue}</MinLabelContainer>}
      <Slider
        value={value}
        min={minValue}
        max={maxValue}
        onChange={(event, value) => onChange(value)}
        onDragEnd={(event, value) => onDragEnd(value)}
        step={step}
        disabled={disabled}
        required={required}
      />
      {showLimitsValues && <MaxLabelContainer theme={theme}>{maxValue}</MaxLabelContainer>}
      {showInput && (
        <StyledTextInput theme={theme}>
          <TextField
            name={name}
            value={value}
            disabled={disabled}
            onChange={event => onChange(event.target.value > maxValue ? maxValue : event.target.value)}
          />
        </StyledTextInput>
      )}
    </SliderContainer>
  );
};
DxcSlider.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  showLimitsValues: PropTypes.bool.isRequired,
  showInput: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(["dark", "light"]).isRequired
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
  .MuiSlider-container {
    padding: 30px 24px;
  }
  .MuiSlider-thumb {
    height: 14px;
    width: 14px;
    background-color: ${props => (props.theme === "light" && "#000") || "#d9d9d9"};
    :hover,
    &.Mui-focused.Mui-focusVisible {
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
    }
  }
  .MuiSlider-track {
    background-color: ${props => (props.theme === "light" && "#000000") || "#d9d9d9"};
  }
  .MuiSlider-track.MuiSlider-trackAfter {
    background-color: "#000000";
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
