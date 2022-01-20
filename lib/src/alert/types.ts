type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Uses on of the available alert types.
   */
  type?: "info" | "confirm" | "warning" | "error";
  /**
   * Uses on of the available alert modes:
   *    'inline': If onClose function is received, close button will be visible and the function will be executed when it's clicked. 
   *              There is no overlay layer. Position should be decided by the user.
   *    'modal':  The alert will be displayed in the middle of the screen with an overlay layer behind. 
   *              The onClose function will be executed when the X button or the overlay is clicked. d
   *              The user has the responsibility of hidding the modal in the onClose function, otherwise the modal will remain visible.
   */
  mode?: "inline" | "modal";
  /**
   * Text to display after icon and alert type and before content.
   */
  inlineText?: string;
  /**
   * This function will be called when the user clicks the close button. If there is no function we should close the alert by default.
   */
  onClose?: () => void;
  /**
   * The details section of the alert. Can be used to render custom content in this area.
   */
  children?: React.ReactNode;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component ('small' | 'medium' | 'large' | 'fillParent' | 'fitContent').
   */
  size?: Size;
  /**
   * Tabindex value given to the close button.
   */
  tabIndex?: number;
};

export default Props;
