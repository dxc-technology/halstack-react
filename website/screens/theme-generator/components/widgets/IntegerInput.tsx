import { DxcFlex } from "@dxc-technology/halstack-react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const IntegerInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(
    propertyValue.match(/-?[0-9]+/g)?.join("")
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    changeValue(val);
    onChangeCustomTheme(propertyName, val);
  };

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+/g)?.join(""));
  }, [propertyValue]);

  return (
    <DxcFlex alignItems="center">
      <StyledInput type="number" value={value} onChange={onChange} />
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

export default IntegerInput;
