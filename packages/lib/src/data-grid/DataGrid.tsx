import { useContext, useEffect, useMemo, useState } from "react";
import DataGrid, { SortColumn } from "react-data-grid";
import styled, { ThemeProvider } from "styled-components";
import DataGridPropsType, { HierarchyGridRow, GridRow, ExpandableGridRow } from "./types";
import "react-data-grid/lib/styles.css";
import {
  convertToRDGColumns,
  rowKeyGetter,
  sortRows,
  renderSortStatus,
  addRow,
  renderCheckbox,
  renderHeaderCheckbox,
  sortHierarchyRows,
  renderHierarchyTrigger,
  renderExpandableTrigger,
  getCustomSortFn,
  getPaginatedNodes,
  getMinItemsPerPageIndex,
  getMaxItemsPerPageIndex,
} from "./utils";
import DxcPaginator from "../paginator/Paginator";
import { DxcActionsCell } from "../table/Table";
import HalstackContext from "../HalstackContext";

const DxcDataGrid = ({
  columns,
  rows,
  selectable,
  expandable,
  onSelectRows,
  selectedRows,
  uniqueRowId,
  summaryRow,
  onGridRowsChange,
  showPaginator = false,
  showGoToPage = true,
  itemsPerPage = 5,
  itemsPerPageOptions,
  itemsPerPageFunction,
  onSort,
  onPageChange,
  totalItems,
}: DataGridPropsType): JSX.Element => {
  const [rowsToRender, setRowsToRender] = useState<GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]>(rows);
  const colorsTheme = useContext(HalstackContext);
  const [page, changePage] = useState(1);

  const goToPage = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
    changePage(newPage);
  };

  const handleSortChange = (newSortColumns: SortColumn[]) => {
    if (onSort) {
      if (newSortColumns[0]) {
        const { columnKey, direction } = newSortColumns[0];
        onSort({ columnKey, direction });
      } else {
        onSort();
      }
    }
    setSortColumns(newSortColumns);
  };

  // Process columns prop into usable columns based on other props
  const columnsToRender = useMemo(() => {
    let expectedColumns = columns.map((column) => convertToRDGColumns(column, summaryRow));
    if (expandable) {
      expectedColumns = [
        {
          key: "expanded",
          name: "",
          maxWidth: 36,
          width: 36,
          minWidth: 36,
          colSpan(args) {
            return args.type === "ROW" && args.row.isExpandedChildContent ? columns.length + 1 : undefined;
          },
          renderCell({ row }) {
            if (row.isExpandedChildContent) {
              // if it is expanded content
              return row.expandedChildContent || null;
            }
            // if row has expandable content
            return (
              <ActionContainer id="action">
                {row.expandedContent && renderExpandableTrigger(row, rowsToRender, uniqueRowId, setRowsToRender)}
              </ActionContainer>
            );
          },
        },
        ...expectedColumns,
      ];
    }
    if (!expandable && rows.some((row) => Array.isArray(row.childRows) && row.childRows.length > 0) && uniqueRowId) {
      // only the first column will be clickable and will expand the rows
      const firstColumnKey = expectedColumns[0]?.key;
      if (firstColumnKey) {
        expectedColumns[0] = {
          ...expectedColumns[0]!,
          renderCell({ row }) {
            if ((row as HierarchyGridRow).childRows?.length) {
              return (
                <HierarchyContainer level={typeof row.rowLevel === "number" ? row.rowLevel : 0}>
                  {renderHierarchyTrigger(rowsToRender, row, uniqueRowId, firstColumnKey, setRowsToRender)}
                </HierarchyContainer>
              );
            }
            return (
              <HierarchyContainer level={typeof row.rowLevel === "number" ? row.rowLevel : 0} className="ellipsis-cell">
                {row[firstColumnKey]}
              </HierarchyContainer>
            );
          },
        };
      }
    }
    if (selectable) {
      expectedColumns = [
        {
          key: "selected",
          name: "",
          maxWidth: 36,
          width: 36,
          minWidth: 36,
          renderCell({ row }) {
            if (!row.isExpandedChildContent) {
              return (
                <ActionContainer id="action">
                  {renderCheckbox(rows, row, uniqueRowId, selectedRows, onSelectRows)}
                </ActionContainer>
              );
            }
            return null;
          },
          renderHeaderCell: () => (
            <ActionContainer id="action">
              {renderHeaderCheckbox(rows, uniqueRowId, selectedRows, colorsTheme, onSelectRows)}
            </ActionContainer>
          ),
        },
        ...expectedColumns,
      ];
    }
    return expectedColumns;
  }, [selectable, expandable, columns, rowsToRender, onSelectRows, rows, summaryRow, uniqueRowId, selectedRows]);
  // array with the order of the columns
  const [columnsOrder, setColumnsOrder] = useState((): number[] => columnsToRender.map((_, index) => index));
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

  useEffect(() => {
    setColumnsOrder(Array.from({ length: columnsToRender.length }, (_, index) => index));
  }, [columnsToRender.length]);

  useEffect(() => {
    setRowsToRender(rows);
  }, [rows]);

  const reorderedColumns = useMemo(
    () =>
      // Array ordered by columnsOrder
      columnsOrder.map((index) => columnsToRender[index]!),
    [columnsOrder, columnsToRender]
  );

  const onColumnsReorder = (sourceKey: string, targetKey: string) => {
    setColumnsOrder((currentColumnsOrder) => {
      const sourceColumnOrderIndex = currentColumnsOrder.findIndex(
        (index) => columnsToRender[index]?.key === sourceKey
      );
      const targetColumnOrderIndex = currentColumnsOrder.findIndex(
        (index) => columnsToRender[index]?.key === targetKey
      );
      const newColumnsOrder = currentColumnsOrder.slice();
      if (sourceColumnOrderIndex === -1 || targetColumnOrderIndex === -1) {
        return currentColumnsOrder; // Return the current order if an error is found
      }
      const itemToMove = currentColumnsOrder[sourceColumnOrderIndex];
      if (itemToMove != null) {
        newColumnsOrder.splice(sourceColumnOrderIndex, 1);
        newColumnsOrder.splice(targetColumnOrderIndex, 0, itemToMove);
      }
      return newColumnsOrder;
    });
  };

  const onRowsChange = (newRows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => {
    // call function to change rows, like when they have been edited
    if (typeof onGridRowsChange === "function") {
      onGridRowsChange(newRows);
    }
  };

  const sortedRows = useMemo((): readonly GridRow[] | HierarchyGridRow[] | ExpandableGridRow[] => {
    const sortFunctions = getCustomSortFn(columns);
    if (!onSort) {
      if (expandable && sortColumns.length > 0) {
        const innerSortedRows = sortRows(
          rowsToRender.filter((row) => !row.isExpandedChildContent),
          sortColumns,
          sortFunctions
        );
        rowsToRender
          .filter((row) => row.isExpandedChildContent)
          .map((expandedRow) =>
            addRow(
              innerSortedRows,
              innerSortedRows.findIndex((trigger) => rowKeyGetter(trigger, uniqueRowId) === expandedRow.triggerRowKey) +
                1,
              expandedRow
            )
          );
        return innerSortedRows;
      }
      if (!expandable && sortColumns.length > 0 && uniqueRowId) {
        return sortHierarchyRows(rowsToRender, sortColumns, sortFunctions, uniqueRowId);
      }
    }
    return rowsToRender;
  }, [expandable, rowsToRender, sortColumns, uniqueRowId]);

  const minItemsPerPageIndex = useMemo(() => getMinItemsPerPageIndex(page, itemsPerPage, page), [itemsPerPage, page]);
  const maxItemsPerPageIndex = useMemo(
    () => getMaxItemsPerPageIndex(minItemsPerPageIndex, itemsPerPage, rows, page),
    [itemsPerPage, minItemsPerPageIndex, page, rows]
  );

  const filteredRows = useMemo(() => {
    if (onSort && sortColumns?.length > 0) {
      onSort?.(sortColumns?.[0]);
    }
    return !showPaginator || onPageChange
      ? sortedRows
      : getPaginatedNodes(sortedRows, uniqueRowId, minItemsPerPageIndex, maxItemsPerPageIndex + 1);
  }, [sortedRows, minItemsPerPageIndex, maxItemsPerPageIndex]);

  return (
    <ThemeProvider theme={colorsTheme.dataGrid}>
      <DataGridContainer paginatorRendered={showPaginator && (totalItems ?? rows.length) > itemsPerPage}>
        <DataGrid
          columns={reorderedColumns}
          rows={filteredRows}
          onColumnsReorder={onColumnsReorder}
          onRowsChange={onRowsChange}
          renderers={{ renderSortStatus }}
          sortColumns={sortColumns}
          onSortColumnsChange={handleSortChange}
          rowKeyGetter={(row) => (uniqueRowId ? rowKeyGetter(row, uniqueRowId) : "")}
          rowHeight={(row) =>
            row.isExpandedChildContent && typeof row.expandedContentHeight === "number" && row.expandedContentHeight > 0
              ? row.expandedContentHeight
              : (colorsTheme.dataGrid?.dataRowHeight ?? 0)
          }
          selectedRows={selectedRows}
          bottomSummaryRows={summaryRow ? [summaryRow] : undefined}
          headerRowHeight={colorsTheme.dataGrid.headerRowHeight}
          summaryRowHeight={colorsTheme.dataGrid.summaryRowHeight}
          className="fill-grid"
        />
        {showPaginator && (totalItems ?? rows.length) > itemsPerPage && (
          <DxcPaginator
            totalItems={totalItems ?? rows.length}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
            itemsPerPageFunction={itemsPerPageFunction}
            currentPage={page}
            showGoToPage={showGoToPage}
            onPageChange={goToPage}
          />
        )}
      </DataGridContainer>
    </ThemeProvider>
  );
};

const ActionContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 100%;
`;

const HierarchyContainer = styled.div<{
  level: number;
}>`
  padding-left: ${(props) => `calc(${props.theme.dataPaddingLeft} * ${props.level})`};
  button {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.5rem;
    padding: 0px;
    border: 0px;
    width: 100%;
    height: ${(props) => props.theme.dataRowHeight}px;
    background: transparent;
    text-align: left;
    font-size: ${(props) => props.theme.dataFontSize};
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }
`;

const DataGridContainer = styled.div<{
  paginatorRendered: boolean;
}>`
  width: 100%;
  height: ${(props) => (props.paginatorRendered ? `calc(100% - 50px)` : `100%`)};
  .rdg {
    border-radius: 4px;
    height: 100%;
    border: 0px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollBarThumbColor};
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.scrollBarTrackColor};
      border-radius: 6px;
    }
  }
  .rdg-cell:has(> #action) {
    padding: 0px;
  }
  .rdg-cell {
    display: grid;
    align-items: center;
    width: 100%;
    padding: 0px ${(props) => props.theme.dataPaddingRight} 0 ${(props) => props.theme.dataPaddingLeft};
    font-family: ${(props) => props.theme.dataFontFamily};
    font-size: ${(props) => props.theme.dataFontSize};
    font-style: ${(props) => props.theme.dataFontStyle};
    font-weight: ${(props) => props.theme.dataFontWeight};
    color: ${(props) => props.theme.dataFontColor};
    text-transform: ${(props) => props.theme.dataFontTextTransform};
    line-height: ${(props) => props.theme.dataTextLineHeight};
    border-bottom: ${(props) =>
      `${props.theme.rowSeparatorThickness} ${props.theme.rowSeparatorStyle} ${props.theme.rowSeparatorColor}`};
    border-right: ${(props) =>
      `${props.theme.rowSeparatorThickness} ${props.theme.rowSeparatorStyle} ${props.theme.rowSeparatorColor}`};
    background-color: ${(props) => props.theme.dataBackgroundColor};
    outline-color: ${(props) => props.theme.focusColor} !important;
    .rdg-text-editor:focus {
      border-color: transparent;
    }
  }
  .rdg-header-row {
    border-top-left-radius: ${(props) => props.theme.headerBorderRadius};
    border-top-right-radius: ${(props) => props.theme.headerBorderRadius};
    .rdg-cell {
      font-family: ${(props) => props.theme.headerFontFamily};
      font-size: ${(props) => props.theme.headerFontSize};
      font-style: ${(props) => props.theme.headerFontStyle};
      font-weight: ${(props) => props.theme.headerFontWeight};
      color: ${(props) => props.theme.headerFontColor};
      text-transform: ${(props) => props.theme.headerFontTextTransform};
      padding: 0px ${(props) => props.theme.headerPaddingRight} 0 ${(props) => props.theme.headerPaddingLeft};
      line-height: ${(props) => props.theme.headerTextLineHeight};
      background-color: ${(props) => props.theme.headerBackgroundColor};
      .sortIconContainer {
        margin-left: 0.5rem;
        display: flex;
        height: 100%;
        align-items: center;
      }
    }
  }
  .rdg-row {
    .rdg-cell:last-child {
      border-right: 0px;
    }
  }
  .rdg-summary-row {
    background-color: #fafafa;
    .rdg-cell {
      border: 0px;
      font-weight: 600;
    }
  }
  .ellipsis-cell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .align-left {
    text-align: left;
    justify-content: flex-start;
  }
  .align-center {
    text-align: center;
    justify-content: center;
  }
  .align-right {
    text-align: right;
    justify-content: flex-end;
  }
  .header-align-left {
    text-align: left;
  }
  .header-align-center {
    text-align: center;
  }
  .header-align-right {
    text-align: right;
  }
`;

DxcDataGrid.ActionsCell = DxcActionsCell;

export default DxcDataGrid;
