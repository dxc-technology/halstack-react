type Spaces = "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem" | "4rem" | "5rem";
type Gap = { rowGap?: Spaces; columnGap?: Spaces };
type GridCell = { start: number | string; end: number | string };

type Props = {
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: "row" | "column" | "row dense" | "column dense";
  gap?: Spaces | Gap;
  placeContent?:
    | {
        alignContent?:
          | "normal"
          | "start"
          | "end"
          | "center"
          | "stretch"
          | "space-between"
          | "space-around"
          | "space-evenly";
        justifyContent?:
          | "normal"
          | "start"
          | "end"
          | "center"
          | "stretch"
          | "space-between"
          | "space-around"
          | "space-evenly";
      }
    | "normal"
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  placeItems?:
    | {
        alignItems?: "normal" | "start" | "end" | "center" | "stretch" | "baseline";
        justifyItems?: "normal" | "start" | "end" | "center" | "stretch";
      }
    | "normal"
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "baseline";
  templateAreas?: string[];
  templateColumns?: string[];
  templateRows?: string[];
  areaName?: string;
  column?: number | string | GridCell;
  row?: number | string | GridCell;
  placeSelf?:
    | {
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
        justifySelf?: "auto" | "start" | "end" | "center" | "stretch";
      }
    | "auto"
    | "start"
    | "end"
    | "center"
    | "stretch";
    
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
};

export default Props;
