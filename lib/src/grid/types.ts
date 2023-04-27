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
  areaName?: string;
  column?: number | string | GridCell;
  row?: number | string | GridCell;
  placeSelf?: PlaceGeneric<PlaceSelfValues, "self">;
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
};

type Props = GridItemProps & {
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: "row" | "column" | "row dense" | "column dense";
  gap?: Spaces | Gap;
  placeContent?: PlaceGeneric<PlaceContentValues, "content">;
  placeItems?: PlaceGeneric<PlaceItemsValues, "items">;
  templateAreas?: string[];
  templateColumns?: string[];
  templateRows?: string[];
};

export default Props;
