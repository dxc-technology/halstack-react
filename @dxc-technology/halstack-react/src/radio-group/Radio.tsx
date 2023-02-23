import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { RadioProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";

const DxcRadio = ({
  label,
  checked,
  onClick,
  error,
  disabled,
  focused,
  readonly,
  tabIndex,
}: RadioProps): JSX.Element => {
  const [radioLabelId] = useState(`radio-${uuidv4()}`);
  const ref = useRef<HTMLSpanElement>(null);
  const colorsTheme = useTheme();

  const handleOnClick = () => {
    onClick();
    document.activeElement !== ref?.current && ref?.current?.focus();
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
    <ThemeProvider theme={colorsTheme["radioGroup"]}>
      <RadioMainContainer>
        <RadioContainer
          error={error}
          disabled={disabled}
          readonly={readonly}
          onClick={disabled ? undefined : handleOnClick}
        >
          <RadioInputContainer>
            <RadioInput
              error={error}
              disabled={disabled}
              readonly={readonly}
              role="radio"
              aria-checked={checked}
              aria-disabled={disabled}
              aria-labelledby={radioLabelId}
              tabIndex={disabled ? -1 : focused ? tabIndex : -1}
              ref={ref}
            >
              {checked && <Dot disabled={disabled} readonly={readonly} error={error} />}
            </RadioInput>
          </RadioInputContainer>
          <Label id={radioLabelId} disabled={disabled}>
            {label}
          </Label>
        </RadioContainer>
      </RadioMainContainer>
    </ThemeProvider>
  );
};

type CommonStylingProps = {
  error?: string;
  disabled: boolean;
  readonly: boolean;
};
const getRadioInputStateColor = (props: CommonStylingProps & { theme: any }, state: "enabled" | "hover" | "active") => {
  switch (state) {
    case "enabled":
      return props.disabled
        ? props.theme.disabledRadioInputColor
        : props.error
        ? props.theme.errorRadioInputColor
        : props.readonly
        ? props.theme.readonlyRadioInputColor
        : props.theme.radioInputColor;
    case "hover":
      return props.error
        ? props.theme.hoverErrorRadioInputColor
        : props.readonly
        ? props.theme.hoverReadonlyRadioInputColor
        : props.theme.hoverRadioInputColor;
    case "active":
      return props.error
        ? props.theme.activeErrorRadioInputColor
        : props.readonly
        ? props.theme.activeReadonlyRadioInputColor
        : props.theme.activeRadioInputColor;
  }
};

const RadioMainContainer = styled.div`
  display: flex;
`;

const RadioInputContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

const RadioInput = styled.span<CommonStylingProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => getRadioInputStateColor(props, "enabled")};
  border-radius: 50%;

  &:focus {
    outline: 2px solid ${(props) => props.theme.focusBorderColor};
    outline-offset: 1px;
  }
  ${(props) => props.disabled && "pointer-events: none;"}
`;

const Dot = styled.span<CommonStylingProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) => getRadioInputStateColor(props, "enabled")};
`;

type LabelProps = {
  disabled: boolean;
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
      ? `color: ${props.theme.disabledRadioInputLabelFontColor};`
      : `color: ${props.theme.radioInputLabelFontColor}`}
`;

const RadioContainer = styled.span<CommonStylingProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : props.readonly ? "default" : "pointer")};

  &:hover {
    ${RadioInput} {
      border-color: ${(props) => !props.disabled && getRadioInputStateColor(props, "hover")};
    }
    ${Dot} {
      background-color: ${(props) => !props.disabled && getRadioInputStateColor(props, "hover")};
    }
  }
  &:active {
    ${RadioInput} {
      border-color: ${(props) => !props.disabled && getRadioInputStateColor(props, "active")};
    }
    ${Dot} {
      background-color: ${(props) => !props.disabled && getRadioInputStateColor(props, "active")};
    }
  }
`;

export default React.memo(DxcRadio);
