type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * If true, the component is checked. If undefined the component will be
   * uncontrolled and the value will be managed internally by the component.
   */
  checked?: boolean;
  /**
   * Will be passed to the value attribute of the html input element.
   * When inside a form, this value will be only submitted if the checkbox is checked.
   */
  value?: string;
  /**
   * Text to be placed next to the checkbox.
   */
  label: string;
  /**
   * Whether the label should appear after or before the checkbox.
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
   * If true, the checkbox will change its appearence, showing that the value is required.
   */
  required?: boolean;
  /**
   * This function will be called when the user clicks the checkbox.
   * The new value will be passed as a parameter.
   */
  onChange?: (val: boolean) => void;
  /**
   * Size of the margin to be applied to the component
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent' | 'fitContent').
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

export default Props;
