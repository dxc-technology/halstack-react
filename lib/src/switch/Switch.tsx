import React, { useState, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext from "../BackgroundColorContext";
import { SwitchPropsType, Space, Margin } from "./types";

const DxcSwitch = ({
  defaultChecked,
  checked,
  value,
  label = "",
  labelPosition = "before",
  name = "",
  disabled = false,
  optional = false,
  onChange,
  margin,
  size = "fitContent",
  tabIndex = 0,
}: SwitchPropsType): JSX.Element => {
  const [switchId] = useState(`switch-${uuidv4()}`);
  const labelId = `label-${switchId}`;
  const [innerChecked, setInnerChecked] = useState(defaultChecked ?? false);

  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();
  const backgroundType = useContext(BackgroundColorContext);
  const refTrack = useRef(null);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Enter":
      case " ": //Space
        event.preventDefault();
        refTrack.current.focus();
        const isChecked = !(checked ?? innerChecked);
        setInnerChecked(isChecked);
        if (typeof onChange === "function") {
          onChange(isChecked);
        }
        break;
    }
  };

  const handlerSwitchChange = (event) => {
    if (checked === undefined) {
      const isChecked = event.target.checked ?? !innerChecked;
      setInnerChecked(isChecked);
      if (typeof onChange === "function") {
        onChange(isChecked);
      }
    } else {
      if (typeof onChange === "function") {
        onChange(!checked);
      }
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.switch}>
      <SwitchContainer margin={margin} size={size} onKeyDown={handleOnKeyDown}>
        {labelPosition === "before" && label && (
          <LabelContainer
            id={labelId}
            labelPosition={labelPosition}
            onClick={!disabled ? handlerSwitchChange : undefined}
            disabled={disabled}
            backgroundType={backgroundType}
            label={label}
          >
            {label} {optional && <>{translatedLabels.formFields.optionalLabel}</>}
          </LabelContainer>
        )}
        <SwitchBase
          labelPosition={labelPosition}
          label={label}
          htmlFor={labelId}
          onClick={disabled === true ? () => {} : handlerSwitchChange}
        >
          <SwitchInput
            type="checkbox"
            role="switch"
            name={name}
            id={labelId}
            disabled={disabled}
            value={value}
            aria-labelledby={labelId}
            aria-label={label ?? undefined}
            aria-checked={checked ?? innerChecked}
            defaultChecked={defaultChecked ?? undefined}
            tabIndex={-1}
          ></SwitchInput>
          {disabled ? (
            <DisabledSwitchTrack
              backgroundType={backgroundType}
              data-checked={checked ?? (innerChecked ? innerChecked : undefined)}
              tabIndex={-1}
            />
          ) : (
            <SwitchTrack
              backgroundType={backgroundType}
              data-checked={checked ?? (innerChecked ? innerChecked : undefined)}
              tabIndex={tabIndex}
              ref={refTrack}
            />
          )}
        </SwitchBase>
        {labelPosition === "after" && label && (
          <LabelContainer
            id={labelId}
            labelPosition={labelPosition}
            onClick={!disabled ? handlerSwitchChange : undefined}
            disabled={disabled}
            backgroundType={backgroundType}
            label={label}
          >
            {optional && <>{translatedLabels.formFields.optionalLabel}</>} {label}
          </LabelContainer>
        )}
      </SwitchContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

type SwitchContainerProps = {
  margin: Margin | Space;
  size: "small" | "medium" | "large" | "fillParent" | "fitContent";
};

const SwitchContainer = styled.div<SwitchContainerProps>`
  display: inline-flex;
  align-items: center;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: 40px;

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

type LabelProps = {
  backgroundType: "dark" | "light";
  labelPosition: "after" | "before";
  disabled: boolean;
  label: boolean;
};

const LabelContainer = styled.span<LabelProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledLabelFontColorOnDark
        : props.theme.disabledLabelFontColor
      : props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.theme.labelFontColor};
  opacity: 1;
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => (props.disabled ? props.theme.disabledLabelFontStyle : props.theme.labelFontStyle)};
  font-weight: ${(props) => props.theme.labelFontWeight};
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};

  ${(props) =>
    !props.label
      ? "padding: 0px;"
      : props.labelPosition === "after"
      ? `padding-left: ${props.theme.spaceBetweenLabelSwitch};`
      : `padding-right: ${props.theme.spaceBetweenLabelSwitch};`};

  ${(props) => props.labelPosition === "before" && "order: -1"}
`;

type SwitchBaseProps = {
  labelPosition: "after" | "before";
  label: boolean;
};

const SwitchBase = styled.label<SwitchBaseProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${(props) =>
    !props.label ? "0px 4px" : props.labelPosition === "before" ? "0 4px 0 12px" : "0 12px 0 4px"};
`;

const SwitchInput = styled.input`
  display: none;
`;

type SwitchTrackProps = {
  backgroundType: "dark" | "light";
};

const SwitchTrack = styled.span<SwitchTrackProps>`
  border-radius: 15px;
  width: ${(props) => props.theme.trackWidth};
  height: ${(props) => props.theme.trackHeight};
  position: relative;

  &:focus-visible {
    outline: none;
    ::before {
      outline: ${(props) =>
        `${
          props.backgroundType === "dark" ? props.theme.thumbFocusColorOnDark : props.theme.thumbFocusColor
        } solid 2px`};
      outline-offset: 6px;
    }
  }

  /* Thumb element */
  ::before {
    content: "";
    transform: initial;
    position: absolute;
    width: ${(props) => props.theme.thumbWidth};
    height: ${(props) => props.theme.thumbHeight};
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    bottom: -6px;
    left: -4px;
    transform: translateX(0px);
    background-color: ${(props) =>
      props.backgroundType === "dark"
        ? props.theme.uncheckedThumbBackgroundColorOnDark
        : props.theme.uncheckedThumbBackgroundColor};
  }

  /* Unchecked */
  background-color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.uncheckedTrackBackgroundColorOnDark
      : props.theme.uncheckedTrackBackgroundColor};

  /* Checked */
  &[data-checked="true"] {
    background-color: ${(props) =>
      props.backgroundType === "dark"
        ? props.theme.checkedTrackBackgroundColorOnDark
        : props.theme.checkedTrackBackgroundColor};
    ::before {
      transform: translateX(${(props) => props.theme.thumbShift});
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.checkedThumbBackgroundColorOnDark
          : props.theme.checkedThumbBackgroundColor};
    }
  }
`;

const DisabledSwitchTrack = styled(SwitchTrack)`
  cursor: not-allowed;

  /* Unchecked */
  background-color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.disabledUncheckedTrackBackgroundColorOnDark
      : props.theme.disabledUncheckedTrackBackgroundColor};

  ::before {
    background-color: ${(props) =>
      props.backgroundType === "dark"
        ? props.theme.disabledUncheckedThumbBackgroundColorOnDark
        : props.theme.disabledUncheckedThumbBackgroundColor};
  }

  /* Checked */
  &[data-checked="true"] {
    background-color: ${(props) =>
      props.backgroundType === "dark"
        ? props.theme.disabledCheckedTrackBackgroundColorOnDark
        : props.theme.disabledCheckedTrackBackgroundColor};

    ::before {
      transform: translateX(${(props) => props.theme.thumbShift});
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.disabledCheckedThumbBackgroundColorOnDark
          : props.theme.disabledCheckedThumbBackgroundColor};
    }
  }
`;

export default DxcSwitch;
