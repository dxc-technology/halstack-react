type Props = {
  /**
   * Space applied between each child.
   */
  gutter?:
    | "none"
    | "xxxsmall"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge";
  /**
   * If true, a divider is shown between children.
   */
  divider?: boolean;
  /**
   * Alignment applied to children.
   */
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  /**
   * Specifies the HTML tag or component that is rendered as the wrapper element.
   */
  as?: React.ElementType;
  /**
   * Custom content inside the stack.
   */
  children: React.ReactNode;
};

export default Props;
