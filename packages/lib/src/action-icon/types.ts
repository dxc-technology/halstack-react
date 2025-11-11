import { SVG } from "../common/utils";

type Props = {
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Value for the HTML properties title and aria-label.
   */
  title?: string;
  /**
   * Material Symbol name or SVG element as the icon that will be placed next to the label.
   */
  icon: string | SVG;
  /**
   * This function will be called when the user clicks the button.
   */
  onClick?: () => void;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export type RefType = HTMLButtonElement;

export default Props;
