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
   * Alignment applied to children.
   */
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  /**
   * Justification applied to children.
   */
  justify?: "start" | "center" | "end" | "spaceBetween" | "spaceAround" | "spaceEvenly";
  /**
   * If true, children will wrap onto multiple rows.
   */
  wrap?: boolean;
  /**
   * If true, children are shown in reverse order.
   */
  reverse?: boolean;
  /**
   * Custom content inside the row.
   */
  children: React.ReactNode;
};

export default Props;
