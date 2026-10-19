import BaseProps from "../base-menu/types";

type ContextualMenuProps = Omit<
  BaseProps,
  "displayBorder" | "displayGroupLines" | "displayControlsAfter" | "hasPopOver"
>;

export type { ContextualMenuProps, ContextualMenuProps as default };
