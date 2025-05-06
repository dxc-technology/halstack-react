import StyledSelect from "./common/StyledSelect";
import ThemeInputWidgetProps from "./common/types";

const transformOptions = ["none", "uppercase", "lowercase", "capitalize"];

const TextTransformInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => (
  <StyledSelect
    onChange={(event) => {
      onChangeCustomTheme(propertyName, event.target.value);
    }}
  >
    {transformOptions.map((transformOption, index) => (
      <option key={`option${index}`} value={transformOption} selected={transformOption === propertyValue}>
        {transformOption}
      </option>
    ))}
  </StyledSelect>
);

export default TextTransformInput;
