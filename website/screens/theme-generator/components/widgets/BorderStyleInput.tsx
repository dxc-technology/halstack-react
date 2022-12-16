import React from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const styleOptions = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
];

const BorderStyleInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => {
  return (
    <StyledSelect
      onChange={(event) => {
        onChangeCustomTheme(propertyName, event.target.value);
      }}
    >
      {styleOptions.map((styleOption, index) => (
        <option
          key={`border-style-option-${index}`}
          value={styleOption}
          selected={styleOption === propertyValue}
        >
          {styleOption}
        </option>
      ))}
    </StyledSelect>
  );
};

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

export default BorderStyleInput;
