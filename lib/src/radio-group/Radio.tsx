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
  readonly,
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
            error={error}
            disabled={disabled}
            readonly={readonly}
            onClick={onClick}
            onFocus={onFocus}
            role="radio"
            aria-checked={checked}
            aria-disabled={option.disabled}
            aria-labelledby={radioLabelId}
            tabIndex={disabled ? -1 : focused ? 0 : -1}
            ref={ref}
          >
            {checked && <Dot disabled={disabled} readonly={readonly} error={error} />}
          </RadioInput>
        </RadioInputContainer>
        <Label
          id={radioLabelId}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          onClick={() => {
            ref?.current?.focus();
            onClick();
          }}
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
  error?: string;
  disabled?: boolean;
  readonly: boolean;
};
const RadioInput = styled.div<RadioInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid
    ${(props) => {
      if (props.disabled) return props.theme.disabledRadioInputColor;
      else if (props.error) return props.theme.errorRadioInputColor;
      else if (props.readonly) return props.theme.readonlyRadioInputColor;
      else return props.theme.radioInputColor;
    }};
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
          border-color: ${
            props.error
              ? props.theme.hoverErrorRadioInputColor
              : props.readonly
              ? props.theme.hoverReadonlyRadioInputColor
              : props.theme.hoverRadioInputColor
          };
          & > span {
            background-color: ${
              props.error
                ? props.theme.hoverErrorRadioInputColor
                : props.readonly
                ? props.theme.hoverReadonlyRadioInputColor
                : props.theme.hoverRadioInputColor
            };
          }
        }
        &:active {
          cursor: pointer;
          border-color: ${
            props.error
              ? props.theme.activeErrorRadioInputColor
              : props.readonly
              ? props.theme.activeReadonlyRadioInputColor
              : props.theme.activeRadioInputColor
          };
          & > span {
            background-color: ${
              props.error
                ? props.theme.activeErrorRadioInputColor
                : props.readonly
                ? props.theme.activeReadonlyRadioInputColor
                : props.theme.activeRadioInputColor
            };
          }
        }
      `
      : `
        cursor: not-allowed;
        pointer-events: none;
        :focus-visible {
          outline: none;
        }
      `}
`;

type DotProps = {
  error?: string;
  disabled?: boolean;
  readonly: boolean;
};
const Dot = styled.span<DotProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.disabled) return props.theme.disabledRadioInputColor;
    else if (props.error) return props.theme.errorRadioInputColor;
    else if (props.readonly) return props.theme.readonlyRadioInputColor;
    else return props.theme.radioInputColor;
  }};
`;

type LabelProps = {
  disabled?: boolean;
};
const Label = styled.span<LabelProps>`
  margin-left: ${(props) => props.theme.radioInputLabelMargin};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.radioInputLabelFontSize};
  font-style: ${(props) => props.theme.radioInputLabelFontStyle};
  font-weight: ${(props) => props.theme.radioInputLabelFontWeight};
  line-height: ${(props) => props.theme.radioInputLabelLineHeight};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledRadioInputLabelFontColor}; pointer-events: none;`
      : "cursor: pointer;"}
`;

export default React.memo(DxcRadio);
