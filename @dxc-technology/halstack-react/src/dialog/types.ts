export type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
export type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * If true, the close 'x' button will be visible.
   */
  isCloseVisible?: boolean;
  /**
   * This function will be called when the user clicks the close 'x' button.
   * The responsibility of hiding the modal lies with the user.
   */
  onCloseClick?: () => void;
  /**
   * If true, the dialog will be displayed over a darker background that covers the content behind.
   */
  overlay?: boolean;
  /**
   * This function will be called when the user clicks background of the modal.
   * The responsibility of hiding the modal lies with the user.
   */
  onBackgroundClick?: () => void;
  /**
   * @deprecated This prop will be removed shortly, consider using the Inset component for this purpose.
   * Size of the padding to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Padding | Space;
  /**
   * Value of the tabindex given to the close 'x' button.
   */
  tabIndex?: number;
  /**
   * The area inside the dialog. This area can be used to render
   * custom content.
   */
  children: React.ReactNode;
};

export default Props;
