import React, { useState, useEffect } from "react";
import StyledInput from "./common/StyledInput";
import ThemeInputWidgetProps from "./common/types";

const IntegerInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(propertyValue.match(/-?[0-9]+/g)?.join(""));

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+/g)?.join(""));
  }, [propertyValue]);

  return (
    <StyledInput
      type="number"
      value={value}
      onChange={(event) => {
        const val = event.target.value;
        changeValue(val);
        onChangeCustomTheme(propertyName, val);
      }}
    />
  );
};

export default IntegerInput;
