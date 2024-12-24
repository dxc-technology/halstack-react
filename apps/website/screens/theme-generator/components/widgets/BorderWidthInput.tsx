import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "./common/StyledInput";
import ThemeInputWidgetProps from "./common/types";
import WidgetContainer from "./common/WidgetContainer";

const BorderWidthInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps) => {
  const [value, changeValue] = useState(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
  const [unitValue] = useState(propertyValue.match(/[a-zA-Z]+|%/g)?.[0]);

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
  }, [propertyValue]);

  return (
    <WidgetContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          changeValue(val);
          onChangeCustomTheme(propertyName, val + unitValue);
        }}
      />
      <StyledLabel>{unitValue}</StyledLabel>
    </WidgetContainer>
  );
};

const StyledLabel = styled.span`
  align-self: center;
  font: normal 12px/17px Open Sans;
`;

export default BorderWidthInput;
