import DxcActionIcon from "../action-icon/ActionIcon";
import DxcCheckbox from "../checkbox/Checkbox";
import { AdvancedTheme } from "../common/variables";
import { DeepPartial, HalstackProvider } from "../HalstackContext";
import DxcIcon from "../icon/Icon";
import { GridColumn, HierarchyGridRow, GridRow, ExpandableGridRow } from "./types";
import { Column, RenderSortStatusProps, SortColumn, textEditor } from "react-data-grid";

const overwriteTheme = (theme: DeepPartial<AdvancedTheme>) => {
  const newTheme = {
    checkbox: {
      backgroundColorChecked: theme.dataGrid.headerCheckboxBackgroundColorChecked,
      hoverBackgroundColorChecked: theme.dataGrid.headerCheckboxHoverBackgroundColorChecked,
      borderColor: theme.dataGrid.headerCheckboxBorderColor,
      hoverBorderColor: theme.dataGrid.headerCheckboxHoverBorderColor,
      checkColor: theme.dataGrid.headerCheckboxCheckColor,
      focusColor: theme.dataGrid.focusColor,
    },
  };

  return newTheme;
};

// Column<any, any> type added to avoid conflicts with SelectColumn typing from RDG
export const convertToRDGColumns = (gridColumn: GridColumn, summaryRow?: GridRow): Column<any, any> => {
  return {
    key: gridColumn.key,
    name: gridColumn.label,
    resizable: gridColumn.resizable,
    sortable: gridColumn.sortable,
    draggable: gridColumn.draggable,
    editable: gridColumn.textEditable,
    headerCellClass: gridColumn.alignment ? `align-${gridColumn.alignment}` : `align-left`,
    renderEditCell: gridColumn.textEditable ? textEditor : undefined,
    renderCell: ({ row }) => {
      return (
        <div className={`ellipsis-cell ${gridColumn.alignment ? "align-" + gridColumn.alignment : "align-left"}`}>
          {row[gridColumn.key]}
        </div>
      );
    },
    renderSummaryCell: () => {
      return gridColumn.summaryKey ? (
        <div className={`ellipsis-cell ${gridColumn.alignment ? "align-" + gridColumn.alignment : "align-left"}`}>
          {summaryRow?.[gridColumn.summaryKey]}
        </div>
      ) : undefined;
    },
  };
};

export const renderSortStatus = ({ sortDirection }: RenderSortStatusProps) => {
  return (
    <div className="sortIconContainer">
      {sortDirection !== undefined ? (
        sortDirection === "ASC" ? (
          <DxcIcon icon="Keyboard_Arrow_Up" />
        ) : (
          <DxcIcon icon="Keyboard_Arrow_Down" />
        )
      ) : (
        <DxcIcon icon="Expand_All" />
      )}
    </div>
  );
};

export const renderExpandableTrigger = (
  row: ExpandableGridRow,
  rows: ExpandableGridRow[],
  uniqueRowId: string,
  setRowsToRender: (value: React.SetStateAction<ExpandableGridRow[] | GridRow[] | HierarchyGridRow[]>) => void
) => {
  return (
    <DxcActionIcon
      icon={row.contentIsExpanded ? "arrow_drop_down" : "arrow_right"}
      title="Expand content"
      aria-expanded={row.contentIsExpanded}
      onClick={() => {
        row.contentIsExpanded = !row.contentIsExpanded;
        if (row.contentIsExpanded) {
          const rowIndex = rows.findIndex((rowToRender) => row === rowToRender);
          setRowsToRender((rows) => {
            const newRows = [...rows];
            addRow(newRows, rowIndex + 1, {
              isExpandedChildContent: row.contentIsExpanded,
              [uniqueRowId]: rowKeyGetter(row, uniqueRowId) + "_expanded",
              expandedChildContent: row.expandedContent,
              triggerRowKey: rowKeyGetter(row, uniqueRowId),
              expandedContentHeight: row.expandedContentHeight,
            });
            return newRows;
          });
        } else {
          const rowIndex = rows.findIndex((rowToRender) => row === rowToRender);
          setRowsToRender((rows) => {
            const newRows = [...rows];
            deleteRow(newRows, rowIndex + 1);
            return newRows;
          });
        }
      }}
    />
  );
};

