import React from "react";
import styled from "styled-components";
import GridPropsType from "./types";

const DxcGrid = styled.div<GridPropsType>`
  display: grid;

  // Grid container
  ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns.join(" ")};`}
  ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows.join(" ")};`}
  ${({ templateAreas }) => templateAreas && `grid-template-areas: ${templateAreas.map((row) => `"${row}"`).join(" ")};`}
  ${({ gap }) => gap && `gap: ${typeof gap === "string" ? gap : `${gap.rowGap} ${gap.columnGap}`};`}
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

  // Grid item
  ${({ column }) =>
    column &&
    `grid-column: ${
      typeof column === "string" || typeof column === "number" ? column : `${column.start} / ${column.end};`
    };`}
  ${({ row }) =>
    row && `grid-row: ${typeof row === "string" || typeof row === "number" ? row : `${row.start} / ${row.end};`};`}
  ${({ area }) => area && `grid-area: ${area};`}
  ${({ placeSelf }) =>
    placeSelf &&
    `place-self: ${typeof placeSelf === "string" ? placeSelf : `${placeSelf.alignSelf} ${placeSelf.justifySelf}`};`}
`;

export default DxcGrid;
