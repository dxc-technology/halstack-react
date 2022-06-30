type Props = {
  /**
   * Align children in the main axis.
   */
  alignX?: "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * Align children in the cross axis.
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
  children: React.ReactElement<React.ReactNode>[] | React.ReactElement<React.ReactNode>;
};

export default Props;
