import React, { useState, useEffect } from "react";
import StyledInput from "./common/StyledInput";
import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";
import WidgetContainer from "./common/WidgetContainer";

const unitOptions = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];

const LengthInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
  const [unitValue, changeUnitValue] = useState(propertyValue.match(/[a-zA-Z]+|%/g)?.[0]);

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
    changeUnitValue(propertyValue.match(/[a-zA-Z]+|%/g)?.[0]);
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
      <StyledSelect
        onChange={(event) => {
          const val = event.target.value;
          changeUnitValue(val);
          onChangeCustomTheme(propertyName, value + val);
        }}
      >
        {unitOptions.map((unitOption, index) => (
          <option key={`length-unit-option-${index}`} value={unitOption} selected={unitOption === unitValue}>
            {unitOption}
          </option>
        ))}
      </StyledSelect>
    </WidgetContainer>
  );
};

export default LengthInput;
