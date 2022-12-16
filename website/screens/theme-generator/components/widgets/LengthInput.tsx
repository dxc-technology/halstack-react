import { DxcFlex } from "@dxc-technology/halstack-react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const unitOptions = [
  "cm",
  "mm",
  "in",
  "px",
  "pt",
  "pc",
  "em",
  "ex",
  "ch",
  "rem",
  "vw",
  "vh",
  "vmin",
  "vmax",
  "%",
];

const LengthInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(
    propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join("")
  );
  const [unitValue, changeUnitValue] = useState(
    propertyValue.match(/[a-zA-Z]+|%/g)?.[0]
  );

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
    changeUnitValue(propertyValue.match(/[a-zA-Z]+|%/g)?.[0]);
  }, [propertyValue]);

  return (
    <DxcFlex alignItems="center">
      <StyledInput
        type="number"
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          changeValue(val);
          onChangeCustomTheme(propertyName, val + unitValue);
        }}
      />
      <StyledSelect
        onChange={(event) => {
          const val = event.target.value;
          changeUnitValue(val);
          onChangeCustomTheme(propertyName, value + val);
        }}
      >
        {unitOptions.map((unitOption, index) => (
          <option
            key={`length-unit-option-${index}`}
            value={unitOption}
            selected={unitOption === unitValue}
          >
            {unitOption}
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
  margin-left: 5px;
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 80px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default LengthInput;
