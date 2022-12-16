import React from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const styleOptions = ["normal", "italic", "oblique"];

const FontStyleInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {styleOptions.map((styleOption, index) => (
      <option
        key={`font-style-option-${index}`}
        value={styleOption}
        selected={styleOption === propertyValue}
      >
        {styleOption}
      </option>
    ))}
  </StyledSelect>
);

const StyledSelect = styled.select`
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 87px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default FontStyleInput;
