import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { RadioProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";

const DxcRadio = ({ option, value, onChange, error }: RadioProps): JSX.Element => {
  const [radioId] = useState(`radio-${uuidv4()}`);
  const radioRef = useRef(document.createElement("div"));
  const colorsTheme = useTheme();

  const handleLabelOnClick = () => {
    onChange(option.value);
    radioRef?.current.focus();
  };

  return (
    <ThemeProvider theme={colorsTheme.radioGroup}>
      <RadioContainer>
        <Radio
          id={radioId}
          disabled={option.disabled}
          error={error}
          onClick={() => {
            onChange(option.value);
          }}
          role="radio"
          aria-checked={option.value === value}
          tabIndex={0}
          ref={radioRef}
        >
          {option.value === value && <Point error={error} />}
        </Radio>
        <Label onClick={handleLabelOnClick} htmlFor={radioId} disabled={option.disabled}>
          {option.label}
        </Label>
      </RadioContainer>
    </ThemeProvider>
  );
};

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

type RadioElementProps = {
  disabled?: boolean;
  error?: string;
};
const Radio = styled.div<RadioElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => (props.error ? props.theme.errorRadioInputColor : props.theme.radioInputColor)};
  border-radius: 50%;
  box-shadow: 0 0 0 2px transparent;

  &:focus {
    outline: 2px solid ${(props) => props.theme.focusBorderColor};
    outline-offset: 1px;
  }
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.focusBorderColor};
    outline-offset: 1px;
  }
  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.hoverInputColor};

    & > span {
      background-color: ${(props) => props.theme.hoverInputColor};
    }
  }
  &:active {
    cursor: pointer;
    border-color: ${(props) => props.theme.activeInputColor};

    & > span {
      background-color: ${(props) => props.theme.activeInputColor};
    }
  }
`;

type PointProps = {
  error?: string;
};
const Point = styled.span<PointProps>`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.error ? props.theme.errorRadioInputColor : props.theme.radioInputColor)};
  border-radius: 50%;
`;

type LabelProps = {
  disabled?: boolean;
};
const Label = styled.label<LabelProps>`
  margin-left: 0.5rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.radioInputLabelFontSize};
  font-style: ${(props) => props.theme.radioInputLabelFontStyle};
  font-weight: ${(props) => props.theme.radioInputLabelFontWeight};
  line-height: ${(props) => props.theme.radioInputLabelLineHeight};
`;

export default React.memo(DxcRadio);
