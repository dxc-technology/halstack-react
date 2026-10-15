import { ReactNode } from "react";
import { PrettifyTypes } from "../common/types";

type GridGap = string | { columnGap?: string; rowGap: string } | { columnGap: string; rowGap?: string };
type GridCell = { end: number | string; start: number | string };
type GridPlaceSelfValues = "auto" | "baseline" | "center" | "end" | "start" | "stretch";
type GridPlaceContentValues =
  "baseline" | "center" | "end" | "normal" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
type GridPlaceItemsValues = "baseline" | "center" | "end" | "normal" | "start" | "stretch";
type PlaceObject<Type, Suffix extends string> = {
  [Property in Extract<keyof Type, string> as `${Property}${Capitalize<Suffix>}`]: Type[Property];
};
type PlaceGeneric<PlaceValues, Element extends string> =
  | PlaceObject<{ align: PlaceValues; justify?: PlaceValues }, Element>
  | PlaceObject<{ align?: PlaceValues; justify: PlaceValues }, Element>
  | PlaceValues;

type GridItemProps = {
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
  placeSelf?: PlaceGeneric<GridPlaceSelfValues, "self">;
  /**
   * Sets the grid-row CSS property.
   *
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  row?: number | string | GridCell;
};

type GridProps = PrettifyTypes<
  GridItemProps & {
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
    gap?: GridGap;
    /**
     * Sets the place-content CSS property.
     *
     * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
     */
    placeContent?: PlaceGeneric<GridPlaceContentValues, "content">;
    /**
     * Sets the place-items CSS property.
     *
     * See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
     */
    placeItems?: PlaceGeneric<GridPlaceItemsValues, "items">;
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
  }
>;

export type {
  GridProps as default,
  GridProps,
  GridCell,
  GridItemProps,
  GridGap,
  GridPlaceSelfValues,
  GridPlaceContentValues,
  GridPlaceItemsValues,
};
