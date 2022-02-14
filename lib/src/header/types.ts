type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Wether a contrast line should appear at the bottom of the header.
   */
  underlined?: boolean;
  /**
   * Content showed in the header. Take into account that the component applies styles
   * for the first child in the content, so we recommend the use of React.Fragment
   * to be applied correctly. Otherwise, the styles can be modified.
   */
  content?: React.ReactNode;
  /**
   * Content showed in responsive version. It receives the close menu handler that can
   * be used to add that functionality when a element is clicked.
   */
  responsiveContent?: (closeHandler: () => void) => React.ReactNode;
  /**
   * This function will be called when the user clicks the header logo.
   */
  onClick?: () => void;
  /**
   * Size of the bottom margin to be applied to the header 
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   */
  margin?: Space;
  /**
   * Size of the padding to be applied to the custom area of the component 
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in
   * order to specify different padding sizes.
   */
  padding?: Space | Padding;
  /**
   * Value of the tabindex for all interactuable elements, except those inside the
   * custom area.
   */
  tabIndex?: number;
};

export default Props;
