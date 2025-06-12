import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcPaginator from "../paginator/Paginator";
import DxcTable, { DxcActionsCell } from "../table/Table";
import ResultsetTablePropsType, { Column } from "./types";
import { assignIdsToRows, calculateWidth, getMinItemsPerPageIndex, getMaxItemsPerPageIndex, sortArray } from "./utils";
import DxcIcon from "../icon/Icon";

const ResultsetTableContainer = styled.div<{
  margin: ResultsetTablePropsType["margin"];
}>`
  width: ${({ margin }) => calculateWidth(margin)};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const SortingHeader = styled.span<{
  isSortable: Column["isSortable"];
  mode: ResultsetTablePropsType["mode"];
}>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  height: var(--height-s);
  width: fit-content;

  ${({ isSortable }) =>
    isSortable
      ? `border-radius: var(--border-radius-xs);
         cursor: pointer;
         &:focus {
           outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);s
         }`
      : "cursor: default;"}
`;

const DxcResultsetTable = ({
  columns,
  hidePaginator = false,
  itemsPerPage = 5,
  itemsPerPageFunction,
  itemsPerPageOptions,
  margin,
  mode = "default",
  rows,
  showGoToPage = true,
  tabIndex = 0,
}: ResultsetTablePropsType) => {
  const [page, setPage] = useState(1);
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
    setPage(newPage);
  };

  const changeSorting = (columnIndex: number) => {
    setPage(1);
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
      if (rows.length === 0) setPage(0);
      else if (page === 0) setPage(1);
      else if (rows.length < prevRowCountRef.current) {
        const lastPage = Math.ceil(rows.length / itemsPerPage);
        const prevLastPage = Math.ceil(prevRowCountRef.current / itemsPerPage);
        if (lastPage < prevLastPage) {
          setPage(Math.min(lastPage, page));
        }
      }
      prevRowCountRef.current = rows.length;
    }
  }, [hidePaginator, page, rows]);

  return (
    <ResultsetTableContainer margin={margin}>
      <DxcTable mode={mode}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                aria-sort={column.isSortable ? (sortColumnIndex === index ? sortOrder : "none") : undefined}
                key={`tableHeader_${index}`}
              >
                <SortingHeader
                  aria-label={column.isSortable ? "Sort column" : undefined}
                  isSortable={column.isSortable}
                  mode={mode}
                  onClick={() => {
                    if (column.isSortable) {
                      changeSorting(index);
                    }
                  }}
                  role={column.isSortable ? "button" : undefined}
                  tabIndex={column.isSortable ? tabIndex : -1}
                >
                  <span>{column.displayValue}</span>
                  {column.isSortable && (
                    <DxcIcon
                      icon={
                        sortColumnIndex === index
                          ? sortOrder === "ascending"
                            ? "arrow_upward"
                            : "arrow_downward"
                          : "unfold_more"
                      }
                    />
                  )}
                </SortingHeader>
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
      {!hidePaginator &&
        (itemsPerPageOptions?.some((itemsPerPage) => rows.length > itemsPerPage) || rows.length > itemsPerPage) && (
          <DxcPaginator
            currentPage={page}
            itemsPerPage={itemsPerPage}
            itemsPerPageFunction={itemsPerPageFunction}
            itemsPerPageOptions={itemsPerPageOptions}
            onPageChange={goToPage}
            showGoToPage={showGoToPage}
            tabIndex={tabIndex}
            totalItems={rows.length}
          />
        )}
    </ResultsetTableContainer>
  );
};

DxcResultsetTable.ActionsCell = DxcActionsCell;
export default DxcResultsetTable;
