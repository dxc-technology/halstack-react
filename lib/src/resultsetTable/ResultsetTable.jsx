import React, { useState, useMemo, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import DxcTable from "../table/Table";
import DxcPaginator from "../paginator/Paginator";
import arrowUp from "./arrow_upward-24px_wht.svg";
import arrowDown from "./arrow_downward-24px_wht.svg";
import bothArrows from "./unfold_more-24px_wht.svg";
import useTheme from "../useTheme.js";

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

const DxcResultsetTable = ({ columns, rows, itemsPerPage = 5, itemsPerPageOptions, itemsPerPageFunction, margin }) => {
  const colorsTheme = useTheme();
  const [page, changePage] = useState(1);
  const [sortColumnIndex, changeSortColumnIndex] = useState("");
  const [sortOrder, changeSortOrder] = useState("asc");

  const minItemsPerPageIndex = useMemo(() => getMinItemsPerPageIndex(page, itemsPerPage, page), [itemsPerPage, page]);
  const maxItemsPerPageIndex = useMemo(() => getMaxItemsPerPageIndex(minItemsPerPageIndex, itemsPerPage, rows, page), [
    itemsPerPage,
    minItemsPerPageIndex,
    page,
    rows,
  ]);

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
    return sortColumnIndex === clickedColumnIndex ? (sortOrder === "asc" ? arrowUp : arrowDown) : bothArrows;
  };

  useEffect(() => {
    if (rows.length > 0) {
      changePage(1);
    } else {
      changePage(0);
    }
  }, [rows.length, itemsPerPage]);

  const sortedResultset = useMemo(() => (sortColumnIndex !== "" ? sortArray(sortColumnIndex, sortOrder, rows) : rows), [
    sortColumnIndex,
    sortOrder,
    rows,
  ]);
  const filteredResultset = useMemo(
    () => sortedResultset && sortedResultset.slice(minItemsPerPageIndex, maxItemsPerPageIndex + 1),
    [sortedResultset, minItemsPerPageIndex, maxItemsPerPageIndex]
  );

  return (
    <ThemeProvider theme={colorsTheme.table}>
      <DxcResultsetTableContainer margin={margin}>
        <TableContainer>
          <DxcTable margin={{ top: margin, right: margin, bottom: "0px", left: margin }}>
            <HeaderRow>
              <tr>
                {columns.map((column, index) => (
                  <TableHeader key={`tableHeader_${index}`}>
                    <HeaderContainer
                      key={`headerContainer_${index}`}
                      onClick={() => column.isSortable && changeSorting(index)}
                    >
                      <TitleDiv isSortable={column.isSortable}>{column.displayValue}</TitleDiv>
                      {column.isSortable && <SortIcon src={getIconForSortableColumn(index)} />}
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
        <PaginatorContainer margin={margin}>
          <DxcPaginator
            totalItems={rows.length}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
            itemsPerPageFunction={itemsPerPageFunction}
            currentPage={page}
            showGoToPage={true}
            onPageChange={goToPage}
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
const PaginatorContainer = styled.div`
  margin-left: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-right: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
`;
const TableRowGroup = styled.tbody`
  > div:nth-child(1) {
    position: absolute;
    left: calc(50% - 68.5px);
    bottom: calc(50% - 68.5px - 30px);
  }
  & tr {
    height: 70px;
  }
`;
const SortIcon = styled.img`
  top: 409px;
  left: 390px;
  height: 14px;
  cursor: pointer;
`;

const TitleDiv = styled.div`
  cursor: ${(props) => (props.isSortable && "pointer") || "default"};
`;
const TableHeader = styled.th``;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
const HeaderRow = styled.thead`
  height: 60px;
`;
const DxcResultsetTableContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarThumbColor};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBarTrackColor};
    border-radius: 6px;
  }
`;

DxcResultsetTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  itemsPerPage: PropTypes.number,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  itemsPerPageFunction: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};
DxcResultsetTable.defaultProps = {
  rows: [],
  columns: [],
  itemsPerPage: 5,
  itemsPerPageOptions: null,
  itemsPerPageFunction: null,
  margin: "xxsmall",
};

export default DxcResultsetTable;
