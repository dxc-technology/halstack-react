import React, { useContext, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { colors, spaces } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";
import DxcTable from "../table/Table";
import DxcPaginator from "../paginator/Paginator";
import arrowUp from "./arrow_upward-24px_wht.svg";
import arrowDown from "./arrow_downward-24px_wht.svg";
import bothArrows from "./unfold_more-24px_wht.svg";

function sortArray(index, order, resulset) {
  return resulset.slice().sort((element1, element2) => {
    /*
     * return < 0 element1 comes first than element2
     * return 0 leave element1 and element2 unchanged respect to each other
     * return > 0 element2 comes first than element1
     * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
     */
    let varA;
    let varB;
    if (!element1[index].sortValue) {
      varA =
        typeof element1[index].displayValue === "string"
          ? element1[index].displayValue.toUpperCase()
          : element1[index].displayValue;
    } else {
      varA =
        typeof element1[index].sortValue === "string"
          ? element1[index].sortValue.toUpperCase()
          : element1[index].sortValue;
    }
    if (!element2[index].sortValue) {
      varB =
        typeof element2[index].displayValue === "string"
          ? element2[index].displayValue.toUpperCase()
          : element2[index].displayValue;
    } else {
      varB =
        typeof element2[index].sortValue === "string"
          ? element2[index].sortValue.toUpperCase()
          : element2[index].sortValue;
    }
    let comparison = 0;
    if (typeof varA === "object") {
      comparison = -1;
    } else if (typeof varB === "object") {
      comparison = 1;
    } else if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  });
}
const getMinItemsPerPageIndex = (currentPageInternal, itemsPerPage, page) =>
  currentPageInternal === 1 ? 0 : itemsPerPage * (page - 1);

const getMaxItemsPerPageIndex = (minItemsPerPageIndex, itemsPerPage, resulset, page) =>
  minItemsPerPageIndex + itemsPerPage > resulset.length ? resulset.length : itemsPerPage * page - 1;

const DxcResulsetTable = ({ columns, rows, itemsPerPage, margin }) => {
  const colorsTheme = useContext(ThemeContext) || colors;
  const [page, changePage] = useState(1);
  const [sortColumnIndex, changeSortColumnIndex] = useState("");
  const [sortOrder, changeSortOrder] = useState("asc");

  const minItemsPerPageIndex = useMemo(() => getMinItemsPerPageIndex(page, itemsPerPage, page), [page]); //Merece la pena sacar a una función para usar useMemo?
  const maxItemsPerPageIndex = useMemo(() => getMaxItemsPerPageIndex(minItemsPerPageIndex, itemsPerPage, rows, page), [
    page,
  ]);
  const next = () => {
    changePage(page + 1);
  };
  const previous = () => {
    changePage(page - 1);
  };
  const first = () => {
    changePage(1);
  };
  const last = () => {
    changePage(Math.ceil(rows.length / itemsPerPage));
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

  const sortedResulset = useMemo(() => (sortColumnIndex !== "" ? sortArray(sortColumnIndex, sortOrder, rows) : rows), [
    sortColumnIndex,
    sortOrder,
    rows,
  ]);
  const filteredResulset = useMemo(
    () => sortedResulset && sortedResulset.slice(minItemsPerPageIndex, maxItemsPerPageIndex + 1),
    [page, sortColumnIndex, sortOrder]
  );
  return (
    <ThemeProvider theme={colorsTheme}>
      <DxcResulsetTableContainer margin={margin}>
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
              {filteredResulset.map((cells, index) => (
                <tr key={`resulSetTableCell_${index}`}>
                  {cells.map((cellContent, index) => (
                    <td key={`resulSetTableCellContent_${index}`}>{cellContent.displayValue}</td>
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
            currentPage={page}
            nextFunction={next}
            prevFunction={previous}
            firstFunction={first}
            lastFunction={last}
          />
        </PaginatorContainer>
      </DxcResulsetTableContainer>
    </ThemeProvider>
  );
};
const TableContainer = styled.div`
  & table {
    table-layout: fixed;
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
const DxcResulsetTableContainer = styled.div`
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
    background-color: ${(props) => props.theme.darkGrey};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.lightGrey};
    border-radius: 6px;
  }
`;

DxcResulsetTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  itemsPerPage: PropTypes.number,
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
DxcResulsetTable.defaultProps = {
  rows: [],
  columns: [],
  itemsPerPage: 5,
  margin: "xxsmall",
};

export default DxcResulsetTable;
