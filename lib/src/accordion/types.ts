type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = HTMLElement & SVGElement;

type Props = {
  /**
   * The panel label.
   */
  label?: string;
  /**
   * If true, the component will be expanded. If undefined, the component will be uncontrolled and its value will be managed internally by the component.
   */
  isExpanded?: boolean;
  /**
   * Element used as the icon that will be placed next to panel label.
   */
  icon?: SVG;
  /**
   * @deprecated URL of the icon that will be placed next to panel label.
   */
  iconSrc?: string;
  /**
   * Assistive text to be placed on the right side of the panel.
   */
  assistiveText?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * This function will be called when the user clicks the icon to open/close the panel.
   * The state of the panel (opened/closed) should be passed as a parameter.
   */
  onChange?: (isExpanded: boolean) => void;
  /**
   * The expanded section of the accordion. This area can be used to render
   * custom content.
   */
  children: React.ReactNode;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Space | Padding;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

export default Props;
