import { ReactNode } from "react";
import DxcImagePropsType from "../image/types";

type Size = {
  width?: "fillParent" | "fitContent";
  height?: "fillParent" | "fitContent";
};

type Props = {
  /**
   * Custom content that will be placed inside the component.
   */
  children?: ReactNode;
  /**
   * Initial state of the checkbox, only when it is uncontrolled.
   */
  defaultSelected?: boolean;
  /**
   * Defines the direction of the content inside the card. It can be set to "row" or "column". The default value is "column".
   */
  direction?: "row" | "column";
  /**
   * Defines the size of the card when it is empty.
   */
  emptySize?: {
    width?: string;
    height?: string;
    iconSize?: "small" | "medium" | "large";
  };
  /**
   * URL to navigate to when the card is clicked.
   * If href is defined selectable will be ignored and the link will be always considered as an anchor.
   */
  href?: string;
  /**
   * Image to be displayed inside the card.
   */
  image?: DxcImagePropsType;
  /**
   * Position of the image inside the card. It can be set to "before" or "after" the content.
   */
  imagePosition?: "before" | "after";
  /**
   * If true, the card will be displayed as empty state.
   */
  isEmpty?: boolean;
  /**
   * If true, a loading state will be displayed inside the card.
   */
  isLoading?: boolean;
  /**
   * Defines the size of the loading card when isLoading is true.
   */
  loadingSize?: {
    width?: string;
    height?: string;
  };
  /**
   * Defines the visual style of the card. It can be set to "elevated" or "outlined".
   */
  mode?: "elevated" | "outlined";
  /**
   * If true, the link will open in a new window. href must be provided for this to work.
   */
  newWindow?: boolean;
  /**
   * Callback function that is called when the card is clicked.
   * It receives a boolean value indicating whether the card is selected or not.
   * selectable must be true for this to work.
   */
  onSelectionChange?: (selected: boolean) => void;
  /**
   * Callback function that is called when the card is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * If true, the card can be selected. When the card is clicked, the onSelectionChange callback will be called with the new selected state of the card.
   * If href is defined, the card won't be selectable, even if this prop is true.
   */
  selectable?: boolean;
  /**
   * If true, the card is selected and if defined it will behave as a controlled component.
   */
  selected?: boolean;
  /**
   * Defines the size of the card. Width and height can be set to "fillParent" or "fitContent".
   * The default value is { width: "fitContent", height: "fitContent" }.
   */
  size?: Size;
  /**
   * Specifies the tab index of the card.
   * The default value is 0.
   */
  tabIndex?: number;
};

export default Props;
