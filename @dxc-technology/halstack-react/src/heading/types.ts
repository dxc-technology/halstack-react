type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Defines the heading level from 1 to 5. The styles of the heading are applied according to the level.
   * The html tag of the heading will be the one specified in the 'as' prop.
   * If 'as' is not specified, the html tag of the heading is the one specified in the 'level' prop.
   */
  level?: 1 | 2 | 3 | 4 | 5;
  /**
   * Heading text.
   */
  text: string;
  /**
   * Specifies the html tag of the heading.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  /**
   * Modifies the default weight of the heading.
   */
  weight?: "light" | "normal" | "bold";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
};

export default Props;
