import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcTextarea = ({
  label = " ",
  name = "",
  value,
  theme = "light",
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
  const colorsTheme = useContext(ThemeContext) || colors;

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
    <ThemeProvider theme={colorsTheme}>
      <TextContainer required={required} brightness={theme} assistiveText={assistiveText} margin={margin} size={size}>
        <TextField
          error={invalid}
          value={value !== null ? value : innerValue}
          name={name}
          multiline
          disabled={disabled}
          label={label}
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
      color: ${(props) => (props.brightness === "light" ? props.theme.black : props.theme.lightGrey)};
      &::before {
        content:'${(props) => (props.required && "*") || ""}';
        color: ${(props) => (props.brightness === "light" ? props.theme.darkRed : props.theme.lightRed)};
        font-size: 16px; 
      }
      &.Mui-disabled{
        opacity:0.5;
      }
      padding-left: "inherit";
      &.Mui-focused {
        color: ${(props) => (props.brightness === "light" ? props.theme.black : props.theme.white)};
        &.MuiInputLabel-shrink {
          transform: 
            "translate(0, 1.5px) scale(0.75);";
        }
      }
      &.Mui-disabled {
        color: ${(props) => (props.brightness === "light" ? props.theme.lightGrey : props.theme.darkGrey)};
        cursor: not-allowed;
      }
      &.MuiInputLabel-shrink {
        font-family: "Open Sans", sans-serif;
        transform: "translate(0, 1.5px) scale(0.75)";
      }
      &.Mui-error {
        color: ${(props) => (props.brightness === "light" ? props.theme.darkRed : props.theme.lightRed)};
      }

      &:not(.MuiInputLabel-shrink)  {
        font-family: "Open Sans", sans-serif;
        color: ${(props) => (props.brightness === "light" ? props.theme.darkGrey : props.theme.lightGrey)};
        & + div, & + div + p {
          color: ${(props) => (props.brightness === "light" ? props.theme.darkGrey : props.theme.lightGrey)};
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: ${(props) => (props.brightness === "light" ? props.theme.black : props.theme.lightGrey)};
        }
        & + div + p {
          color: ${(props) => (props.brightness === "light" ? props.theme.darkGrey : props.theme.lightGrey)};
        }
        
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      font-family: "Open Sans", sans-serif;
      &::before{
        border-bottom: ${(props) =>
          props.brightness === "light" ? `1px solid ${props.theme.black}` : `1px solid ${props.theme.lightGrey}`};
      }
      &:not(.Mui-error)::before, &:not(&.Mui-focused)::before {
        border-bottom: ${(props) =>
          props.brightness === "light" ? `1px solid ${props.theme.black}` : `1px solid ${props.theme.lightGrey}`};
      }
      &::after{
        border-bottom: ${(props) => (props.brightness === "light" ? "2px solid #000" : "2px solid #d9d9d9")};
      }

      .MuiInputBase-inputMultiline {
        overflow: auto !important;

        ::-webkit-scrollbar-track {
          background-color: ${(props) => props.theme.lightGrey};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${(props) => props.theme.darkGrey};
          border-radius: 3px;
        }
      }

      &.Mui-error {
        &::before {
          border-width: 1px;
          border-color: ${(props) => (props.brightness === "light" ? props.theme.darkRed : props.theme.lightRed)};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: ${(props) => (props.brightness === "light" ? props.theme.black : props.theme.white)};
          transform: scaleX(1);
        }
        
        &.Mui-error::after {
          border-color: ${(props) => (props.brightness === "light" ? props.theme.darkRed : props.theme.lightRed)};
        }
      }

      &.Mui-disabled {
        color: ${(props) => (props.brightness === "light" ? props.theme.lightGrey : props.theme.darkGrey)};
        opacity:0.5;
        cursor: not-allowed;
        
        &::before {
          border-bottom: ${(props) =>
            props.brightness === "light" ? `1px solid ${props.theme.lightGrey}` : `1px solid ${props.theme.darkGrey}`};
          border-bottom-style: solid;
        }
      }
      .MuiInputBase-input {
        padding-left: "inherit";
        color: ${(props) => (props.brightness === "light" ? props.theme.black : props.theme.white)};
         text-overflow: ellipsis;
        &.Mui-disabled {
          cursor: not-allowed;
        };
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before{
        border-bottom: ${(props) =>
          props.brightness === "light" ? `1px solid ${props.theme.black}` : `1px solid ${props.theme.white}`};
      }
      
    }

    & > p {
      &.Mui-error {
        color: ${(props) =>
          props.brightness === "light" ? props.theme.darkRed + " !important" : props.theme.lightRed + " !important"};
      }
      &.Mui-disabled{
        opacity:0.5;
        cursor:not-allowed;
      }
    }
    
  }
`;

DxcTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
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