export const renderHierarchyTrigger = (
  rows: HierarchyGridRow[],
  triggerRow: HierarchyGridRow,
  uniqueRowId: string,
  columnKey: string,
  setRowsToRender: (value: React.SetStateAction<GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]>) => void
) => {
  return (
    <button
      onClick={() => {
        let newRowsToRender = [...rows];
        if (!triggerRow.visibleChildren) {
          const rowIndex = rows.findIndex((rowToRender) => triggerRow === rowToRender);
          triggerRow.childRows?.map((childRow: HierarchyGridRow, index: number) => {
            childRow.rowLevel =
              triggerRow.rowLevel && typeof triggerRow.rowLevel === "number" ? triggerRow.rowLevel + 1 : 1;
            childRow.parentKey = rowKeyGetter(triggerRow, uniqueRowId);
            addRow(newRowsToRender, rowIndex + 1 + index, childRow);
          });
        } else {
          // The children of the row that is being collapsed are added to an array
          const rowsToRemove: HierarchyGridRow[] = [
            ...rows.filter(
              (rowToRender) => rowToRender.parentKey && rowToRender.parentKey === rowKeyGetter(triggerRow, uniqueRowId)
            ),
          ];
          // The children are checked if any of them has any other children of their own
          const rowsToCheck = [...rowsToRemove];
          while (rowsToCheck.length > 0) {
            const currentRow = rowsToCheck.pop();
            const childRows = currentRow?.visibleChildren && currentRow?.childRows ? currentRow.childRows : [];

            rowsToRemove.push(...childRows);
            rowsToCheck.push(...childRows);
          }
          newRowsToRender = rows.filter(
            (row) =>
              !rowsToRemove
                .map((rowToRemove) => {
                  if (rowToRemove.visibleChildren) {
                    rowToRemove.visibleChildren = false;
                  }
                  return rowKeyGetter(rowToRemove, uniqueRowId);
                })
                .includes(rowKeyGetter(row, uniqueRowId))
          );
        }
        triggerRow.visibleChildren = !triggerRow.visibleChildren;
        setRowsToRender(newRowsToRender);
      }}
    >
      <DxcIcon icon={triggerRow.visibleChildren ? "Keyboard_Arrow_Down" : "Chevron_Right"} />
      <span className="ellipsis-cell">{triggerRow[columnKey]}</span>
    </button>
  );
};

export const renderCheckbox = (
  rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  row: GridRow | HierarchyGridRow | ExpandableGridRow,
  uniqueRowId: string,
  selectedRows: Set<number | string>,
  onSelectRows: (selectedRows: Set<number | string>) => void
) => {
  return (
    <DxcCheckbox
      checked={selectedRows.has(rowKeyGetter(row, uniqueRowId))}
      onChange={(checked) => {
        const selected = new Set(selectedRows);
        checked ? selected.add(rowKeyGetter(row, uniqueRowId)) : selected.delete(rowKeyGetter(row, uniqueRowId));
        if (row.childRows && Array.isArray(row.childRows)) {
          getChildrenSelection(row.childRows, uniqueRowId, selected, checked);
        }
        if (row.parentKey)
          getParentSelectedState(rows, rowKeyGetter(row, uniqueRowId), row.parentKey, uniqueRowId, selected, checked);
        onSelectRows(selected);
      }}
    />
  );
};

/**
 * Render the specific checkbox in the header
 * @param rows
 * @param uniqueRowId
 * @param selectedRows
 * @param onSelectRows
 */
export const renderHeaderCheckbox = (
  rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  uniqueRowId: string,
  selectedRows: Set<number | string>,
  colorsTheme: DeepPartial<AdvancedTheme>,
  onSelectRows: (selected: Set<number | string>) => void
) => {
  return (
    <HalstackProvider advancedTheme={overwriteTheme(colorsTheme)}>
      <DxcCheckbox
        checked={!rows.some((row) => !selectedRows.has(rowKeyGetter(row, uniqueRowId)))}
        onChange={(checked) => {
          const selected = new Set<number | string>();
          if (checked) {
            rows.map((row) => {
              selected.add(rowKeyGetter(row, uniqueRowId));
              if (row.childRows && Array.isArray(row.childRows))
                getChildrenSelection(row.childRows, uniqueRowId, selected, checked);
            });
          }
          onSelectRows(selected);
        }}
      />
    </HalstackProvider>
  );
};

export const rowKeyGetter = (row: any, uniqueRowId: string) => {
  return row[uniqueRowId];
};

export const sortRows = (rows: GridRow[], sortColumns: readonly SortColumn[], reversed?: boolean) => {
  return [...rows].sort((a, b) => {
    for (const sort of sortColumns) {
      const sortValueA = a[sort.columnKey];
      const sortValueB = b[sort.columnKey];
      let compResult = 0;

      if (sortValueA && sortValueB) {
        compResult = sortValueA > sortValueB ? 1 : sortValueA < sortValueB ? -1 : 0;
      }

      if (compResult !== 0) {
        if (reversed) return sort.direction === "ASC" ? -compResult : compResult;
        return sort.direction === "ASC" ? compResult : -compResult;
      }
    }
    return 0;
  });
};

export const sortHierarchyRows = (
  rows: HierarchyGridRow[],
  sortColumns: readonly SortColumn[],
  uniqueRowId: string
) => {
  const parentsSorted = sortRows(
    rows.filter((row) => !row.parentKey),
    sortColumns
  );
  // check if there are child rows
  if (rows.length === parentsSorted.length) return parentsSorted;
  else {
    let sortedChildren = sortRows(
      rows.filter((row) => row.parentKey),
      sortColumns,
      true
    );
    // add children directly under the parent if it is available
    while (sortedChildren.length) {
      if (uniqueRowId) {
        sortedChildren = sortedChildren.reduce(
          (
            remainingChilds: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
            child: GridRow | HierarchyGridRow | ExpandableGridRow
          ) => {
            const parentIndex = parentsSorted.findIndex(
              (parent) => rowKeyGetter(parent, uniqueRowId) === child.parentKey
            );
            if (parentIndex >= 0) {
              parentsSorted.splice(parentIndex + 1, 0, child);
            } else {
              remainingChilds.push(child);
            }
            return remainingChilds;
          },
          []
        );
      }
    }
    return parentsSorted;
  }
};

