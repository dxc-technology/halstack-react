import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CoreTokens from "../common/coreTokens";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcPaginator from "../paginator/Paginator";
import DxcTable, { DxcActionsCell } from "../table/Table";
import HalstackContext from "../HalstackContext";
import icons from "./Icons";
import ResultsetTablePropsType, { Column, Row } from "./types";

const normalizeSortValue = (sortValue: string | Date | ReactNode) =>
  typeof sortValue === "string" ? sortValue.toUpperCase() : sortValue;

const isDateType = (value: ReactNode | Date): boolean => value instanceof Date;

const sortArray = (index: number, order: "ascending" | "descending", resultset: { id: string; cells: Row }[]) =>
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

const getMinItemsPerPageIndex = (currentPageInternal: number, itemsPerPage: number, page: number) =>
  currentPageInternal === 1 ? 0 : itemsPerPage * (page - 1);

const getMaxItemsPerPageIndex = (minItemsPerPageIndex: number, itemsPerPage: number, resultset: Row[], page: number) =>
  minItemsPerPageIndex + itemsPerPage > resultset.length ? resultset.length : itemsPerPage * page - 1;

const assignIdsToRows = (resultset: Row[]) => {
  if (resultset.length > 0) {
    return resultset.map((row, index) => ({
      cells: row,
      id: `row_${index}`,
    }));
  }
  return [];
};

const DxcResultsetTable = ({
  columns,
  rows,
  hidePaginator = false,
  showGoToPage = true,
  itemsPerPage = 5,
  itemsPerPageOptions,
  itemsPerPageFunction,
  margin,
  tabIndex = 0,
  mode = "default",
}: ResultsetTablePropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);
  const [page, changePage] = useState(1);
  const [sortColumnIndex, changeSortColumnIndex] = useState(-1);
  const [sortOrder, changeSortOrder] = useState<"ascending" | "descending">("ascending");

  const prevRowCountRef = useRef<number>(rows.length);

  const rowsWithIds = useMemo(() => assignIdsToRows(rows), [rows]);

  const minItemsPerPageIndex = useMemo(() => getMinItemsPerPageIndex(page, itemsPerPage, page), [itemsPerPage, page]);
  const maxItemsPerPageIndex = useMemo(
    () => getMaxItemsPerPageIndex(minItemsPerPageIndex, itemsPerPage, rows, page),
    [itemsPerPage, minItemsPerPageIndex, page, rows]
  );

  const sortedResultset = useMemo(
    () => (sortColumnIndex !== -1 ? sortArray(sortColumnIndex, sortOrder, rowsWithIds) : rowsWithIds),
    [sortColumnIndex, sortOrder, rowsWithIds]
  );
  const filteredResultset = useMemo(
    () => sortedResultset && sortedResultset.slice(minItemsPerPageIndex, maxItemsPerPageIndex + 1),
    [sortedResultset, minItemsPerPageIndex, maxItemsPerPageIndex]
  );

  const goToPage = (newPage: number) => {
    changePage(newPage);
  };

  const changeSorting = (columnIndex: number) => {
    changePage(1);
    changeSortColumnIndex(columnIndex);
    changeSortOrder(
      sortColumnIndex === -1 || sortColumnIndex !== columnIndex
        ? "ascending"
        : sortOrder === "ascending"
          ? "descending"
          : "ascending"
    );
  };

  useEffect(() => {
    if (!hidePaginator) {
      if (rows.length === 0) {
        changePage(0);
      } else if (page === 0) {
        changePage(1);
      } else if (rows.length < prevRowCountRef.current) {
        const lastPage = Math.ceil(rows.length / itemsPerPage);
        const prevLastPage = Math.ceil(prevRowCountRef.current / itemsPerPage);
        if (lastPage < prevLastPage) {
          changePage(Math.min(lastPage, page));
        }
      }
      prevRowCountRef.current = rows.length;
    }
  }, [rows.length]);

  return (
    <ThemeProvider theme={colorsTheme.table}>
      <DxcResultsetTableContainer margin={margin}>
        <DxcTable mode={mode}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={`tableHeader_${index}`}
                  aria-sort={column.isSortable ? (sortColumnIndex === index ? sortOrder : "none") : undefined}
                >
                  <HeaderContainer
                    role={column.isSortable ? "button" : undefined}
                    onClick={() => {
                      if (column.isSortable) {
                        changeSorting(index);
                      }
                    }}
                    tabIndex={column.isSortable ? tabIndex : -1}
                    isSortable={column.isSortable}
                    mode={mode}
                    aria-label={column.isSortable ? "Sort column" : undefined}
                  >
                    <span>{column.displayValue}</span>
                    {column.isSortable && (
                      <SortIcon>
                        {sortColumnIndex === index
                          ? sortOrder === "ascending"
                            ? icons.arrowUp
                            : icons.arrowDown
                          : icons.bothArrows}
                      </SortIcon>
                    )}
                  </HeaderContainer>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredResultset.map((row) => (
              <tr key={`resultSetTableCell_${row.id}`}>
                {row.cells.map((cellContent, cellIndex) => (
                  <td key={`resultSetTableCellContent_${cellIndex}`}>{cellContent.displayValue}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </DxcTable>
        {!hidePaginator && rows.length > itemsPerPage && (
          <DxcPaginator
            totalItems={rows.length}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
            itemsPerPageFunction={itemsPerPageFunction}
            currentPage={page}
            showGoToPage={showGoToPage}
            onPageChange={goToPage}
            tabIndex={tabIndex}
          />
        )}
      </DxcResultsetTableContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin: ResultsetTablePropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const DxcResultsetTableContainer = styled.div<{
  margin: ResultsetTablePropsType["margin"];
}>`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const HeaderContainer = styled.span<{
  isSortable: Column["isSortable"];
  mode: ResultsetTablePropsType["mode"];
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.theme.headerTextAlign === "center"
      ? "center"
      : props.theme.headerTextAlign === "right"
        ? "flex-end"
        : "flex-start"};
  gap: ${CoreTokens.spacing_8};
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: ${(props) => (props.isSortable ? "pointer" : "default")};

  ${(props) =>
    props.isSortable &&
    `&:focus {
      outline: #0095ff solid 2px;
    }`}
`;

const SortIcon = styled.span`
  display: flex;
  height: 14px;
  width: 14px;
  color: ${(props) => props.theme.sortIconColor};

  svg {
    height: 100%;
    width: 100%;
  }
`;

DxcResultsetTable.ActionsCell = DxcActionsCell;

export default DxcResultsetTable;
