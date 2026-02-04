import React from "react";

export type PopoverPropsType = {
  /** Action that triggers the popover to open. */
  actionToOpen?: "click" | "hover";
  /** Alignment of the popover relative to the trigger element. */
  align?: "start" | "center" | "end";
  /** Set to true if child controls the events. It will render the child directly without wrapping it. */
  asChild?: boolean;
  /** Element that triggers the popover and works as the anchor. */
  children: React.ReactNode;
  /** Whether the popover should display a tip (arrow). */
  hasTip?: boolean;
  /** Controlled open state of the popover. If it is left undefined, it will be uncontrolled. */
  isOpen?: boolean;
  /** Callback function when the popover is opened.
   * Used only in controlled mode and if the trigger lacks the events to manage the controlled behavior. */
  onOpen?: () => void;
  /** Callback function when the popover is closed. */
  onClose?: () => void;
  /** Content to be displayed inside the popover. */
  popoverContent: React.ReactNode;
  /** Side of the trigger where the popover will appear. */
  side?: "top" | "bottom" | "left" | "right";
};
