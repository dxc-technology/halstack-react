import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { RadioProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";

const DxcRadio = ({
  option,
  currentValue,
  onClick,
  error,
  disabled,
  focused,
  readonly,
  tabIndex,
}: RadioProps): JSX.Element => {
  const [radioLabelId] = useState(`radio-${uuidv4()}`);
  const ref = useRef<HTMLDivElement>(null);
  const colorsTheme = useTheme();

  const handleOnClick = () => {
    onClick();
    focused && document.activeElement !== ref?.current && ref?.current?.focus();
  };

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
      <RadioMainContainer>
        <RadioContainer
          error={error}
          disabled={disabled}
          readonly={readonly}
          onMouseDown={(event) => {
            // Prevents div's onClick from stealing the radio input's focus
            event.preventDefault();
          }}
          onClick={handleOnClick}
        >
          <RadioInputContainer>
            <RadioInput
              error={error}
              disabled={disabled}
              readonly={readonly}
              role="radio"
              aria-checked={option.value === currentValue}
              aria-disabled={option.disabled ?? false}
              aria-labelledby={radioLabelId}
              tabIndex={disabled ? -1 : focused ? tabIndex : -1}
              ref={ref}
            >
              {option.value === currentValue && <Dot disabled={disabled} readonly={readonly} error={error} />}
            </RadioInput>
          </RadioInputContainer>
          <Label id={radioLabelId} disabled={disabled}>
            {option.label}
          </Label>
        </RadioContainer>
      </RadioMainContainer>
    </ThemeProvider>
  );
};

const RadioMainContainer = styled.div`
  display: flex;
`;

type RadioContainerProps = {
  error?: string;
  disabled?: boolean;
  readonly: boolean;
};
const RadioContainer = styled.span<RadioContainerProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : props.readonly ? "default" : "pointer")};

  ${(props) =>
    !props.disabled
      ? `
      &:hover {
        & > div > div { 
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
        };
      }
      &:active {
        & > div > div {
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
      }
    `
      : "pointer-events: none;"}
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
      ? `&:focus {
          outline: 2px solid ${props.theme.focusBorderColor};
          outline-offset: 1px;
        }
        &:focus-visible {
          outline: 2px solid ${props.theme.focusBorderColor};
          outline-offset: 1px;
        }
      `
      : `
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
  ${(props) => props.disabled && `color: ${props.theme.disabledRadioInputLabelFontColor}; pointer-events: none;`}
`;

export default React.memo(DxcRadio);
