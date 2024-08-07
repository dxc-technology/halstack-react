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
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";

const DxcDataGrid = ({
  columns,
  rows,
  selectable,
  expandable,
  onSelectRows,
  selectedRows,
  uniqueRowId,
  summaryRow,
  mode = "default",
  onGridRowsChange,
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
            return args.type === "ROW" && args.row.isExpandedChildContent ? columns.length + 1 : undefined;
          },
          renderCell({ row }) {
            if (row.isExpandedChildContent) {
              // if it is expanded content
              return row.expandedChildContent || <></>;
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
      const firstColumnKey = expectedColumns[0].key;
      expectedColumns[0] = {
        ...expectedColumns[0],
        renderCell({ row }) {
          if (row.childRows?.length) {
            return (
              <HierarchyContainer level={row.rowLevel || 0} mode={mode}>
                {renderHierarchyTrigger(rowsToRender, row, uniqueRowId, firstColumnKey, setRowsToRender)}
              </HierarchyContainer>
            );
          }
          return (
            <HierarchyContainer level={row.rowLevel || 0} className="ellipsis-cell" mode={mode}>
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
                <ActionContainer id="action">
                  {renderCheckbox(rows, row, uniqueRowId, selectedRows, onSelectRows)}
                </ActionContainer>
              );
            }
          },
          renderHeaderCell: () => {
            return (
              <ActionContainer id="action">
                {renderHeaderCheckbox(rows, uniqueRowId, selectedRows, onSelectRows)}
              </ActionContainer>
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

  const onRowsChange = (newRows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => {
    // call function to change rows, like when they have been edited
    onGridRowsChange(newRows);
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

  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.dataGrid}>
      <DataGridContainer mode={mode}>
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
            return mode === "default" ? 60 : 36;
          }}
          selectedRows={selectedRows}
          bottomSummaryRows={summaryRow ? [summaryRow] : undefined}
          headerRowHeight={mode === "default" ? 60 : 36}
          summaryRowHeight={mode === "default" ? 60 : 36}
          className="fill-grid"
        />
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
  mode: "default" | "reduced";
}>`
  padding-left: ${(props) =>
    `calc(${props.mode === "reduced" ? props.theme.dataPaddingLeftReduced : props.theme.dataPaddingLeft} * ${props.level})`};
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0px;
    border: 0px;
    width: 100%;
    height: ${(props) => (props.mode === "default" ? 60 : 36)}px;
    background: transparent;
    text-align: left;
    font-size: ${(props) => props.theme.dataFontSize};
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }
`;

const DataGridContainer = styled.div<{ mode: "default" | "reduced" }>`
  width: 100%;
  .rdg {
    border-radius: 4px;
    height: 100%;
    border: 0px;
  }
  .rdg-cell {
    display: flex;
    align-items: center;
    padding: 0px
      ${(props) => (props.mode === "default" ? props.theme.dataPaddingRight : props.theme.dataPaddingRightReduced)} 0
      ${(props) => (props.mode === "default" ? props.theme.dataPaddingLeft : props.theme.dataPaddingLeftReduced)};
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
  }
  .rdg-cell:has(> #action) {
    padding: 0px;
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
      padding: 0px
        ${(props) =>
          props.mode === "default" ? props.theme.headerPaddingRight : props.theme.headerPaddingRightReduced}
        0
        ${(props) => (props.mode === "default" ? props.theme.headerPaddingLeft : props.theme.headerPaddingLeftReduced)};
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
