type Spaces = "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem" | "4rem" | "5rem";
type Gap = { rowGap: Spaces; columnGap?: Spaces } | { rowGap?: Spaces; columnGap: Spaces } | Spaces;
type GridCell = { start: number | string; end: number | string };

type PlaceSelfValues = "auto" | "start" | "end" | "center" | "stretch" | "baseline";
type PlaceContentValues =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "baseline";
type PlaceItemsValues = "normal" | "start" | "end" | "center" | "stretch" | "baseline";
type PlaceObject<Type, Suffix extends string> = {
  [Property in keyof Type as `${string & Property}${Capitalize<string & Suffix>}`]: Type[Property];
};
type PlaceGeneric<PlaceValues, Element extends string> =
  | PlaceObject<{ justify?: PlaceValues; align: PlaceValues }, Element>
  | PlaceObject<{ justify: PlaceValues; align?: PlaceValues }, Element>
  | PlaceValues;

export type GridItemProps = {
  /**
   * Sets the name of an item so that it can be referenced by a template created with the grid-template-areas property.
   */
  areaName?: string;
  /**
   * Sets the grid-column CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  column?: number | string | GridCell;
  /**
   * Sets the grid-row CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  row?: number | string | GridCell;
  /**
   * Sets the place-self CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/place-self
   */
  placeSelf?: PlaceGeneric<PlaceSelfValues, "self">;
  /**
   * Sets a custom HTML tag.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Custom content inside the grid container.
   */
  children: React.ReactNode;
};

type Props = GridItemProps & {
  /**
   * Sets the grid-auto-columns CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
   */
  autoColumns?: string;
  /**
   * Sets the grid-auto-flow CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
   */
  autoFlow?: "row" | "column" | "row dense" | "column dense";
  /**
   * Sets the grid-auto-rows CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
   */
  autoRows?: string;
  /**
   * Sets the gap CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gap?: Spaces | Gap;
  /**
   * Sets the place-content CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
   */
  placeContent?: PlaceGeneric<PlaceContentValues, "content">;
  /**
   * Sets the place-items CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
   */
  placeItems?: PlaceGeneric<PlaceItemsValues, "items">;
  /**
   * Sets the grid-template-areas CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  templateAreas?: string[];
  /**
   * Sets the grid-template-columns CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  templateColumns?: string[];
  /**
   * Sets the grid-template-rows CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  templateRows?: string[];
};

export default Props;
