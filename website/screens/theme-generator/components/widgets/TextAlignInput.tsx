import React from "react";
import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";

const textAlignOptions = [
  "left",
  "right",
  "center",
  "justify",
  "justify-all",
  "start",
  "end",
  "match-parent",
];

const TextAlignInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {textAlignOptions.map((transformOption) => (
      <option
        value={transformOption}
        selected={transformOption === propertyValue}
      >
        {transformOption}
      </option>
    ))}
  </StyledSelect>
);

export default TextAlignInput;
