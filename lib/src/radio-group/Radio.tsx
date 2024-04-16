import React, { useEffect, useId, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { RadioProps } from "./types";
import useTheme from "../useTheme";
import { AdvancedTheme } from "../common/variables";
import DxcFlex from "../flex/Flex";

const DxcRadio = ({
  label,
  checked,
  onClick,
  error,
  disabled,
  focused,
  readOnly,
  tabIndex,
}: RadioProps): JSX.Element => {
  const radioLabelId = `radio-${useId()}`;
  const ref = useRef<HTMLSpanElement>(null);
  const colorsTheme = useTheme();

  const handleOnClick = () => {
    onClick();
    if (document.activeElement !== ref?.current) {
      ref?.current?.focus();
    }
  };

  const [firstUpdate, setFirstUpdate] = useState(true);
  useEffect(() => {
    // Don't apply in the first render
    if (firstUpdate) {
      setFirstUpdate(false);
      return;
    }
    if (focused) {
      ref?.current?.focus();
    }
  }, [focused]);

  return (
    <ThemeProvider theme={colorsTheme.radioGroup}>
      <DxcFlex>
        <RadioContainer
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          onClick={disabled ? undefined : handleOnClick}
        >
          <RadioInputContainer>
            <RadioInput
              error={error}
              disabled={disabled}
              readOnly={readOnly}
              role="radio"
              aria-checked={checked}
              aria-disabled={disabled}
              aria-labelledby={radioLabelId}
              tabIndex={disabled ? -1 : focused ? tabIndex : -1}
              ref={ref}
            >
              {checked && <Dot disabled={disabled} readOnly={readOnly} error={error} />}
            </RadioInput>
          </RadioInputContainer>
          <Label id={radioLabelId} disabled={disabled}>
            {label}
          </Label>
        </RadioContainer>
      </DxcFlex>
    </ThemeProvider>
  );
};

type CommonStylingProps = {
  error: RadioProps["error"];
  disabled: RadioProps["disabled"];
  readOnly: RadioProps["readOnly"];
};
const getRadioInputStateColor = (
  props: CommonStylingProps & { theme: AdvancedTheme["radioGroup"] },
  state: "enabled" | "hover" | "active"
) => {
  switch (state) {
    case "hover":
      return props.error
        ? props.theme.hoverErrorRadioInputColor
        : props.readOnly
          ? props.theme.hoverReadOnlyRadioInputColor
          : props.theme.hoverRadioInputColor;
    case "active":
      return props.error
        ? props.theme.activeErrorRadioInputColor
        : props.readOnly
          ? props.theme.activeReadOnlyRadioInputColor
          : props.theme.activeRadioInputColor;
    case "enabled":
      return props.disabled
        ? props.theme.disabledRadioInputColor
        : props.error
          ? props.theme.errorRadioInputColor
          : props.readOnly
            ? props.theme.readOnlyRadioInputColor
            : props.theme.radioInputColor;
    default:
      return undefined;
  }
};

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

const Label = styled.span<{ disabled: RadioProps["disabled"] }>`
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : props.readOnly ? "default" : "pointer")};

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
