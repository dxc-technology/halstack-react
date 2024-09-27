import StyledInput from "./common/StyledInput";
import ThemeInputWidgetProps from "./common/types";

const DefaultInput = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => (
  <StyledInput
    type="text"
    value={propertyValue}
    onChange={(event) => {
      const val = event.target.value;
      onChangeCustomTheme(propertyName, val);
    }}
  />
);

export default DefaultInput;
