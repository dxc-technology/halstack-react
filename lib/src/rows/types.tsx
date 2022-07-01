import InlineProps from "../inline/types";

export type RowsProps = {
  /**
   * Align columns in the main axis.
   */
  alignX?: "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * Align columns in the cross axis.
   */
  alignY?: "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * Set the component to a different HTML tag.
   */
  as?: React.ElementType;
  /**
   * Add a divider between rows.
   */
  divider?: boolean;
  /**
   * Spacing between rows.
   */
  gutter?: "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "0.75rem" | "1rem" | "1.5rem" | "2rem";
  /**
   * Change the flex-direction of the row to reverse.
   */
  reverse?: boolean;
  /**
   * Single Row.
   */
  children: React.ReactElement[] | React.ReactElement;
};

export type RowProps = InlineProps & {
  /**
   * Fixed width of the single row.
   */
  height?: "auto" | "content" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  /**
   * Custom content inside the row.
   */
  children: React.ReactNode;
};

export type RowContextProps = "auto" | "content" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
