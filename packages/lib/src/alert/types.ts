import { ReactNode } from "react";
import { SVG } from "../common/utils";

type Action = {
  /**
   * The icon of the action. It can be a string with the name of the icon or an SVG component.
   */
  icon?: string | SVG;
  /**
   * The label of the action.
   */
  label: string;
  /**
   * The function that will be executed when the user clicks on the action button.
   */
  onClick: () => void;
};

type Message = {
  /**
   * The function that will be executed when the user clicks on the close action button.
   */
  onClose?: () => void;
  /**
   * The content of the message. The only Halstack component allowed within the text of an alert is the Link component,
   * and it should be used exclusively to direct users to additional resources or relevant pages.
   * No other components are permitted within the content of an alert.
   */
  text: ReactNode;
};

type CommonProps = {
  /**
   * If true, the alert will have a close button that will remove the message from the alert,
   * only in banner and inline modes. The rest of the functionality will depend
   * on the onClose event of each message (e.g. closing the modal alert).
   */
  closable?: boolean;
  /**
   * Primary action of the alert.
   */
  primaryAction?: Action;
  /**
   * Secondary action of the alert.
   */
  secondaryAction?: Action;
  /**
   * Specifies the semantic meaning of the alert.
   */
  semantic?: "error" | "info" | "success" | "warning";
  /**
   * Title of the alert.
   */
  title: string;
};

type ModeSpecificProps =
  | {
      /**
       * List of messages to be displayed. Each message has a close action that will,
       * apart from remove from the alert the current message, call the onClose if it is defined.
       * If the message is an array, the alert will show a navigation bar to move between the messages.
       * The modal mode only allows one message per alert. In this case, the message must be an object
       * and the presence of the onClose attribute is mandatory, since the management of the closing
       * of the alert relies completely on the user.
       */
      message?: Message | Message[];
      /**
       * The mode of the alert.
       */
      mode?: "inline" | "banner";
    }
  | {
      /**
       * List of messages to be displayed. Each message has a close action that will,
       * apart from remove from the alert the current message, call the onClose if it is defined.
       * If the message is an array, the alert will show a navigation bar to move between the messages.
       * The modal mode only allows one message per alert. In this case, the message must be an object
       * and the presence of the onClose attribute is mandatory, since the management of the closing
       * of the alert relies completely on the user.
       */
      message: Required<Message>;
      /**
       * The mode of the alert.
       */
      mode: "modal";
    };

type Props = CommonProps & ModeSpecificProps;

export type ModalAlertWrapperProps = {
  condition: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export default Props;
