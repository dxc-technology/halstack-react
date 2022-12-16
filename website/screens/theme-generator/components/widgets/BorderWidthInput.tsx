import { DxcFlex } from "@dxc-technology/halstack-react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const BorderWidthInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps) => {
  const [value, changeValue] = useState(
    propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join("")
  );
  const unitValue = useState(
    propertyValue.match(/[a-zA-Z]+|%/g)?.[0]
  );

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
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
      <StyledLabel> {unitValue}</StyledLabel>
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

const StyledLabel = styled.span`
  font: normal 12px/17px Open Sans;
  padding-left: 5px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default BorderWidthInput;
