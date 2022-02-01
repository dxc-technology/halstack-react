type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Size = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * URL of the image that will be placed in the card component.
   * In case of omission, the image container will not appear and
   * the content will occupy its space.
   */
  imageSrc?: string;
  /**
   * Color of the image background.
   */
  imageBgColor?: string;
  /**
   * Size of the padding to be applied to the image section of the
   * component. You can pass an object with 'top', 'bottom', 'left'
   * and 'right' properties in order to specify different padding sizes.
   */
  imagePadding?: Space | Size;
  /**
   * Whether the image should appear in relation to the content.
   */
  imagePosition?: "before" | "after";
  /**
   * If defined, the tag will be displayed as an anchor, using this prop
   * as "href". Component will show some visual feedback on hover.
   */
  linkHref?: string;
  /**
   * This function will be called when the user clicks the card. Component
   * will show some visual feedback on hover.
   */
  onClick?: () => void;
  /**
   * Whether the image must cover the whole image area of the card.
   */
  imageCover?: boolean;
  /**
   * Size of the margin to be applied to the component. You can pass
   * an object with 'top', 'bottom', 'left' and 'right' properties
   * in order to specify different margin sizes.
   */
  margin?: Space | Size;
  /**
   * Size of the padding to be applied to the content area. You can pass
   * an object with 'top', 'bottom', 'left' and 'right' properties in
   * order to specify different padding sizes.
   */
  contentPadding?: Space | Size;
  /**
   * Value of the tabindex given when there is an href.
   */
  tabIndex?: number;
  /**
   * Whether the card must be outlined.
   */
  outlined?: boolean;
  /**
   * Custom content that will be placed in the card component.
   */
  children?: React.ReactNode;
};

export default Props;
