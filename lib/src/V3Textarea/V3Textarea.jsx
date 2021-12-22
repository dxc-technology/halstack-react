import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import DxcRequired from "../common/RequiredComponent";
import BackgroundColorContext from "../BackgroundColorContext.js";

const V3DxcTextarea = ({
  label = " ",
  name = "",
  value,
  assistiveText = "",
  disabled = false,
  onChange = "",
  onBlur = "",
  numRows = 4,
  invalid = false,
  required = false,
  placeholder = "",
  margin,
  size = "medium",
  tabIndex = 0,
}) => {
  const [innerValue, setInnerValue] = useState("");
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const handlerTextareaChange = (event) => {
    if (value === null || value === undefined) {
      if (typeof onChange === "function") {
        setInnerValue(event.target.value);
        onChange(event.target.value);
      } else {
        setInnerValue(event.target.value);
      }
    } else if (onChange !== "") {
      if (typeof onChange === "function") {
        onChange(event.target.value);
      } else {
        setInnerValue(event.target.value);
      }
    }
  };

  const handlerTextareaBlur = (event) => {
    setInnerValue(event.target.value);
    if (onBlur) {
      onBlur(event.target.value);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.V3Textarea}>
      <TextContainer
        required={required}
        assistiveText={assistiveText}
        margin={margin}
        size={size}
        backgroundType={backgroundType}
      >
        <TextField
          error={invalid}
          value={value !== null ? value : innerValue}
          name={name}
          multiline
          disabled={disabled}
          label={
            required ? (
              <React.Fragment>
                <DxcRequired />
                {label}
              </React.Fragment>
            ) : (
              label
            )
          }
          helperText={assistiveText}
          onChange={handlerTextareaChange}
          onBlur={(onBlur && handlerTextareaBlur) || null}
          rows={numRows}
          placeholder={placeholder}
          inputProps={{
            tabIndex: tabIndex,
          }}
        />
      </TextContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "42px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const TextContainer = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: inline-block;
  position: relative;
  height: auto;
  width: ${(props) => calculateWidth(props.margin, props.size)};

  .MuiTextField-root {
    width: 100%;

    .MuiFormHelperText-root {
      font-family: ${(props) => props.theme.fontFamily};
      font-size: ${(props) => props.theme.assistiveTextFontSize};
      font-style: ${(props) => props.theme.assistiveTextFontStyle};
      font-weight: ${(props) => props.theme.assistiveTextFontWeight};
      letter-spacing: ${(props) => props.theme.assistiveTextLetterSpacing};
      margin-top: 6px;
    }
    .MuiFormLabel-root {
      font-size: ${(props) => props.theme.labelFontSize};
      font-style: ${(props) => props.theme.labelFontStyle};
      font-weight: ${(props) => props.theme.labelFontWeight};
      letter-spacing: ${(props) => props.theme.labelLetterSpacing};
      color: ${(props) =>
        props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
      padding-left: "inherit";

      &.Mui-disabled {
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.disabledColorOnDark : props.theme.disabledColor} !important;
        cursor: not-allowed;
      }

      &.Mui-focused {
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        &.MuiInputLabel-shrink {
          transform: "translate(0, 1.5px) scale(0.75);";
        }
      }

      &.MuiInputLabel-shrink {
        font-family: ${(props) => props.theme.fontFamily};
        transform: "translate(0, 1.5px) scale(0.75)";
      }

      &.Mui-error {
        color: ${(props) => (props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor)};
      }

      &:not(.MuiInputLabel-shrink) {
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        & + div,
        & + div + p {
          color: ${(props) =>
            props.backgroundType === "dark"
              ? props.theme.assistiveTextFontColorOnDark
              : props.theme.assistiveTextFontColor};
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: ${(props) =>
            props.backgroundType ? props.theme.underlineColorOnDark : props.theme.underlineColor};
        }
        & + div + p {
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        }
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      &::before {
        border-bottom: ${(props) =>
          `${props.theme.underlineThickness} solid ${
            props.backgroundType === "dark" ? props.theme.underlineColorOnDark : props.theme.underlineColor
          }`};
      }

      &:not(.Mui-error)::before,
      &:not(&.Mui-focused)::before {
        border-bottom: ${(props) =>
          `${props.theme.underlineThickness} solid ${
            props.backgroundType === "dark" ? props.theme.underlineColorOnDark : props.theme.underlineColor
          }`};
      }

      &::after {
        border-bottom: ${(props) =>
          `calc(${props.theme.underlineThickness} + 1px) solid ${
            props.backgroundType === "dark" ? props.theme.underlineFocusColorOnDark : props.theme.underlineFocusColor
          }`};
      }

      .MuiInputBase-inputMultiline {
        overflow: auto !important;

        ::-webkit-scrollbar {
          width: 3px;
        }

        ::-webkit-scrollbar-track {
          background-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.scrollBarTrackColorOnDark : props.theme.scrollBarTrackColor};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.scrollBarThumbColorOnDark : props.theme.scrollBarThumbColor};
          border-radius: 3px;
        }
      }

      &.Mui-error {
        &::before {
          border-width: ${(props) => props.theme.underlineThickness};
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: calc(${(props) => props.theme.underlineThickness} + 1px);
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.underlineFocusColorOnDark : props.theme.underlineFocusColor};
        }
        &.Mui-error::after {
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor};
        }
      }

      &.Mui-disabled {
        cursor: not-allowed;

        &::before {
          border-bottom: ${(props) =>
            `${props.theme.underlineThickness} solid ${
              props.backgroundType === "dark" ? props.theme.disabledColorOnDark : props.theme.disabledColor
            } !important`};
          border-bottom-style: solid;
        }
      }

      .MuiInputBase-input {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: ${(props) => props.theme.valueFontSize};
        font-style: ${(props) => props.theme.valueFontStyle};
        font-weight: ${(props) => props.theme.valueFontWeight};
        letter-spacing: ${(props) => props.theme.valueLetterSpacing};
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.valueFontColorOnDark : props.theme.valueFontColor};
        line-height: ${(props) => props.theme.valueLineHeight};
        padding-left: "inherit";
        text-overflow: ellipsis;

        &.Mui-disabled {
          cursor: not-allowed;
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.disabledColorOnDark : props.theme.disabledColor};
        }
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before {
        border-bottom-color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.underlineFocusColorOnDark : props.theme.underlineFocusColor};
      }
    }

    & > p {
      &.Mui-error {
        color: ${(props) =>
          `${props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor} !important`};
      }
      &.Mui-disabled {
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.disabledColorOnDark : props.theme.disabledColor} !important;
        cursor: not-allowed;
      }
    }
  }
`;

V3DxcTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  numRows: PropTypes.number,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  tabIndex: PropTypes.number,
};

export default V3DxcTextarea;
