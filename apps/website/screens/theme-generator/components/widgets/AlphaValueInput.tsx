import { useState, useEffect } from "react";
import StyledInput from "./common/StyledInput";
import ThemeInputWidgetProps from "./common/types";

const AlphaValueInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => {
  const [value, changeValue] = useState(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)?.join(""));
  }, [propertyValue]);

  return (
    <StyledInput
      type="number"
      value={value}
      min="0"
      max="1"
      step="0.01"
      onChange={(event) => {
        const val = event.target.value;
        changeValue(val);
        onChangeCustomTheme(propertyName, val);
      }}
    />
  );
};

export default AlphaValueInput;
