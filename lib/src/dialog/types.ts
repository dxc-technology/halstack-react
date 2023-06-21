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
