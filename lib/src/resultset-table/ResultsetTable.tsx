import React, { useState, useMemo, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import DxcTable from "../table/Table";
import DxcPaginator from "../paginator/Paginator";
import useTheme from "../useTheme";
import ResultsetTablePropsType, { Column } from "./types";
import icons from "./Icons";
import { getMargin } from "../common/utils";

const normalizeSortValue = (sortValue) => (typeof sortValue === "string" ? sortValue.toUpperCase() : sortValue);

const sortArray = (index, order, resultset) =>
  resultset.slice().sort((element1, element2) => {
    const sortValueA = normalizeSortValue(element1[index].sortValue || element1[index].displayValue);
    const sortValueB = normalizeSortValue(element2[index].sortValue || element2[index].displayValue);
    let comparison = 0;
    if (typeof sortValueA === "object") {
      comparison = -1;
    } else if (typeof sortValueB === "object") {
      comparison = 1;
    } else if (sortValueA > sortValueB) {
      comparison = 1;
    } else if (sortValueA < sortValueB) {
      comparison = -1;
    }
    return order === "descending" ? comparison * -1 : comparison;
  });

const getMinItemsPerPageIndex = (currentPageInternal, itemsPerPage, page) =>
  currentPageInternal === 1 ? 0 : itemsPerPage * (page - 1);

const getMaxItemsPerPageIndex = (minItemsPerPageIndex, itemsPerPage, resultset, page) =>
  minItemsPerPageIndex + itemsPerPage > resultset.length ? resultset.length : itemsPerPage * page - 1;

const DxcResultsetTable = ({
  columns,
  rows,
  showGoToPage = true,
  itemsPerPage = 5,
  itemsPerPageOptions,
  itemsPerPageFunction,
  margin,
  tabIndex = 0,
}: ResultsetTablePropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [page, changePage] = useState(1);
  const [sortColumnIndex, changeSortColumnIndex] = useState(-1);
  const [sortOrder, changeSortOrder] = useState<"ascending" | "descending">("ascending");

  const minItemsPerPageIndex = useMemo(() => getMinItemsPerPageIndex(page, itemsPerPage, page), [itemsPerPage, page]);
  const maxItemsPerPageIndex = useMemo(
    () => getMaxItemsPerPageIndex(minItemsPerPageIndex, itemsPerPage, rows, page),
    [itemsPerPage, minItemsPerPageIndex, page, rows]
  );
  const sortedResultset = useMemo(
    () => (sortColumnIndex !== -1 ? sortArray(sortColumnIndex, sortOrder, rows) : rows),
    [sortColumnIndex, sortOrder, rows]
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
    rows.length > 0 ? changePage(1) : changePage(0);
  }, [rows]);

  return (
    <ThemeProvider theme={colorsTheme.table}>
      <DxcResultsetTableContainer margin={margin}>
        <DxcTable>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={`tableHeader_${index}`}
                  aria-sort={column.isSortable ? (sortColumnIndex === index ? sortOrder : "none") : undefined}
                >
                  <HeaderContainer
                    role={column.isSortable ? "button" : undefined}
                    key={`headerContainer_${index}`}
                    onClick={() => {
                      column.isSortable && changeSorting(index);
                    }}
                    tabIndex={column.isSortable ? tabIndex : -1}
                    isSortable={column.isSortable}
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
            {filteredResultset.map((cells, index) => (
              <tr key={`resultSetTableCell_${page}_${index}`}>
                {cells.map((cellContent, index) => (
                  <td key={`resultSetTableCellContent_${index}`}>{cellContent.displayValue}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </DxcTable>
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
      </DxcResultsetTableContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const DxcResultsetTableContainer = styled.div<{ margin: ResultsetTablePropsType["margin"] }>`
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

const HeaderContainer = styled.span<{ isSortable: Column["isSortable"] }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.theme.headerTextAlign === "center"
      ? "center"
      : props.theme.headerTextAlign === "right"
        ? "flex-end"
        : "flex-start"};
  gap: 8px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 3px;
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

export default DxcResultsetTable;
