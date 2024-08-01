/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import DataGridPropsType, { HierarchyGridRow, GridRow, ExpandableGridRow } from "./types";
import DataGrid, { SortColumn } from "react-data-grid";
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
} from "./utils";
import styled from "styled-components";

const DxcDataGrid = ({
  columns,
  rows,
  selectable,
  expandable,
  onSelectRows,
  selectedRows,
  uniqueRowId,
  summaryRow,
}: DataGridPropsType): JSX.Element => {
  const [rowsToRender, setRowsToRender] = useState<GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]>(rows);
  // Proccess columns prop into usable columns based on other props
  const columnsToRender = useMemo(() => {
    let expectedColumns = columns
      // .filter((column) => visibleColumns.includes(column.name))
      .map((column) => {
        // if (!visibleColumns.includes(column.name))
        //   return {
        //     key: column.key,
        //     name: column.name,
        //     colSpan() {
        //       return 0;
        //     },
        //   };

        return convertToRDGColumns(column, summaryRow);
      });
    if (expandable) {
      expectedColumns = [
        {
          key: "expanded",
          name: "",
          maxWidth: 50,
          width: 50,
          colSpan(args) {
            return args.type === "ROW" && args.row.isExpandedChildContent
              ? columns.length + (selectable ? 2 : 1)
              : undefined;
          },
          renderCell({ row }) {
            if (row.isExpandedChildContent) {
              // if it is expanded content
              return row.expandedChildContent || <></>;
            }
            // if row has expandable content
            return (
              <ActionContainer>
                {renderExpandableTrigger(row, rowsToRender, uniqueRowId, setRowsToRender)}
              </ActionContainer>
            );
          },
        },
        ...expectedColumns,
      ];
    }
    if (!expandable && rows.some((row) => Array.isArray(row.childRows) && row.childRows.length > 0) && uniqueRowId) {
      // only the first column will be clickable and will expand the rows
      const firstColumnKey = expectedColumns[0].key;
      expectedColumns[0] = {
        ...expectedColumns[0],
        renderCell({ row }) {
          if (row.childRows?.length) {
            return (
              <HierarchyContainer level={row.rowLevel || 0}>
                {renderHierarchyTrigger(rowsToRender, row, uniqueRowId, firstColumnKey, setRowsToRender)}
              </HierarchyContainer>
            );
          }
          return (
            <HierarchyContainer level={row.rowLevel || 0} className="ellipsis-cell">
              {row[firstColumnKey]}
            </HierarchyContainer>
          );
        },
      };
    }
    if (selectable) {
      expectedColumns = [
        {
          key: "selected",
          name: "",
          maxWidth: 50,
          width: 50,
          renderCell({ row }) {
            if (!row.isExpandedChildContent) {
              return (
                <ActionContainer>{renderCheckbox(rows, row, uniqueRowId, selectedRows, onSelectRows)}</ActionContainer>
              );
            }
          },
          renderHeaderCell: () => {
            return (
              <ActionContainer>{renderHeaderCheckbox(rows, uniqueRowId, selectedRows, onSelectRows)}</ActionContainer>
            );
          },
        },
        ...expectedColumns,
      ];
    }
    return expectedColumns;
  }, [selectable, expandable, columns, rowsToRender, onSelectRows, rows, summaryRow, uniqueRowId, selectedRows]);
  // array with the order of the columns
  const [columnsOrder, setColumnsOrder] = useState((): number[] => columnsToRender.map((_, index) => index));
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  // const [visibleColumns, setVisibleColumns] = useState(
  //   columnsNamesIntoOptions(columns).map((visibleColumn) => {
  //     return visibleColumn.value;
  //   })
  // );

  useEffect(() => {
    setColumnsOrder(columnsToRender.map((_, index) => index));
  }, [columnsToRender]);

  const reorderedColumns = useMemo(() => {
    // Array ordered by columnsOrder
    return columnsOrder.map((index) => columnsToRender[index]);
  }, [columnsOrder, columnsToRender]);

  const onColumnsReorder = (sourceKey: string, targetKey: string) => {
    setColumnsOrder((columnsOrder) => {
      const sourceColumnOrderIndex = columnsOrder.findIndex((index) => columnsToRender[index].key === sourceKey);
      const targetColumnOrderIndex = columnsOrder.findIndex((index) => columnsToRender[index].key === targetKey);
      const newColumnsOrder = columnsOrder.slice();
      newColumnsOrder.splice(sourceColumnOrderIndex, 1);
      newColumnsOrder.splice(targetColumnOrderIndex, 0, columnsOrder[sourceColumnOrderIndex]);
      return newColumnsOrder;
    });
  };

  const onRowsChange = (newRows: { [key: string]: string | number | React.ReactNode }[]) => {
    // call function to change rows, like when they have been edited
    console.log("new rows: ");
    console.log(newRows);
  };

  const sortedRows = useMemo((): readonly GridRow[] => {
    if (expandable && sortColumns.length >= 0) {
      const sortedRows = sortRows(
        rowsToRender.filter((row) => !row.isExpandedChildContent),
        sortColumns
      );
      rowsToRender
        .filter((row) => row.isExpandedChildContent)
        .map((expandedRow) =>
          addRow(
            sortedRows,
            sortedRows.findIndex((trigger) => rowKeyGetter(trigger, uniqueRowId) === expandedRow.triggerRowKey) + 1,
            expandedRow
          )
        );
      return sortedRows;
    } else if (!expandable && sortColumns.length >= 0) {
      if (uniqueRowId) return sortHierarchyRows(rowsToRender, sortColumns, uniqueRowId);
    }
    return rowsToRender;
  }, [expandable, rowsToRender, sortColumns, uniqueRowId]);

  return (
    <DataGridContainer>
      {/* {columnsVisibilityFilter && (
        <DxcSelect
          multiple
          options={columnsNamesIntoOptions(columns)}
          defaultValue={visibleColumns}
          onChange={(event) => setVisibleColumns(event.value)}
        />
      )} */}
      <DataGrid
        columns={reorderedColumns}
        rows={sortedRows}
        onColumnsReorder={onColumnsReorder}
        onRowsChange={onRowsChange}
        renderers={{ renderSortStatus }}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        rowKeyGetter={(row) => uniqueRowId && rowKeyGetter(row, uniqueRowId)}
        rowHeight={(row) => {
          if (
            row.isExpandedChildContent &&
            typeof row.expandedContentHeight === "number" &&
            row.expandedContentHeight > 0
          ) {
            return row.expandedContentHeight;
          }
          return 36;
        }}
        selectedRows={selectedRows}
        bottomSummaryRows={summaryRow ? [summaryRow] : undefined}
        headerRowHeight={48}
        className="fill-grid"
      />
    </DataGridContainer>
  );
};

const ActionContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 100%;
`;

const HierarchyContainer = styled.div<{
  level: number;
}>`
  padding-left: calc(10px * ${(props) => props.level});
  button {
    padding: 0px;
    background: transparent;
    border: 0px;
    cursor: pointer;
    width: 100%;
    height: 36px;
    text-align: left;
  }
`;

const DataGridContainer = styled.div`
  width: 100%;
  .rdg {
    border-radius: 4px;
    height: 100%;
    border: 0px;
  }
  .rdg-header-row {
    background-color: rgb(95, 36, 159);
    .rdg-cell {
      font-family: "Open Sans", sans-serif;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      color: rgb(255, 255, 255);
      text-transform: none;
      .sortIconContainer {
        margin-left: 0.5rem;
        display: flex;
        height: 100%;
        align-items: center;
      }
    }
    .rdg-cell:first-child {
      border-top-left-radius: 4px;
    }
    .rdg-cell:last-child {
      border-top-right-radius: 4px;
    }
  }
  .ellipsis-cell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .rdg-summary-row {
    background-color: #fafafa;
    .rdg-cell {
      border-top: 0px;
      font-weight: 600;
    }
  }
  .rdg-row {
    .rdg-cell:last-child {
      border-right: 0px;
    }
  }
  .align-left {
    text-align: left;
  }
  .align-center {
    text-align: center;
  }
  .align-right {
    text-align: right;
  }
`;

export default DxcDataGrid;
