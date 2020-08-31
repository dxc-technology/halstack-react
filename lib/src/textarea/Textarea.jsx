import React, { useState, useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getMargin, getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";
import DxcRequired from "../common/RequiredComponent";

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
}) => {
  const [innerValue, setInnerValue] = useState("");
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

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
      <TextContainer required={required} assistiveText={assistiveText} margin={margin} size={size}>
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

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

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
    font-family: "Open Sans", sans-serif;
    .MuiFormHelperText-root {
      font-family: "Open Sans", sans-serif;
      margin-top: 6px;
    }
    .MuiFormLabel-root {
      font-size: 16px;
      color: ${(props) => props.theme.fontColor};
      &.Mui-disabled {
        opacity: ${(props) => props.theme.disabled};
        cursor: not-allowed;
      }
      padding-left: "inherit";
      &.Mui-focused {
        color: ${(props) => props.theme.fontColor};
        &.MuiInputLabel-shrink {
          transform: "translate(0, 1.5px) scale(0.75);";
        }
      }
      &.MuiInputLabel-shrink {
        font-family: "Open Sans", sans-serif;
        transform: "translate(0, 1.5px) scale(0.75)";
      }
      &.Mui-error {
        color: ${(props) => props.theme.error};
      }

      &:not(.MuiInputLabel-shrink) {
        font-family: "Open Sans", sans-serif;
        color: ${(props) => props.theme.fontColor};
        & + div,
        & + div + p {
          color: ${(props) => props.theme.fontColor};
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: ${(props) => props.theme.fontColor};
        }
        & + div + p {
          color: ${(props) => props.theme.fontColor};
        }
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      font-family: "Open Sans", sans-serif;
      &::before {
        border-bottom: ${(props) => `1px solid ${props.theme.fontColor}`};
      }
      &:not(.Mui-error)::before,
      &:not(&.Mui-focused)::before {
        border-bottom: ${(props) => `1px solid ${props.theme.fontColor}`};
      }
      &::after {
        border-bottom: ${(props) => `2px solid ${props.theme.fontColor}`};
      }

      .MuiInputBase-inputMultiline {
        overflow: auto !important;

        ::-webkit-scrollbar {
          width: 3px;
        }

        ::-webkit-scrollbar-track {
          background-color: ${(props) => props.theme.scrollBarTrackColor};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${(props) => props.theme.scrollBarThumbColor};
          border-radius: 3px;
        }
      }

      &.Mui-error {
        &::before {
          border-width: 1px;
          border-color: ${(props) => props.theme.error};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: ${(props) => props.theme.fontColor};
          transform: scaleX(1);
        }

        &.Mui-error::after {
          border-color: ${(props) => props.theme.error};
        }
      }

      &.Mui-disabled {
        color: ${(props) => props.theme.fontColor};
        opacity: ${(props) => props.theme.disabled};
        cursor: not-allowed;

        &::before {
          border-bottom: ${(props) => `1px solid ${props.theme.fontColor}`};
          border-bottom-style: solid;
        }
      }
      .MuiInputBase-input {
        padding-left: "inherit";
        color: ${(props) => props.theme.fontColor};
        text-overflow: ellipsis;
        &.Mui-disabled {
          cursor: not-allowed;
        }
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before {
        border-bottom: ${(props) => props.theme.fontColor};
      }
    }

    & > p {
      &.Mui-error {
        color: ${(props) => `${props.theme.error} !important`};
      }
      &.Mui-disabled {
        opacity: ${(props) => props.theme.disabled};
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
};

export default DxcTextarea;
