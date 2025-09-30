import styled from "@emotion/styled";
import GridPropsType, { GridItemProps } from "./types";

const Grid = styled.div<GridPropsType>`
  display: grid;
  ${(props) => `
    ${props.templateColumns ? `grid-template-columns: ${props.templateColumns.join(" ")};` : ""}
    ${props.templateRows ? `grid-template-rows: ${props.templateRows.join(" ")};` : ""}
    ${props.templateAreas ? `grid-template-areas: ${props.templateAreas.map((row) => `"${row}"`).join(" ")};` : ""}
    ${props.autoColumns ? `grid-auto-columns: ${props.autoColumns};` : ""}
    ${props.autoRows ? `grid-auto-rows: ${props.autoRows};` : ""}
    ${props.autoFlow ? `grid-auto-flow: ${props.autoFlow};` : ""}
    ${props.areaName ? `grid-area: ${props.areaName};` : ""}
    ${
      props.gap != null
        ? typeof props.gap === "string"
          ? `gap: ${props.gap};`
          : `row-gap: ${props.gap.rowGap ?? ""}; column-gap: ${props.gap.columnGap ?? ""};`
        : ""
    }
    ${
      props.placeItems
        ? typeof props.placeItems === "string"
          ? `place-items: ${props.placeItems};`
          : `align-items: ${props.placeItems.alignItems ?? ""}; justify-items: ${props.placeItems.justifyItems ?? ""};`
        : ""
    }
    ${
      props.placeContent
        ? typeof props.placeContent === "string"
          ? `place-content: ${props.placeContent};`
          : `align-content: ${props.placeContent.alignContent ?? ""}; justify-content: ${props.placeContent.justifyContent ?? ""};`
        : ""
    }
    ${
      props.column
        ? `grid-column: ${
            typeof props.column === "string" || typeof props.column === "number"
              ? props.column
              : `${props.column.start} / ${props.column.end};`
          };`
        : ""
    }
    ${
      props.row
        ? `grid-row: ${
            typeof props.row === "string" || typeof props.row === "number"
              ? props.row
              : `${props.row.start} / ${props.row.end};`
          };`
        : ""
    }
    ${
      props.placeSelf
        ? typeof props.placeSelf === "string"
          ? `place-self: ${props.placeSelf};`
          : `align-self: ${props.placeSelf.alignSelf ?? ""}; justify-self: ${props.placeSelf.justifySelf ?? ""};`
        : ""
    }
  `}
`;

const GridItem = styled.div<GridItemProps>`
  ${(props) => `
    ${props.areaName ? `grid-area: ${props.areaName};` : ""}
    ${
      props.column
        ? `grid-column: ${
            typeof props.column === "string" || typeof props.column === "number"
              ? props.column
              : `${props.column.start} / ${props.column.end};`
          };`
        : ""
    }
    ${
      props.row
        ? `grid-row: ${
            typeof props.row === "string" || typeof props.row === "number"
              ? props.row
              : `${props.row.start} / ${props.row.end};`
          };`
        : ""
    }
    ${
      props.placeSelf
        ? typeof props.placeSelf === "string"
          ? `place-self: ${props.placeSelf};`
          : `align-self: ${props.placeSelf.alignSelf ?? ""}; justify-self: ${props.placeSelf.justifySelf ?? ""};`
        : ""
    }
  `}
`;

const DxcGrid = (props: GridPropsType) => <Grid {...props} />;
DxcGrid.Item = GridItem;

export default DxcGrid;
