// type Props = {
//   /**
//    * Preferred position for displaying the tooltip. It may adjust automatically based on available space.
//    */
//   position?: "bottom" | "top" | "left" | "right";
//   /**
//    * Text to be displayed inside the tooltip.
//    */
//   label: string;
//   /**
//    * If true, the component will be displayed.
//    */
//   open?: boolean;
//   /**
//    * This function will be called when the tooltip starts being shown.
//    */
//   onOpen?: () => void;
//   /**
//    * This function will be called when the tooltip stops being shown.
//    */
//   onClose?: () => void;
//   /**
//    * Content in which the Tooltip will be displayed.
//    */
//   children: React.ReactNode;
// };

type CommonProps = {
  /**
   * Preferred position for displaying the tooltip. It may adjust automatically based on available space.
   */
  position?: "bottom" | "top" | "left" | "right";
  /**
   * Text to be displayed inside the tooltip.
   */
  label: string;
  /**
   * Content in which the Tooltip will be displayed.
   */
  children: React.ReactNode;
};

type ControlledProps = {
  /**
   * Initial status of the tooltip, only when it is uncontrolled.
   */
  defaultOpen?: never;
  /**
   * If true, the component will be displayed.
   */
  open: boolean;
  /**
   * This function will be called when the tooltip starts being shown.
   */
  onOpen?: () => void;
  /**
   * This function will be called when the tooltip stops being shown.
   */
  onClose?: () => void;
};

type UnControlledProps = {
  /**
   * Initial status of the tooltip, only when it is uncontrolled.
   */
  defaultOpen?: boolean;
  /**
   * If true, the component will be displayed.
   */
  open?: never;
  /**
   * This function will be called when the tooltip starts being shown.
   */
  onOpen?: () => void;
  /**
   * This function will be called when the tooltip stops being shown.
   */
  onClose?: () => void;
};

type Props = CommonProps & (ControlledProps | UnControlledProps);

export type TooltipWrapperProps = {
  condition?: boolean;
  children: React.ReactNode;
  label?: string;
};

export default Props;
