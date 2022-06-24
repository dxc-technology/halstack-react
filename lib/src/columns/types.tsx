export type ColumnsProps = {
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
   * Add a divider between columns.
   */
  divider?: boolean;
  /**
   * Spacing between columns.
   */
  gutter?: "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "0.75rem" | "1rem" | "1.5rem" | "2rem";
  /**
   * Change the flex-direction of the column to reverse.
   */
  reverse?: boolean;
  /**
   * Single column.
   */
  children: React.ReactElement[] | React.ReactElement;
};

export type ColumnProps = {
  /**
   * Fixed width of the single column.
   */
  width?: "auto" | "content" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  /**
   * Custom content inside the column.
   */
  children: React.ReactNode;
  alignX?: "start" | "end" | "center" | "baseline" | "stretch";
};
