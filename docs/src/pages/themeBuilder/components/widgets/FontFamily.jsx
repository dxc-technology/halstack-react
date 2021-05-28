import React, { useState } from "react";
import styled from "styled-components";

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
}) => {
  const [value, changeValue] = useState(
    propertyValue.split(", ")[0]
  );
  const [unitValue, changeUnitValue] = useState(
    propertyValue.split(", ")[1]
  );

  return (
    <FontFamilyWidgetContainer>
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
          onChangeCustomTheme(propertyName, `${propertyValue.split(",")[0]}, ${val}`);
        }}
      >
        {fontFamilyOptions.map((familyOption) => (
          <option value={familyOption} selected={familyOption === unitValue}>
            {familyOption}
          </option>
        ))}
      </StyledSelect>
    </FontFamilyWidgetContainer>
  );
};
const FontFamilyWidgetContainer = styled.div`
  display: flex;

`;
const StyledSelect = styled.select`
  margin-left: 5px;
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 80px;
`;

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 75px;
`;

export default FontFamilyInput;
