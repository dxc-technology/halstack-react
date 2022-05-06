type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Initial state of the switch, only when it is uncontrolled.
   */
  defaultChecked?: boolean;
  /**
   * If true, the component is checked. If undefined, the component will be uncontrolled
   * and the checked attribute will be managed internally by the component.
   */
  checked?: boolean;
  /**
   * Will be passed to the value attribute of the html input element. When inside a form,
   * this value will be only submitted if the switch is checked.
   */
  value?: string;
  /**
   * Text to be placed next to the switch.
   */
  label?: string;
  /**
   * Whether the label should appear after or before the switch.
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
   * This function will be called when the user changes the state of the switch.
   * The new value of the checked attribute will be passed as a parameter.
   */
  onChange?: (checked: boolean) => void;
  /**
   * If true, the component will display '(Optional)' next to the label.
   */
  optional?: boolean;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

export default Props;
