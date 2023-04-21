import React from "react";
import styled from "styled-components";
import GridPropsType from "./types";

const DxcGrid = (props: GridPropsType): JSX.Element => <Grid {...props} />;

const getGap = (gap: GridPropsType["gap"]) => {
  if (typeof gap === "string") return `gap: ${gap};`;

  let res = "";
  if (gap.rowGap != null) res += `row-gap: ${gap.rowGap};`;
  if (gap.columnGap != null) res += ` column-gap: ${gap.columnGap};`;
  return res;
};

const Grid = styled.div<GridPropsType>`
  display: grid;
  ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns.join(" ")};`}
  ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows.join(" ")};`}
  ${({ templateAreas }) => templateAreas && `grid-template-areas: ${templateAreas.map((row) => `"${row}"`).join(" ")};`}
  ${({ gap }) => gap != null && getGap(gap)}
  ${({ autoColumns }) => autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${({ autoRows }) => autoRows && `grid-auto-rows: ${autoRows};`}
  ${({ autoFlow }) => autoFlow && `grid-auto-flow: ${autoFlow};`}
  ${({ placeItems }) =>
    placeItems &&
    `place-items: ${
      typeof placeItems === "string" ? placeItems : `${placeItems.alignItems} ${placeItems.justifyItems}`
    };`}
  ${({ placeContent }) =>
    placeContent &&
    `place-content: ${
      typeof placeContent === "string" ? placeContent : `${placeContent.alignContent} ${placeContent.justifyContent}`
    };`}
  ${({ column }) =>
    column &&
    `grid-column: ${
      typeof column === "string" || typeof column === "number" ? column : `${column.start} / ${column.end};`
    };`}
  ${({ row }) =>
    row && `grid-row: ${typeof row === "string" || typeof row === "number" ? row : `${row.start} / ${row.end};`};`}
  ${({ areaName }) => areaName && `grid-area: ${areaName};`}
  ${({ placeSelf }) =>
    placeSelf &&
    `place-self: ${typeof placeSelf === "string" ? placeSelf : `${placeSelf.alignSelf} ${placeSelf.justifySelf}`};`}
`;

export default DxcGrid;
