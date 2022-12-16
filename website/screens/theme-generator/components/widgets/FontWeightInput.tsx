import React from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const weightOptions = [
  "normal",
  "bold",
  "lighter",
  "bolder",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const FontWeightInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {weightOptions.map((weightOption, index) => (
      <option
        key={`font-weight-option-${index}`}
        value={weightOption}
        selected={weightOption === propertyValue}
      >
        {weightOption}
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

export default FontWeightInput;
