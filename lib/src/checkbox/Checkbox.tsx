import React, { useState, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext from "../BackgroundColorContext";
import CheckboxPropsType from "./types";

type LabelPropsType = {
  id?: string;
  label?: string;
  labelPosition?: "before" | "after";
  disabled?: boolean;
  optional?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};
const Label = React.memo(
  ({ id, label, labelPosition, disabled, optional, onClick, onMouseOver, onMouseOut }: LabelPropsType): JSX.Element => {
    const backgroundType = useContext(BackgroundColorContext);
    const translatedLabels = useTranslatedLabels();

    return (
      <LabelContainer
        id={id}
        labelPosition={labelPosition}
        disabled={disabled}
        backgroundType={backgroundType}
        onClick={!disabled && onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {labelPosition === "before" ? (
          <>
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
          </>
        ) : (
          <>
            {optional && <span>{translatedLabels.formFields.optionalLabel}</span>} {label}
          </>
        )}
      </LabelContainer>
    );
  }
);

const DxcCheckbox = ({
  checked,
  defaultChecked = false,
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
}: CheckboxPropsType): JSX.Element => {
  const [switchId] = useState(`checkbox-${uuidv4()}`);
  const labelId = `label-${switchId}`;
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const [isLabelHovered, setIsLabelHovered] = useState(false);
  const checkboxRef = useRef(null);
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const handleCheckboxChange = (event) => {
    if (checked === undefined) {
      const isChecked = event.target.checked ?? !innerChecked;
      setInnerChecked(isChecked);
      onChange?.(isChecked);
    } else onChange?.(!checked);
  };
  const handleLabelOnClick = () => {
    const isChecked = checked ?? innerChecked;
    setInnerChecked(!isChecked);
    onChange?.(!isChecked);
    document.activeElement !== checkboxRef?.current && checkboxRef?.current?.focus();
  };
  const handleLabelMouseOver = () => {
    setIsLabelHovered(true);
  };
  const handleLabelMouseOut = () => {
    setIsLabelHovered(false);
  };

  return (
    <ThemeProvider theme={colorsTheme.checkbox}>
      <CheckboxContainer
        label={label}
        labelPosition={labelPosition}
        disabled={disabled}
        margin={margin}
        size={size}
        backgroundType={backgroundType}
        isLabelHovered={isLabelHovered}
      >
        {label && labelPosition === "before" && (
          <Label
            id={labelId}
            label={label}
            labelPosition={labelPosition}
            disabled={disabled}
            optional={optional}
            onClick={handleLabelOnClick}
            onMouseOver={handleLabelMouseOver}
            onMouseOut={handleLabelMouseOut}
          />
        )}
        <Checkbox
          checked={checked ?? innerChecked}
          inputProps={{
            name: name,
            "aria-labelledby": labelId,
            role: "checkbox",
            "aria-checked": checked ?? innerChecked,
          }}
          onChange={handleCheckboxChange}
          value={value}
          disabled={disabled}
          disableRipple
          tabIndex={tabIndex}
          inputRef={checkboxRef}
        />
        {label && labelPosition === "after" && (
          <Label
            id={labelId}
            label={label}
            labelPosition={labelPosition}
            disabled={disabled}
            optional={optional}
            onClick={handleLabelOnClick}
            onMouseOver={handleLabelMouseOver}
            onMouseOut={handleLabelMouseOut}
          />
        )}
      </CheckboxContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const getDisabledColor = (props, element) => {
  switch (element) {
    case "check":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledCheckColorOnDark
        : props.theme.disabledCheckColor;
    case "background":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledBackgroundColorCheckedOnDark
        : props.theme.disabledBackgroundColorChecked;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledBorderColorOnDark
        : props.theme.disabledBorderColor;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledFontColorOnDark
        : props.theme.disabledFontColor;
  }
};

const getNotDisabledColor = (props, element) => {
  switch (element) {
    case "check":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.checkColorOnDark
        : props.theme.checkColor;
    case "background":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.backgroundColorCheckedOnDark
        : props.theme.backgroundColorChecked;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.borderColorOnDark
        : props.theme.borderColor;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.fontColorOnDark
        : props.theme.fontColor;
  }
};

type CommonContainerProps = CheckboxPropsType & {
  backgroundType: string;
};
const LabelContainer = styled.span<CommonContainerProps>`
  color: ${(props) => (props.disabled ? getDisabledColor(props, "label") : getNotDisabledColor(props, "label"))};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

type CheckboxContainerProps = CheckboxPropsType & {
  backgroundType: string;
  isLabelHovered: boolean;
};
const CheckboxContainer = styled.span<CheckboxContainerProps>`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  display: inline-flex;
  gap: ${(props) => props.label && props.theme.checkLabelSpacing};
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  position: relative;

  .MuiCheckbox-colorSecondary {
    .MuiIconButton-label {
      & > .MuiSvgIcon-root {
        width: 24px;
        height: 24px;

        ${(props) =>
          props.isLabelHovered &&
          `color: ${
            props.backgroundType === "dark" ? props.theme.hoverBorderColorOnDark : props.theme.hoverBorderColor
          } !important;`}
        color: ${(props) => getNotDisabledColor(props, "border")};
      }
    }
    &.Mui-disabled {
      .MuiIconButton-label {
        & > .MuiSvgIcon-root {
          color: ${(props) => getDisabledColor(props, "border")};
          opacity: 0.34;
        }
      }
    }
    &.Mui-checked {
      .MuiIconButton-label {
        & > .MuiSvgIcon-root {
          color: ${(props) =>
            props.disabled ? getDisabledColor(props, "background") : getNotDisabledColor(props, "background")};
        }
      }
      &:hover {
        background-color: transparent;
        .MuiIconButton-label {
          & > .MuiSvgIcon-root {
            background-color: transparent;
            color: ${(props) =>
              props.backgroundType === "dark"
                ? props.theme.hoverBackgroundColorCheckedOnDark
                : props.theme.hoverBackgroundColorChecked};
          }
        }
      }
    }
  }

  .MuiIconButton-colorSecondary {
    &:hover {
      background-color: transparent;
    }
  }
  .MuiButtonBase-root {
    &:hover {
      .MuiIconButton-label {
        & > .MuiSvgIcon-root {
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.hoverBorderColorOnDark : props.theme.hoverBorderColor};
        }
      }
    }
    &:focus-within {
      outline: 2px solid
        ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)};
      outline-offset: -1px;
    }

    border-radius: 0.25rem;
    padding: 0px;
    left: ${(props) => (props.labelPosition === "before" ? "unset" : "1px")};
    right: ${(props) => (props.labelPosition === "before" ? "1px" : "unset")};
    z-index: 1;
  }
`;

export default DxcCheckbox;
