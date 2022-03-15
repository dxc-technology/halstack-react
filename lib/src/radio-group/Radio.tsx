import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { RadioProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";

const DxcRadio = ({
  option,
  currentValue,
  onClick,
  onFocus,
  error,
  disabled,
  focused,
}: RadioProps): JSX.Element => {
  const [radioLabelId] = useState(`radio-${uuidv4()}`);
  const ref = useRef<HTMLDivElement>(null);
  const colorsTheme = useTheme();

  const checked = option.value === currentValue;

  const [firstUpdate, setFirstUpdate] = useState(true);
  useLayoutEffect(() => {
    // Don't apply in the first render
    if (firstUpdate) {
      setFirstUpdate(false);
      return;
    }
    focused && ref?.current?.focus();
  }, [focused]);

  return (
    <ThemeProvider theme={colorsTheme.radioGroup}>
      <RadioContainer>
        <RadioInputContainer>
          <RadioInput
            disabled={disabled}
            error={error}
            onClick={onClick}
            onFocus={onFocus}
            role="radio"
            aria-checked={checked}
            aria-labelledby={radioLabelId}
            tabIndex={disabled ? -1 : focused || checked ? 0 : -1}
            ref={ref}
          >
            {checked && <Dot error={error} />}
          </RadioInput>
        </RadioInputContainer>
        <Label
          id={radioLabelId}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          onClick={onClick}
          disabled={disabled}
        >
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

const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

type RadioInputProps = {
  disabled?: boolean;
  error?: string;
};
const RadioInput = styled.div<RadioInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid
    ${(props) =>
      props.disabled
        ? props.theme.disabledRadioInputColor
        : props.error
        ? props.theme.errorRadioInputColor
        : props.theme.radioInputColor};
  border-radius: 50%;
  box-shadow: 0 0 0 2px transparent;

  ${(props) =>
    !props.disabled
      ? `
        &:focus {
          outline: 2px solid ${props.theme.focusBorderColor};
          outline-offset: 1px;
        }
        &:focus-visible {
          outline: 2px solid ${props.theme.focusBorderColor};
          outline-offset: 1px;
        }
        &:hover {
          cursor: pointer;
          border-color: ${props.error ? props.theme.hoverErrorRadioInputColor : props.theme.hoverInputColor};
          & > span {
            background-color: ${props.error ? props.theme.hoverErrorRadioInputColor : props.theme.hoverInputColor};
          }
        }
        &:active {
          cursor: pointer;
          border-color: ${props.error ? props.theme.activeErrorInputColor : props.theme.activeInputColor};
          & > span {
            background-color: ${props.error ? props.theme.activeErrorInputColor : props.theme.activeInputColor};
          }
        }
      `
      : `
        & > span {
          background-color: ${props.theme.disabledRadioInputColor};
        }
        cursor: not-allowed;
        pointer-events: none;
        :focus-visible {
          outline: none;
        }
      `}
`;

type DotProps = {
  error?: string;
};
const Dot = styled.span<DotProps>`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.error ? props.theme.errorRadioInputColor : props.theme.radioInputColor)};
  border-radius: 50%;
`;

type LabelProps = {
  disabled?: boolean;
};
const Label = styled.span<LabelProps>`
  margin-left: 0.5rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.radioInputLabelFontSize};
  font-style: ${(props) => props.theme.radioInputLabelFontStyle};
  font-weight: ${(props) => props.theme.radioInputLabelFontWeight};
  line-height: ${(props) => props.theme.radioInputLabelLineHeight};
  ${(props) => props.disabled ? `color: ${props.theme.disabledRadioInputLabelFontColor}; pointer-events: none;` : "cursor: pointer;"}
`;

export default React.memo(DxcRadio);
