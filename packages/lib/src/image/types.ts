import { ReactEventHandler } from "react";

type Props = {
  /**
   * Alternative text description displayed when the specified image is not loaded.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt
   * See W3C alt decision tree: https://www.w3.org/WAI/tutorials/images/decision-tree/
   */
  alt: string;
  /**
   * Image legend with a descriptive purpose. It is placed below the image and is complementary to the alt attribute,
   * which is required regardless of the presence of the caption or not.
   */
  caption?: string;
  /**
   * Sets the rendered height of the image.
   */
  height?: string;
  /**
   * If true, the image will be loaded only when it is visible on the screen (lazy loading).
   * Otherwise and by default, the image will be loaded as soon as the component is mounted (eager loading).
   */
  lazyLoading?: boolean;
  /**
   * Sets the object-fit CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   */
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  /**
   * Sets the object-position CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
   */
  objectPosition?: string;
  /**
   * This function will be called when the image fails to load.
   */
  onError?: ReactEventHandler<HTMLImageElement>;
  /**
   * This function will be called when the image is loaded.
   */
  onLoad?: ReactEventHandler<HTMLImageElement>;
  /**
   * One or more strings separated by commas, indicating a set of source sizes.
   * If the srcSet attribute is absent or contains no values with a width descriptor,
   * then this attribute has no effect.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes
   */
  sizes?: string;
  /**
   * URL of the image. This prop is required and must be valid.
   */
  src: string;
  /**
   * List of one or more strings separated by commas indicating a set of possible images for the user agent to use.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset
   */
  srcSet?: string;
  /**
   * Sets the rendered width of the image.
   */
  width?: string;
};

export default Props;
