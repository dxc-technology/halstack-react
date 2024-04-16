type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Icon = string | SVG;

type PrefixIconProps =
  | {
      /**
       * Element or path used as icon to be placed before the chip label.
       */
      prefixIcon: Icon;
      /**
       * This function will be called when the prefix is clicked.
       */
      onClickPrefix: () => void;
      /**
       * Element or path used as icon to be placed after the chip label.
       */
      suffixIcon?: Icon;
      /**
       * This function will be called when the suffix is clicked.
       */
      onClickSuffix?: never;
      /**
       * If true, the action icon will be disabled.
       */
      disabled?: boolean;
    }
  | {
      prefixIcon?: Icon;
      onClickPrefix?: never;
      suffixIcon?: never;
      onClickSuffix?: never;
      disabled?: never;
    };

type SuffixIconProps =
  | {
      suffixIcon: Icon;
      onClickSuffix: () => void;
      prefixIcon?: Icon;
      onClickPrefix?: never;
      disabled?: boolean;
    }
  | {
      suffixIcon?: Icon;
      onClickSuffix?: never;
      prefixIcon?: never;
      onClickPrefix?: never;
      disabled?: never;
    };

type CommonProps = {
  /**
   * Text to be placed on the chip.
   */
  label?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

type Props = (PrefixIconProps | SuffixIconProps) & CommonProps;

export default Props;
