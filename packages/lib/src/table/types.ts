import { ReactNode } from "react";
import { Margin, SVG, Space } from "../common/utils";
import { Option } from "../dropdown/types";

type BaseActionCell = {
  disabled?: boolean;
  tabIndex?: number;
  title: string;
};

type ActionCell = BaseActionCell &
  (
    | {
        icon: string | SVG;
        onClick: () => void;
        options?: never;
      }
    | {
        icon?: never;
        onClick: (value?: string) => void;
        options: Option[];
      }
  );

export type ActionsCellPropsType = {
  /**
   * It represents a list of interactive elements that will work as buttons or as a dropdown. Those with an icon from Material Symbols
   * or a SVG are treated as buttons. If any element lacks an icon and includes options, it is interpreted as a dropdown.
   * Only the first action with options will be displayed and only up to 3 actions.
   * In the case of the dropdown the click function will pass the value assigned to the option.
   */
  actions: ActionCell[];
};

type Props = {
  /**
   * The center section of the table. Can be used to render custom
   * content in this area.
   */
  children: ReactNode;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Determines the visual style and layout
   * - "default": Default table size.
   * - "reduced": More compact table with less spacing for high density information.
   */
  mode?: "default" | "reduced";
};

export default Props;
