type Spaces = "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem" | "4rem" | "5rem";
type Gap = { rowGap: Spaces; columnGap: Spaces };

type CommonProps = {
  /**
   * Sets the justify-content CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  /**
   * Sets the align-items CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "center"
    | "baseline";
  /**
   * Sets the align-content CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  /**
   * Sets the align-self CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
};

type Props = CommonProps & {
  /**
   * Sets the flex-direction CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  /**
   * Sets the flex-wrap CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  /**
   * Sets the gap CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gap?: Spaces | Gap;
  /**
   * Sets the order CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/order
   */
  order?: number;
  /**
   * Sets the flex-grow CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
   */
  grow?: number;
  /**
   * Sets the flex-shrink CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
   */
  shrink?: number;
  /**
   * Sets the flex-basis CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
   */
  basis?: string;
  /**
   * Sets a custom HTML tag.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Custom content inside the flex container.
   */
  children: React.ReactNode;
};

export type StyledProps = CommonProps & {
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  $gap?: Spaces | Gap;
  $order?: number;
  $grow?: number;
  $shrink?: number;
  $basis?: string;
};

export default Props;
