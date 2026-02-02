import React from "react";

export type PopoverPropsType = {
  /** Alignment of the popover relative to the trigger element. */
  align?: "start" | "center" | "end";
  /** Element that triggers the popover. */
  children: React.ReactNode;
  /** Whether the popover should display a tip (arrow). */
  hasTip?: boolean;
  /** Controlled open state of the popover. If it is left undefined, it will be uncontrolled. */
  isOpen?: boolean;
  /** Callback function when the popover is opened or closed.
   * Used only in controlled mode and if the trigger lacks the events to manage the controlled behavior. */
  onTrigger?: () => void;
  /** Action that triggers the popover to open. */
  actionToOpen?: "click" | "hover";
  /** Content to be displayed inside the popover. */
  popoverContent: React.ReactNode;
  /** Side of the trigger where the popover will appear. */
  side?: "top" | "bottom" | "left" | "right";
};
