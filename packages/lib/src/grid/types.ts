import { ReactNode } from "react";

type Gap = string | { columnGap?: string; rowGap: string; } | { columnGap: string; rowGap?: string; };
type GridCell = { end: number | string; start: number | string; };
type PlaceSelfValues = "auto" | "baseline" | "center" | "end" | "start" | "stretch";
type PlaceContentValues =
  | "baseline"
  | "center"
  | "end"
  | "normal"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch";
type PlaceItemsValues = "baseline" | "center" | "end" | "normal" | "start" | "stretch";
type PlaceObject<Type, Suffix extends string> = {
  [Property in keyof Type as `${string & Property}${Capitalize<string & Suffix>}`]: Type[Property];
};
type PlaceGeneric<PlaceValues, Element extends string> =
  | PlaceObject<{ align: PlaceValues; justify?: PlaceValues; }, Element>
  | PlaceObject<{ align?: PlaceValues; justify: PlaceValues; }, Element>
  | PlaceValues;

export type GridItemProps = {
  /**
   * Sets the name of an item so that it can be referenced by a template created with the grid-template-areas property.
   */
  areaName?: string;
  /**
   * Sets a custom HTML tag.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Custom content inside the grid container.
   */
  children: ReactNode;
  /**
   * Sets the grid-column CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  column?: number | string | GridCell;
  /**
   * Sets the place-self CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/place-self
   */
  placeSelf?: PlaceGeneric<PlaceSelfValues, "self">;
  /**
   * Sets the grid-row CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  row?: number | string | GridCell;
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
  gap?: Gap;
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
