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
type SVG = React.SVGProps<SVGSVGElement>;

type Props = {
  /**
   * The panel label.
   */
  label: string;
  /**
   * Represents the state of the panel. When true, the component will be
   * expanded. If undefined, the component will be uncontrolled and its
   * value will be managed internally by the component.
   */
  isExpanded?: boolean;
  /**
   * Element or path used as the icon that will be placed next to panel label.
   */
  icon?: string | SVG;
  /**
   * Assistive text to be placed on the right side of the panel.
   */
  assistiveText?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * This function will be called when the user clicks the accordion to expand or collapse
   * the panel. The new state of the panel will be passed as a parameter.
   */
  onChange?: (isExpanded: boolean) => void;
  /**
   * The expanded panel of the accordion. This area can be used to render
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
