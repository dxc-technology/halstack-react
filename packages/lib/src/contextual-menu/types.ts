import BaseProps, { BaseMenuContextProps } from "../base-menu/types";

type ContextualMenuProps = Omit<
  BaseProps,
  "displayBorder" | "displayGroupLines" | "displayControlsAfter" | "hasPopOver"
>;
type ContextualMenuContextProps = Omit<BaseMenuContextProps, "hasPopOver">;

export type { ContextualMenuProps, ContextualMenuContextProps, ContextualMenuProps as default };
