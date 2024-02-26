type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;
type Option = {
  /**
   * Option display value.
   */
  label?: string;
  /**
   * Element or path used as the icon that will be placed next to the
   * option label.
   */
  icon?: string | SVG;
  /**
   * Option inner value.
   */
  value: string;
};

export type ActionCellsPropsType = {
  actions: Array<
    | {
        icon: string | SVG;
        title: string;
        onClick: () => void;
        disabled?: boolean;
        tabIndex?: number;
        options?: never;
      }
    | {
        icon?: never;
        title: string;
        onClick: (value?: string) => void;
        disabled?: boolean;
        tabIndex?: number;
        options: Option[];
      }
  >;
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
   * - "default": Table with big spacing, applicable to most cases.
   * - "reduced": Smaller table with minimal spacing for high density information.
   */
  mode?: "default" | "reduced";
};

export default Props;
