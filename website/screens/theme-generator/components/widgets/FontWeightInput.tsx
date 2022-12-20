import React from "react";
import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";

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

export default FontWeightInput;
