import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";

const styleOptions = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];

const BorderStyleInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {styleOptions.map((styleOption, index) => (
      <option key={`border-style-option-${index}`} value={styleOption} selected={styleOption === propertyValue}>
        {styleOption}
      </option>
    ))}
  </StyledSelect>
);

export default BorderStyleInput;
