import { DxcFlex } from "@dxc-technology/halstack-react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const fontFamilyOptions = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
];

const FontFamilyInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(propertyValue.split(", ")[0]);
  const [unitValue, changeUnitValue] = useState(propertyValue.split(", ")[1]);

  useEffect(() => {
    changeValue(propertyValue.split(", ")[0]);
    changeUnitValue(propertyValue.split(", ")[1]);
  }, [propertyValue]);

  return (
    <DxcFlex>
      <StyledInput
        type="text"
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          changeValue(event.target.value);
          onChangeCustomTheme(propertyName, `${val}, ${unitValue}`);
        }}
      />
      <StyledSelect
        onChange={(event) => {
          const val = event.target.value;
          changeUnitValue(val);
          onChangeCustomTheme(
            propertyName,
            `${propertyValue.split(",")[0]}, ${val}`
          );
        }}
      >
        {fontFamilyOptions.map((familyOption, index) => (
          <option key={`font-family-option-${index}`} value={familyOption} selected={familyOption === unitValue}>
            {familyOption}
          </option>
        ))}
      </StyledSelect>
    </DxcFlex>
  );
};

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 80px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

const StyledSelect = styled.select`
  font: normal 12px/17px Open Sans;
  margin-left: 5px;
  height: 23px;
  width: 80px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default FontFamilyInput;
