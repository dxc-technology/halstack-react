import { ReactNode } from "react";
import DxcImagePropsType from "../image/types";

type Size = {
  width?: "fillParent" | "fitContent";
  height?: "fillParent" | "fitContent";
};

type SizeConfig = {
  width?: string;
  height?: string;
};

type Props = {
  /**
   * Custom content that will be placed inside the component.
   */
  children?: ReactNode;
  /**
   * Defines the direction of the content inside the card. It can be set to "row" or "column". The default value is "column".
   */
  direction?: "row" | "column";
  /**
   * Defines the size of the card when it is empty.
   */
  emptySize?: SizeConfig;
  /**
   * URL to navigate to when the card is clicked.
   */
  href?: string;
  /**
   * Position of the image inside the card. It can be set to "before" or "after" the content.
   */
  imagePosition?: "before" | "after";
  /**
   * Image to be displayed inside the card.
   */
  image?: DxcImagePropsType;
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
  loadingSize?: SizeConfig;
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
  onChange?: (selected: boolean) => void;
  /**
   * Callback function that is called when the card is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * If true, the card can be selected. When the card is clicked, the onChange callback will be called with the new selected state of the card.
   */
  selectable?: boolean;
  /**
   * If true, the card is selected.
   */
  selected?: boolean;
  /**
   * Defines the size of the card. Width and height can be set to "fillParent" or "fitContent".
   * The default value is { width: "fitContent", height: "fitContent" }.
   */
  size?: Size;
  tabIndex?: number;
};

export default Props;
