import React, { useState, useEffect } from "react";
import StyledInput from "./common/StyledInput";
import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";
import WidgetContainer from "./common/WidgetContainer";

const fontFamilyOptions = ["serif", "sans-serif", "monospace", "cursive", "fantasy"];

const FontFamilyInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(propertyValue.split(", ")[0]);
  const [unitValue, changeUnitValue] = useState(propertyValue.split(", ")[1]);

  useEffect(() => {
    changeValue(propertyValue.split(", ")[0]);
    changeUnitValue(propertyValue.split(", ")[1]);
  }, [propertyValue]);

  return (
    <WidgetContainer>
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
        {fontFamilyOptions.map((familyOption, index) => (
          <option key={`font-family-option-${index}`} value={familyOption} selected={familyOption === unitValue}>
            {familyOption}
          </option>
        ))}
      </StyledSelect>
    </WidgetContainer>
  );
};

export default FontFamilyInput;
