import { DxcFlex } from "@dxc-technology/halstack-react";
import React from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const DefaultInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => (
  <DxcFlex alignItems="center">
    <StyledInput
      type="text"
      value={propertyValue}
      onChange={(event) => {
        const val = event.target.value;
        onChangeCustomTheme(propertyName, val);
      }}
    />
  </DxcFlex>
);

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 165px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default DefaultInput;
