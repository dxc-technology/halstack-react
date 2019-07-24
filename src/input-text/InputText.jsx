import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent.jsx";

const DxcInputText = ({
  label,
  name,
  value = "",
  theme="light",
  assistiveText,
  disabled,
  prefix,
  sufix,
  prefixIconSrc,
  sufixIconSrc,
  onClickIcon,
  onChange,
  onBlur,
  error,
  required
}) => {
  const [innerValue, setInnerValue] = useState("");

  const handlerInputChange = event => {
    setInnerValue(event.target.value);
    onChange(event.target.value);
  };
  const handlerInputBlur = event => {
    setInnerValue(event.target.value);
    onBlur(event.target.value);
  };

  return (
    <TextContainer prefixIconSrc={prefixIconSrc} prefix={prefix} required={required}>
      {prefixIconSrc && <PrefixIcon src={prefixIconSrc} disabled={disabled} onClick={onClickIcon} />}
      {prefix && <PrefixLabel disabled={disabled}>{prefix}</PrefixLabel>}
      <TextField
        error={error}
        value={value || innerValue}
        name={name}
        disabled={disabled}
        label={label}
        helperText={assistiveText}
        onChange={handlerInputChange}
        onBlur={handlerInputBlur}
        InputProps={{
          endAdornment: (sufix || sufixIconSrc) && (
            <InputAdornment position="end">
              {(sufixIconSrc && <SufixIcon disabled={disabled} src={sufixIconSrc} onClick={onClickIcon} />) || sufix}
            </InputAdornment>
          )
        }}
      />
    </TextContainer>
  );
};
const PrefixIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 0;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  z-index:1;
  opacity:${props => (props.disabled && 0.5) || 1};
`;
const PrefixLabel = styled.span`
  position: absolute;
  top: 26px;
  left: 0;
  max-height: 20px;
  max-width: 20px;
  opacity:${props => (props.disabled && 0.5) || 1};
`;

const SufixIcon = styled.img`
  top: 23px;
  left: 0;
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  opacity:${props => (props.disabled && 0.5) || 1};
`;

const TextContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin: 15px;

  .MuiTextField-root {

    .MuiFormLabel-root {
      font-size: 16px;
      top: 3px;
      color: #000;
      &::before {
        content:'${props => (props.required && "*") || ""}';
        color:#fa0303;
        font-size: 18px; 
      }
      &.Mui-disabled{
        opacity:0.5;
      }
      padding-left: ${props => ((props.prefixIconSrc || props.prefix) && "32px") || "inherit"};
      &.Mui-focused {
        color: #000;
        &.MuiInputLabel-shrink {
          transform: ${props =>
            props.prefixIconSrc ||
            (props.prefix && "translate(8px, 1.5px) scale(0.75);") ||
            "translate(0, 1.5px) scale(0.75);"};
        }
      }
      &.Mui-disabled {
        color: #d9d9d9;
        cursor: not-allowed;
      }
      &.MuiInputLabel-shrink {
        transform: ${props =>
          props.prefixIconSrc ||
          (props.prefix && "translate(8px, 1.5px) scale(0.75);") ||
          "translate(0, 1.5px) scale(0.75);"};
      }
      &.Mui-error {
        color: #d0011b;
      }

      &:not(.MuiInputLabel-shrink)  {
        color: #666;
        & + div, & + div + p {
          color: #666;
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: #000;
        }
        & + div + p {
          color: #000;
        }
        
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      height: 34px;
      min-width: 230px;
      min-height: 34px;
      width: 230px;

      &:not(.Mui-error)::before, &:not(&.Mui-focused)::before {
        border-bottom: 1px solid #000;
      }

      &.Mui-error {
        &::before {
          border-width: 1px;
          border-color: #d0011b;
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: #000;
          transform: scaleX(1);
        }
        
        &.Mui-error::after {
          border-color: #d0011b;
        }
      }

      &.Mui-disabled {
        color: #d9d9d9;
        cursor: not-allowed;
        
        &::before {
          border-bottom: 1px solid #d9d9d9;
          border-bottom-style: solid;
        }
      }
      .MuiInputBase-input {
        padding-left: ${props => ((props.prefixIconSrc || props.prefix) && "32px") || "inherit"};
        &.Mui-disabled {
          cursor: not-allowed;
        }
      }
      .MuiInputAdornment-root {
        height: 20px;
      }

      &:hover:not(.Mui-disabled):before {
        border-bottom: 1px solid #000;
      }
    }

    & > p {
      &.Mui-error {
        color: #d0011b !important;
      }
      &.Mui-disabled{
        opacity:0.5;
        cursor:not-allowed;
      }
    }
    
  }
`;
export default DxcInputText;
