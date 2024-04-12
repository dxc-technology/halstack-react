import React from "react";
import styled from "styled-components";
import GridPropsType, { GridItemProps } from "./types";

const DxcGrid = (props: GridPropsType): JSX.Element => <Grid {...props} />;

const Grid = styled.div<GridPropsType>`
  display: grid;
  ${({ templateColumns }) =>
    templateColumns && `grid-template-columns: ${templateColumns.join(" ")};`}
  ${({ templateRows }) =>
    templateRows && `grid-template-rows: ${templateRows.join(" ")};`}
  ${({ templateAreas }) =>
    templateAreas &&
    `grid-template-areas: ${templateAreas.map((row) => `"${row}"`).join(" ")};`}
  ${({ autoColumns }) => autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${({ autoRows }) => autoRows && `grid-auto-rows: ${autoRows};`}
  ${({ autoFlow }) => autoFlow && `grid-auto-flow: ${autoFlow};`}
  ${({ gap }) =>
    gap != null &&
    (typeof gap === "string"
      ? `gap: ${gap};`
      : `row-gap: ${gap.rowGap ?? ""}; column-gap: ${gap.columnGap ?? ""};`)}
  ${({ placeItems }) =>
    placeItems &&
    (typeof placeItems === "string"
      ? `place-items: ${placeItems}`
      : `align-items: ${placeItems.alignItems ?? ""}; justify-items: ${placeItems.justifyItems ?? ""};`)}
  ${({ placeContent }) =>
    placeContent &&
    (typeof placeContent === "string"
      ? `place-content: ${placeContent}`
      : `align-content: ${placeContent.alignContent ?? ""}; justify-content: ${placeContent.justifyContent ?? ""};`)}
      
  ${({ areaName }) => areaName && `grid-area: ${areaName};`}
  ${({ column }) =>
    column &&
    `grid-column: ${
      typeof column === "string" || typeof column === "number"
        ? column
        : `${column.start} / ${column.end};`
    };`}
  ${({ row }) =>
    row &&
    `grid-row: ${typeof row === "string" || typeof row === "number" ? row : `${row.start} / ${row.end};`};`}
  ${({ placeSelf }) =>
    placeSelf &&
    (typeof placeSelf === "string"
      ? `place-self: ${placeSelf}`
      : `align-self: ${placeSelf.alignSelf ?? ""}; justify-self: ${placeSelf.justifySelf ?? ""};`)}
`;

const GridItem = styled.div<GridItemProps>`
  ${({ areaName }) => areaName && `grid-area: ${areaName};`}
  ${({ column }) =>
    column &&
    `grid-column: ${
      typeof column === "string" || typeof column === "number"
        ? column
        : `${column.start} / ${column.end};`
    };`}
  ${({ row }) =>
    row &&
    `grid-row: ${typeof row === "string" || typeof row === "number" ? row : `${row.start} / ${row.end};`};`}
  ${({ placeSelf }) =>
    placeSelf &&
    (typeof placeSelf === "string"
      ? `place-self: ${placeSelf}`
      : `align-self: ${placeSelf.alignSelf ?? ""}; justify-self: ${placeSelf.justifySelf ?? ""};`)}
`;

DxcGrid.Item = GridItem;
export default DxcGrid;
