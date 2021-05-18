import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import DxcRequired from "../common/RequiredComponent";
import BackgroundColorContext from "../BackgroundColorContext.js";

const DxcTextarea = ({
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
    <ThemeProvider theme={colorsTheme.textarea}>
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
      font-family: ${(props) => props.theme.assistiveTextFontFamily};
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
          props.backgroundType === "dark"
            ? props.theme.disabledFontColorOnDark
            : props.theme.disabledFontColor} !important;
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
        font-family: ${(props) => props.theme.labelFontFamily};
        transform: "translate(0, 1.5px) scale(0.75)";
      }

      &.Mui-error {
        color: ${(props) => (props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor)};
      }

      &:not(.MuiInputLabel-shrink) {
        font-family: ${(props) => props.theme.labelFontFamily};
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
            props.backgroundType ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        }
        & + div + p {
          color: ${(props) =>
            props.backgroundType === "dark"
              ? props.theme.assistiveTextFontColorOnDark
              : props.theme.assistiveTextFontColor};
        }
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      font-family: Open Sans, sans-serif;

      &::before {
        border-bottom: ${(props) =>
          `1px solid ${
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor
          }`};
      }
      &:not(.Mui-error)::before,
      &:not(&.Mui-focused)::before {
        border-bottom: ${(props) =>
          `1px solid ${
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor
          }`};
      }
      &::after {
        border-bottom: ${(props) =>
          `2px solid ${
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor
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
          border-width: 1px;
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
          transform: scaleX(1);
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
            `1px solid ${
              props.backgroundType === "dark" ? props.theme.disabledFontColorOnDark : props.theme.disabledFontColor
            } !important`};
          border-bottom-style: solid;
        }
      }

      .MuiInputBase-input {
        padding-left: "inherit";
        color: ${(props) => (props.backgroundType === "dark" ? "#ffffff" : "#000000")};
        text-overflow: ellipsis;
        &.Mui-disabled {
          cursor: not-allowed;
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.disabledFontColorOnDark : props.theme.disabledFontColor};
        }
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before {
        border-bottom: ${(props) =>
          props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
      }
    }

    & > p {
      &.Mui-error {
        color: ${(props) =>
          `${props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor} !important`};
      }
      &.Mui-disabled {
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.disabledFontColorOnDark
            : props.theme.disabledFontColor} !important;
        cursor: not-allowed;
      }
    }
  }
`;

DxcTextarea.propTypes = {
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

export default DxcTextarea;
