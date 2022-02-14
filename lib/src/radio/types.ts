type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * If true, the radio is selected. If undefined the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  checked?: boolean;
  /**
   * Will be passed to the value attribute of the html input element. When inside a
   * form, this value will be only submitted if the radio is checked.
   */
  value?: string;
  /**
   * Text to be placed next to the radio.
   */
  label: string;
  /**
   * Whether the label should appear after or before the radio.
   */
  labelPosition?: "before" | "after";
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the radio will change its appearence, showing that the value is required.
   */
  required?: boolean;
  /**
   * This function will be called when the user clicks the radio. The new value will
   * be passed as a parameter.
   */
  onClick?: (val: boolean) => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
};

export default Props;
