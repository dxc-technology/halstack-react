import { useEffect, useMemo, useState } from "react";
import DataGrid, { SortColumn } from "react-data-grid";
import styled from "@emotion/styled";
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
import { scrollbarStyles } from "../styles/scroll";

const DataGridContainer = styled.div<{
  paginatorRendered: boolean;
}>`
  width: 100%;
  height: ${(props) => (props.paginatorRendered ? `calc(100% - 50px)` : `100%`)};
  .rdg {
    border-radius: var(--border-radius-s);
    height: 100%;
    border: 0px;
    ${scrollbarStyles}
  }
  .rdg-cell:has(> #small_action) {
    padding: 0px;
  }
  .rdg-cell {
    display: grid;
    align-items: center;
    width: 100%;
    padding: 0px var(--spacing-padding-xs);
    font-family: var(--typography-font-family);
    font-size: var(--typography-label-m);
    font-weight: var(--typography-label-regular);
    color: var(--color-fg-neutral-dark);
    border-bottom: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-lightest);
    border-right: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-lightest);
    background-color: var(--color-bg-neutral-lightest);

    &[aria-selected="true"] {
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    }
    .rdg-text-editor:focus {
      border-color: transparent;
      background-color: var(--color-bg-neutral-lightest);
      color: var(--color-fg-neutral-dark);
    }
  }
  .rdg-header-row {
    border-top-left-radius: var(--border-radius-s);
    border-top-right-radius: var(--border-radius-s);
    .rdg-cell {
      font-weight: var(--font-weight-bold);
      color: var(--color-fg-neutral-bright);
      padding: 0px var(--spacing-padding-xs);
      background-color: var(--color-bg-primary-strong);
      .sortIconContainer {
        margin-left: var(--spacing-gap-s);
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
    background-color: var(--color-bg-neutral-lighter);
    .rdg-cell {
      border: 0px;
      font-weight: var(--font-weight-semibold);
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

const HierarchyContainer = styled.div<{
  level: number;
}>`
  padding-left: ${(props) => `calc(var(--spacing-gap-s) * ${props.level})`};
  button {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--spacing-gap-s);
    padding: 0px;
    border: 0px;
    width: 100%;
    height: var(--height-l);
    background-color: var(--color-bg-neutral-lightest);
    font-family: var(--typography-font-family);
    font-size: var(--typography-label-m);
    font-weight: var(--typography-label-regular);
    color: var(--color-fg-neutral-dark);
    text-align: left;
    cursor: pointer;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: var(--height-s);
  width: 100%;
`;

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
  defaultPage = 1,
}: DataGridPropsType): JSX.Element => {
  const [rowsToRender, setRowsToRender] = useState<GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]>(rows);
  const [page, changePage] = useState(defaultPage);
  const [colHeight, setColHeight] = useState(36);

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
              <ActionContainer id="small_action">
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
                <ActionContainer id="small_action">
                  {renderCheckbox(rows, row, uniqueRowId, selectedRows, onSelectRows)}
                </ActionContainer>
              );
            }
            return null;
          },
          renderHeaderCell: () => (
            <ActionContainer id="small_action">
              {renderHeaderCheckbox(rows, uniqueRowId, selectedRows, onSelectRows)}
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
    const rootStyles = getComputedStyle(document.documentElement);
    if (rootStyles) setColHeight(parseFloat(rootStyles.getPropertyValue("--height-l")));
  }, []);

  useEffect(() => {
    setColumnsOrder(Array.from({ length: columnsToRender.length }, (_, index) => index));
  }, [columnsToRender.length]);

  useEffect(() => {
    const finalRows = [...rows];
    if (expandable) {
      rows.forEach((row, index) => {
        if (
          row.contentIsExpanded &&
          !rows.some((row) => row[uniqueRowId] === `${rowKeyGetter(row, uniqueRowId)}_expanded`)
        ) {
          addRow(finalRows, index + 1, {
            isExpandedChildContent: row.contentIsExpanded,
            [uniqueRowId]: `${rowKeyGetter(row, uniqueRowId)}_expanded`,
            expandedChildContent: row.expandedContent,
            triggerRowKey: rowKeyGetter(row, uniqueRowId),
            expandedContentHeight: row.expandedContentHeight,
          });
        }
      });
    }
    setRowsToRender(finalRows);
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
      if (sortColumns.length > 0 && uniqueRowId) {
        if (expandable) {
          const innerSortedRows = sortRows(
            rowsToRender.filter((row) => !row.isExpandedChildContent),
            sortColumns,
            sortFunctions
          );
          if (innerSortedRows.some((row) => uniqueRowId in row)) {
            rowsToRender
              .filter((row) => row.isExpandedChildContent)
              .map((expandedRow) =>
                addRow(
                  innerSortedRows,
                  innerSortedRows.findIndex(
                    (trigger) => rowKeyGetter(trigger, uniqueRowId) === expandedRow.triggerRowKey
                  ) + 1,
                  expandedRow
                )
              );
            return innerSortedRows;
          }
        } else {
          return sortHierarchyRows(rowsToRender, sortColumns, sortFunctions, uniqueRowId);
        }
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
            : (colHeight ?? 0)
        }
        selectedRows={selectedRows}
        bottomSummaryRows={summaryRow ? [summaryRow] : undefined}
        headerRowHeight={colHeight}
        summaryRowHeight={colHeight}
        className="fill-grid"
      />

      {showPaginator &&
        (itemsPerPageOptions?.some((itemsPerPage) => (totalItems ?? rows.length) > itemsPerPage) ||
          (totalItems ?? rows.length) > itemsPerPage) && (
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
  );
};

DxcDataGrid.ActionsCell = DxcActionsCell;

export default DxcDataGrid;
