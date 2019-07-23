import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent.jsx";

const DxcInputText = ({
  label,
  name,
  assistiveText,
  disabled,
  prefix,
  sufix,
  prefixIconSrc,
  sufixIconSrc,
  onClickIcon
}) => {
  return (
    <TextContainer>
      <TextField
        name={name}
        disabled={disabled}
        label={label}
        helperText={assistiveText}
        InputProps={{
          startAdornment: prefix && <InputAdornment position="start">{prefix}</InputAdornment>,
          endAdornment: (sufix || sufixIconSrc) && (
            <InputAdornment position="end">
              {(sufixIconSrc && <InputIcon src={sufixIconSrc} />) || sufix}
            </InputAdornment>
          )
        }}
      />
    </TextContainer>
  );
};
const InputIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
`;

const TextContainer = styled.div`
  .MuiTextField-root {
    margin-top: 16px;
    margin-bottom: 8px;
    .MuiFormLabel-root {
      font-size: 16px;
      top: 3px;
      color: #666;
      &.Mui-focused {
        color: #000;
      }
      &.Mui-disabled {
        color: #d9d9d9;
        cursor: not-allowed;
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      height: 34px;
      min-width: 230px;
      min-height: 34px;
      width: 230px;
      &::after {
        border-bottom: 2px solid #666;
      }
      &.Mui-focused {
        color: #000000;
        &::after {
          border-bottom: 2px solid #000000;
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
        &.Mui-disabled {
          cursor: not-allowed;
        }
      }
      .MuiInputAdornment-root {
        height: 20px;
      }
    }
  }
`;
export default DxcInputText;
