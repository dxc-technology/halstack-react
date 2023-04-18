type Spaces = "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem" | "4rem" | "5rem";
type Gap = { rowGap: Spaces; columnGap: Spaces };
type GridCell = { start: number | string; end: number | string };

type Props = {
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;

  // Grid Container
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: "row" | "column" | "row dense" | "column dense";
  gap?: Spaces | Gap;
  placeContent?:
    | {
        alignContent: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly";
        justifyContent: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly";
      }
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  placeItems?:
    | {
        alignItems: "start" | "end" | "center" | "stretch" | "baseline";
        justifyItems: "start" | "end" | "center" | "stretch";
      }
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "baseline";
  templateAreas?: string[];
  templateColumns?: string[];
  templateRows?: string[];

  // Grid Item
  area?: string;
  column?: number | string | GridCell;
  row?: number | string | GridCell;
  placeSelf?:
    | {
        alignSelf?: "start" | "end" | "center" | "stretch" | "baseline";
        justifySelf?: "start" | "end" | "center" | "stretch";
      }
    | "start"
    | "end"
    | "center"
    | "stretch";
};

export default Props;
