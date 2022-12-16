import React from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const transformOptions = ["none", "uppercase", "lowercase", "capitalize"];

const TextTransformInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {transformOptions.map((transformOption) => (
      <option
        value={transformOption}
        selected={transformOption === propertyValue}
      >
        {transformOption}
      </option>
    ))}
  </StyledSelect>
);

const StyledSelect = styled.select`
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 88px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default TextTransformInput;
