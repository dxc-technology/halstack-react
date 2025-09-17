import { ReactNode } from "react";

type Props = {
  /**
   * If true, the close button will be visible.
   */
  closable?: boolean;
  /**
   * This function will be called when the user clicks the close button.
   * The responsibility of hiding the dialog lies with the user.
   */
  onCloseClick?: () => void;
  /**
   * This function will be called when the user clicks on the background of the modal.
   * The responsibility of hiding the dialog lies with the user.
   */
  onBackgroundClick?: () => void;
  /**
   * If true, the dialog will be displayed over a darker background that covers the content behind.
   */
  overlay?: boolean;
  /**
   * Area within the dialog that can be used to render custom content.
   * We strongly encourage users to not change the
   * tabindex of the inner components or elements. This
   * can lead to unpredictable behaviour for keyboard users, affecting
   * the order of focus and focus locking within the dialog.
   */
  children: ReactNode;
  /**
   * Value of the tabindex applied to the close button.
   * Note that values greater than 0 are strongly discouraged. It can
   * lead to unexpected behaviours with the focus within the dialog.
   */
  tabIndex?: number;
  /**
   * If true the focusLock functionality won't work.
   * @private
   */
  disableFocusLock?: boolean
};

export default Props;
