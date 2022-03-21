// @ts-nocheck
import React, { useState, useMemo, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import DxcTable from "../table/Table";
import DxcPaginator from "../paginator/Paginator";
import useTheme from "../useTheme";
import ResultsetTablePropsType from "./types";

function normalizeSortValue(sortValue) {
  return typeof sortValue === "string" ? sortValue.toUpperCase() : sortValue;
}

function sortArray(index, order, resultset) {
  return resultset.slice().sort((element1, element2) => {
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
    return order === "desc" ? comparison * -1 : comparison;
  });
}
const getMinItemsPerPageIndex = (currentPageInternal, itemsPerPage, page) =>
  currentPageInternal === 1 ? 0 : itemsPerPage * (page - 1);

const getMaxItemsPerPageIndex = (minItemsPerPageIndex, itemsPerPage, resultset, page) =>
  minItemsPerPageIndex + itemsPerPage > resultset.length ? resultset.length : itemsPerPage * page - 1;

const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </svg>
);

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
);

const BothArrows = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
  </svg>
);

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
  const [sortColumnIndex, changeSortColumnIndex] = useState("");
  const [sortOrder, changeSortOrder] = useState("asc");

  const minItemsPerPageIndex = useMemo(() => getMinItemsPerPageIndex(page, itemsPerPage, page), [itemsPerPage, page]);
  const maxItemsPerPageIndex = useMemo(
    () => getMaxItemsPerPageIndex(minItemsPerPageIndex, itemsPerPage, rows, page),
    [itemsPerPage, minItemsPerPageIndex, page, rows]
  );

  const goToPage = (newPage) => {
    changePage(newPage);
  };
  const changeSorting = (columnIndex) => {
    changePage(1);
    changeSortColumnIndex(columnIndex);
    changeSortOrder(
      sortColumnIndex === "" || sortColumnIndex !== columnIndex ? "asc" : sortOrder === "asc" ? "desc" : "asc"
    );
  };
  const getIconForSortableColumn = (clickedColumnIndex) => {
    return sortColumnIndex === clickedColumnIndex ? sortOrder === "asc" ? <ArrowUp /> : <ArrowDown /> : <BothArrows />;
  };

  useEffect(() => {
    if (rows.length > 0) {
      changePage(1);
    } else {
      changePage(0);
    }
  }, [rows.length, itemsPerPage]);

  const sortedResultset = useMemo(
    () => (sortColumnIndex !== "" ? sortArray(sortColumnIndex, sortOrder, rows) : rows),
    [sortColumnIndex, sortOrder, rows]
  );
  const filteredResultset = useMemo(
    () => sortedResultset && sortedResultset.slice(minItemsPerPageIndex, maxItemsPerPageIndex + 1),
    [sortedResultset, minItemsPerPageIndex, maxItemsPerPageIndex]
  );

  return (
    <ThemeProvider theme={colorsTheme.table}>
      <DxcResultsetTableContainer margin={margin}>
        <TableContainer>
          <DxcTable>
            <HeaderRow>
              <tr>
                {columns.map((column, index) => (
                  <TableHeader key={`tableHeader_${index}`}>
                    <HeaderContainer
                      key={`headerContainer_${index}`}
                      onClick={() => column.isSortable && changeSorting(index)}
                      tabIndex={column.isSortable ? tabIndex : -1}
                      isSortable={column.isSortable}
                    >
                      <TitleDiv isSortable={column.isSortable}>{column.displayValue}</TitleDiv>
                      {column.isSortable && <SortIcon>{getIconForSortableColumn(index)}</SortIcon>}
                    </HeaderContainer>
                  </TableHeader>
                ))}
              </tr>
            </HeaderRow>
            <TableRowGroup>
              {filteredResultset.map((cells, index) => (
                <tr key={`resultSetTableCell_${index}`}>
                  {cells.map((cellContent, index) => (
                    <td key={`resultSetTableCellContent_${index}`}>{cellContent.displayValue}</td>
                  ))}
                </tr>
              ))}
            </TableRowGroup>
          </DxcTable>
        </TableContainer>
        <PaginatorContainer>
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
        </PaginatorContainer>
      </DxcResultsetTableContainer>
    </ThemeProvider>
  );
};
const TableContainer = styled.div`
  & table {
    table-layout: auto;
  }
`;
const PaginatorContainer = styled.div``;
const TableRowGroup = styled.tbody`
  > div:nth-child(1) {
    position: absolute;
    left: calc(50% - 68.5px);
    bottom: calc(50% - 68.5px - 30px);
  }
  & tr {
    height: ${(props) => props.theme.rowHeight || "70px"};
  }
`;
const SortIcon = styled.div`
  top: 409px;
  left: 390px;
  height: 14px;
  cursor: pointer;
  color: ${(props) => props.theme.sortIconColor};

  svg {
    height: 100%;
    width: 100%;
  }
`;

const TitleDiv = styled.div`
  cursor: ${(props) => (props.isSortable && "pointer") || "default"};
`;
const TableHeader = styled.th``;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.theme.headerTextAlign === "center"
      ? "center"
      : props.theme.headerTextAlign === "right"
      ? "flex-end"
      : "flex-start"};
  width: fit-content;
  :focus {
    outline: ${(props) => (props.isSortable ? "#0095ff solid 2px" : "")};
    outline-offset: 4px;
  }
`;
const HeaderRow = styled.thead`
  height: 60px;
`;
const DxcResultsetTableContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizeBase};
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

export default DxcResultsetTable;
