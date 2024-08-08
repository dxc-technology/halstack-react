import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";

const styleOptions = ["normal", "italic", "oblique"];

const FontStyleInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {styleOptions.map((styleOption, index) => (
      <option key={`font-style-option-${index}`} value={styleOption} selected={styleOption === propertyValue}>
        {styleOption}
      </option>
    ))}
  </StyledSelect>
);

export default FontStyleInput;
