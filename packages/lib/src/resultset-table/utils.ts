import { ReactNode } from "react";
import { Row } from "./types";

export const assignIdsToRows = (resultset: Row[]) =>
  resultset.length > 0
    ? resultset.map((row, index) => ({
        cells: row,
        id: `row_${index}`,
      }))
    : [];

export const getMinItemsPerPageIndex = (currentPageInternal: number, itemsPerPage: number, page: number) =>
  currentPageInternal === 1 ? 0 : itemsPerPage * (page - 1);

export const getMaxItemsPerPageIndex = (
  minItemsPerPageIndex: number,
  itemsPerPage: number,
  resultset: Row[],
  page: number
) => (minItemsPerPageIndex + itemsPerPage > resultset.length ? resultset.length : itemsPerPage * page - 1);

export const isDateType = (value: ReactNode | Date): boolean => value instanceof Date;

export const normalizeSortValue = (sortValue: string | Date | ReactNode) =>
  typeof sortValue === "string" ? sortValue.toUpperCase() : sortValue;

export const sortArray = (index: number, order: "ascending" | "descending", resultset: { id: string; cells: Row }[]) =>
  resultset.slice().sort((element1, element2) => {
    const sortValueA = normalizeSortValue(element1.cells[index]?.sortValue || element1.cells[index]?.displayValue);
    const sortValueB = normalizeSortValue(element2.cells[index]?.sortValue || element2.cells[index]?.displayValue);
    let comparison = 0;
    if (sortValueA != null && sortValueB != null) {
      if (typeof sortValueA === "object" && !isDateType(sortValueA)) {
        comparison = -1;
      } else if (typeof sortValueB === "object" && !isDateType(sortValueB)) {
        comparison = 1;
      } else if (sortValueA > sortValueB) {
        comparison = 1;
      } else if (sortValueA < sortValueB) {
        comparison = -1;
      }
    }
    return order === "descending" ? comparison * -1 : comparison;
  });
