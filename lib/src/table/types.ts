type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * The center section of the table. Can be used to render custom
   * content in this area.
   */
  children: React.ReactNode;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Determines the visual style and layout
   * - "default": The default mode with big spacing
   * - "reduced": A reduced mode with minimal spacing for dense tables
   */
  mode?: "default" | "reduced";
};

export default Props;