// function columnsNamesIntoOptions(columns: GridColumn[]) {
//   return columns.map((column) => {
//     return { label: column.name, value: column.name };
//   });
// }

// export function addUniqueId(
//   row: GridRow | HierarchyGridRow | ExpandableGridRow,
//   counter: number | string,
//   expandable?: boolean
// ) {
//   row.uniqueRowId = counter;
//   if (!expandable && row.childRows && Array.isArray(row.childRows)) {
//     row.childRows.forEach((childRow: HierarchyGridRow, index) =>
//       addUniqueId(childRow, `${counter}_${index}`)
//     );
//   }
// }

export const addRow = (
  rowList: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  index: number,
  row: GridRow | HierarchyGridRow | ExpandableGridRow
) => {
  rowList.splice(index, 0, row);
};

export const deleteRow = (rowList: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[], index: number) => {
  rowList.splice(index, 1);
};

/**
 * @param rowList List of rows in which to look for the row, it will also look for the row in the childRows
 * @param uniqueRowId The key that contains the unique value of the row
 * @param uniqueRowIdValue Unique value to identify the row
 * @returns A copy of the Row
 */
export const rowFinderBasedOnId = (
  rowList: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  uniqueRowId: string,
  uniqueRowIdValue: React.ReactNode
): GridRow | HierarchyGridRow | ExpandableGridRow | undefined => {
  let foundRow: GridRow | HierarchyGridRow | ExpandableGridRow | undefined = undefined;
  rowList.forEach((row) => {
    if (rowKeyGetter(row, uniqueRowId) === uniqueRowIdValue) {
      foundRow = { ...row };
    }
    if (row.childRows && Array.isArray(row.childRows) && !foundRow) {
      foundRow = rowFinderBasedOnId(row.childRows, uniqueRowId, uniqueRowIdValue);
    }
  });
  if (foundRow) return foundRow;
};

export const getChildrenSelection = (
  rowList: HierarchyGridRow[],
  uniqueRowId: string,
  selectedRows: Set<number | string>,
  checked: boolean
) => {
  rowList.forEach((row) => {
    if (row.childRows) {
      getChildrenSelection(row.childRows, uniqueRowId, selectedRows, checked);
    }
    if (checked) selectedRows.add(rowKeyGetter(row, uniqueRowId));
    else {
      selectedRows.delete(rowKeyGetter(row, uniqueRowId));
    }
  });
};

/**
 * Check if the parent and its parent should be selected/unselected
 * @param rowList
 * @param uniqueRowKeyValue Unique value of the selected row
 * @param parentKeyValue Unique value of the parent Row
 * @param uniqueRowId Key where the unique value is located
 * @param changedRows
 * @param checkedStateToMatch
 */
export const getParentSelectedState = (
  rowList: HierarchyGridRow[],
  uniqueRowKeyValue: React.ReactNode,
  parentKeyValue: React.ReactNode,
  uniqueRowId: string,
  selectedRows: Set<number | string>,
  checkedStateToMatch: boolean
) => {
  const parentRow = rowFinderBasedOnId(rowList, uniqueRowId, parentKeyValue);
  // we are unselecting or any of the other childRows is unselected
  if (
    !checkedStateToMatch ||
    (parentRow?.childRows &&
      Array.isArray(parentRow.childRows) &&
      parentRow.childRows
        .filter((row) => rowKeyGetter(row, uniqueRowId) !== uniqueRowKeyValue)
        .some((row) => !selectedRows.has(rowKeyGetter(row, uniqueRowId))))
  ) {
    if (selectedRows.has(rowKeyGetter(parentRow, uniqueRowId))) {
      selectedRows.delete(rowKeyGetter(parentRow, uniqueRowId));
    }
  } else {
    if (parentRow?.childRows && Array.isArray(parentRow.childRows)) {
      const isAnyChildUnselected = parentRow.childRows
        .filter((row) => rowKeyGetter(row, uniqueRowId) !== uniqueRowKeyValue)
        .some((row) => !selectedRows.has(rowKeyGetter(row, uniqueRowId)));

      if (!isAnyChildUnselected) {
        parentRow.selected = true;
        // instead of pushing the row we should add it to the selected set
        selectedRows.add(rowKeyGetter(parentRow, uniqueRowId));
      }
    }
  }
  // add recursiveness if there are more levels
  if (parentRow && parentRow.parentKey) {
    getParentSelectedState(
      rowList,
      rowKeyGetter(parentRow, uniqueRowId),
      parentRow.parentKey,
      uniqueRowId,
      selectedRows,
      checkedStateToMatch
    );
  }
};
