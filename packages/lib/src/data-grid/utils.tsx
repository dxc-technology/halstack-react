// TODO: Remove eslint disable
/* eslint-disable no-param-reassign */

import { ReactNode, SetStateAction, useState } from "react";
import { Column, RenderSortStatusProps, SortColumn, textEditor } from "react-data-grid";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcCheckbox from "../checkbox/Checkbox";
import DxcIcon from "../icon/Icon";
import { GridColumn, HierarchyGridRow, GridRow, ExpandableGridRow } from "./types";
import DxcSpinner from "../spinner/Spinner";

/**
 * Converts grid columns into react-data-grid column format.
 * @param {GridColumn} gridColumn - Object representing the properties of a grid column.
 * @param {GridRow} [summaryRow] - Optional summary row to render at the end.
 * @returns {Column<GridRow | HierarchyGridRow | ExpandableGridRow, GridRow | HierarchyGridRow | ExpandableGridRow>} Formatted column object for react-data-grid.
 */
export const convertToRDGColumns = (
  gridColumn: GridColumn,
  summaryRow?: GridRow
): Column<GridRow | HierarchyGridRow | ExpandableGridRow, GridRow | HierarchyGridRow | ExpandableGridRow> => ({
  key: gridColumn.key,
  name: gridColumn.label,
  resizable: gridColumn.resizable,
  sortable: gridColumn.sortable,
  draggable: gridColumn.draggable,
  editable: gridColumn.textEditable,
  headerCellClass: gridColumn.alignment ? `header-align-${gridColumn.alignment}` : `header-align-left`,
  renderEditCell: gridColumn.textEditable ? textEditor : undefined,
  renderCell: ({ row }) => (
    <div className={`ellipsis-cell ${gridColumn.alignment ? `align-${gridColumn.alignment}` : "align-left"}`}>
      {row[gridColumn.key]}
    </div>
  ),
  renderSummaryCell: () =>
    gridColumn.summaryKey ? (
      <div className={`ellipsis-cell ${gridColumn.alignment ? `align-${gridColumn.alignment}` : "align-left"}`}>
        {summaryRow?.[gridColumn.summaryKey]}
      </div>
    ) : undefined,
});

/**
 * Renders sort status icon for a column based on the sort direction.
 * @param {RenderSortStatusProps} props - Properties including sortDirection to render the appropriate sort icon.
 * @returns {JSX.Element} Icon indicating the current sort status.
 */
export const renderSortStatus = ({ sortDirection }: RenderSortStatusProps) => (
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

/**
 * Expands a given row by inserting a new child row with the expanded content.
 * @param {ExpandableGridRow} row - The row object to expand.
 * @param {ExpandableGridRow[]} rows - The current list of all rows (as rendered).
 * @param {string} uniqueRowId - Unique identifier key used for each row.
 */
export const expandRow = (row: ExpandableGridRow, rows: ExpandableGridRow[], uniqueRowId: string) => {
  const rowIndex = rows.findIndex((r) => r === row);
  addRow(rows, rowIndex + 1, {
    isExpandedChildContent: true,
    [uniqueRowId]: `${rowKeyGetter(row, uniqueRowId)}_expanded`,
    expandedChildContent: row.expandedContent,
    triggerRowKey: rowKeyGetter(row, uniqueRowId),
    expandedContentHeight: row.expandedContentHeight,
  });
};

/**
 * Collapses a given row by removing its expanded child row.
 * @param {ExpandableGridRow} row - The row object to collapse.
 * @param {ExpandableGridRow[]} rows - The current list of all rows (as rendered).
 */
export const collapseRow = (row: ExpandableGridRow, rows: ExpandableGridRow[]) => {
  const rowIndex = rows.findIndex((r) => r === row);
  const newRows = [...rows];
  deleteRow(newRows, rowIndex + 1);
  return newRows;
};

/**
 * Renders an expandable trigger icon that toggles row expansion.
 * @param {ExpandableGridRow} row - Row object that can be expanded or collapsed.
 * @param {ExpandableGridRow[]} rows - List of all rows.
 * @param {string} uniqueRowId - Unique identifier for each row.
 * @param {Function} setRowsToRender - Function to update the rows being rendered.
 * @returns {JSX.Element} Icon with functionality to toggle the expanded content of the row.
 */
export const renderExpandableTrigger = (
  row: ExpandableGridRow,
  rows: ExpandableGridRow[],
  uniqueRowId: string,
  setRowsToRender: (_value: SetStateAction<GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]>) => void
) => (
  <DxcActionIcon
    icon={row.contentIsExpanded ? "arrow_drop_down" : "arrow_right"}
    title="Expand content"
    aria-expanded={row.contentIsExpanded}
    onClick={() => {
      row.contentIsExpanded = !row.contentIsExpanded;
      if (row.contentIsExpanded) {
        setRowsToRender((currentRows) => {
          const finalRows = [...currentRows];
          expandRow(row, finalRows, uniqueRowId);
          return finalRows;
        });
      } else {
        setRowsToRender((currentRows) => collapseRow(row, [...currentRows]));
      }
    }}
    disabled={!rows.some((row) => uniqueRowId in row)}
  />
);

/**
 * Renders a trigger for hierarchical row expansion in the grid.
 * @param {HierarchyGridRow[]} rows - List of all hierarchy grid rows.
 * @param {HierarchyGridRow} triggerRow - Row object with children that can be expanded or collapsed.
 * @param {string} uniqueRowId - Unique identifier for each row.
 * @param {string} columnKey - Key of the column that displays the hierarchy trigger.
 * @param {Function} setRowsToRender - Function to update the rows being rendered.
 * @param {Function} childrenTrigger - Function called whenever a cell with children is expanded or collapsed. Returns the children array
 * @returns {JSX.Element} Button that toggles visibility of child rows.
 */
export const renderHierarchyTrigger = (
  rows: HierarchyGridRow[],
  triggerRow: HierarchyGridRow,
  uniqueRowId: string,
  columnKey: string,
  setRowsToRender: (_value: SetStateAction<GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]>) => void,
  loading?: boolean,
  setLoading?: (_value: SetStateAction<boolean>) => void,
  childrenTrigger?: (
    _open: boolean,
    _selectedRow: HierarchyGridRow
  ) => (HierarchyGridRow[] | GridRow[]) | Promise<HierarchyGridRow[] | GridRow[]>
) => {
  const onClick = async () => {
    if (loading) return; // Prevent double clicks while loading
    if (!triggerRow.visibleChildren) {
      if (childrenTrigger) {
        setLoading?.(true);
        triggerRow.loadingChildren = true;
        try {
          const dynamicChildren = await childrenTrigger(true, triggerRow);
          triggerRow.childRows = dynamicChildren;

          setRowsToRender((currentRows) => {
            const newRowsToRender = [...currentRows];
            // Prevents adding children if the triggerRow has been removed
            if (newRowsToRender.some((row) => rowKeyGetter(row, uniqueRowId) === triggerRow[uniqueRowId])) {
              const rowIndex = currentRows.findIndex((row) => triggerRow === row);

              dynamicChildren.forEach((childRow: HierarchyGridRow, index: number) => {
                childRow.rowLevel =
                  triggerRow.rowLevel && typeof triggerRow.rowLevel === "number" ? triggerRow.rowLevel + 1 : 1;
                childRow.parentKey = rowKeyGetter(triggerRow, uniqueRowId);
                addRow(newRowsToRender, rowIndex + 1 + index, childRow);
              });
            }
            return newRowsToRender;
          });
        } catch (error) {
          console.error("Error loading children:", error);
        } finally {
          setLoading(false);
        }
      } else if (triggerRow?.childRows) {
        setRowsToRender((currentRows) => {
          const newRowsToRender = [...currentRows];
          const rowIndex = currentRows.findIndex((row) => triggerRow === row);

          triggerRow?.childRows?.forEach((childRow: HierarchyGridRow, index: number) => {
            childRow.rowLevel =
              triggerRow.rowLevel && typeof triggerRow.rowLevel === "number" ? triggerRow.rowLevel + 1 : 1;
            childRow.parentKey = rowKeyGetter(triggerRow, uniqueRowId);
            addRow(newRowsToRender, rowIndex + 1 + index, childRow);
          });

          return newRowsToRender;
        });
      }
    } else {
      setRowsToRender((currentRows) => {
        // The children of the row that is being collapsed are added to an array
        const rowsToRemove: HierarchyGridRow[] = rows.filter(
          (rowToRender) => rowToRender.parentKey && rowToRender.parentKey === rowKeyGetter(triggerRow, uniqueRowId)
        );
        // The children are checked if any of them has any other children of their own
        const rowsToCheck = [...rowsToRemove];
        while (rowsToCheck.length > 0) {
          const currentRow = rowsToCheck.pop();
          const childRows = currentRow?.visibleChildren && currentRow?.childRows ? currentRow.childRows : [];

          rowsToRemove.push(...childRows);
          rowsToCheck.push(...childRows);
        }

        const newRowsToRender = currentRows.filter(
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

        return newRowsToRender;
      });
    }

    triggerRow.visibleChildren = !triggerRow.visibleChildren;
  };
  return (
    <button type="button" disabled={!rows.some((row) => uniqueRowId in row)} onClick={onClick}>
      {loading ? (
        <DxcSpinner mode="small" />
      ) : (
        <DxcIcon icon={triggerRow.visibleChildren ? "Keyboard_Arrow_Down" : "Chevron_Right"} />
      )}
      <span className="ellipsis-cell">{triggerRow[columnKey]}</span>
    </button>
  );
};

/**
 * Renders a checkbox for row selection.
 * @param {GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]} rows - Array of rows that are currently displayed.
 * @param {GridRow | HierarchyGridRow | ExpandableGridRow} row - Row object to render the checkbox for.
 * @param {string} uniqueRowId - The key used to uniquely identify each row.
 * @param {Set<string | number>} selectedRows - Set of selected rows.
 * @param {Function} onSelectRows - Callback function that triggers when rows are selected/deselected.
 * @returns {JSX.Element} Checkbox for selecting the row.
 */
export const renderCheckbox = (
  rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  row: GridRow | HierarchyGridRow | ExpandableGridRow,
  uniqueRowId: string,
  selectedRows: Set<string | number>,
  onSelectRows: (_selected: Set<string | number>) => void
) => {
  const checked = selectedRows.has(rowKeyGetter(row, uniqueRowId));
  // Checks if update is needed when child rows data has completed loading
  if (row.loadingChildren && row.childRows) {
    handleCheckboxUpdate(rows, row, uniqueRowId, selectedRows, checked, onSelectRows, true);
    row.loadingChildren = false;
  }
  return (
    <DxcCheckbox
      checked={checked}
      onChange={(checked) => {
        handleCheckboxUpdate(rows, row, uniqueRowId, selectedRows, checked, onSelectRows);
      }}
      disabled={
        // row.loadingChildren ||
        !rows.some((row) => uniqueRowId in row)
      }
    />
  );
};

/**
 * Renders a header checkbox that controls the selection of all rows.
 * @param {GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]} rows - Array of rows that are currently displayed.
 * @param {string} uniqueRowId - The key used to uniquely identify each row.
 * @param {Set<string | number>} selectedRows - Set of selected rows.
 * @param {Function} onSelectRows - Callback function that triggers when rows are selected/deselected.
 * @returns {JSX.Element} Checkbox for the header checkbox.
 */
export const renderHeaderCheckbox = (
  rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  uniqueRowId: string,
  selectedRows: Set<string | number>,
  onSelectRows: (_selected: Set<string | number>) => void
) => (
  <DxcCheckbox
    checked={rows.length > 0 && !rows.some((row) => !selectedRows.has(rowKeyGetter(row, uniqueRowId)))}
    onChange={(checked) => {
      const updatedSelection = new Set(selectedRows);

      if (checked) {
        rows.forEach((row) => {
          updatedSelection.add(rowKeyGetter(row, uniqueRowId));
          if (row.childRows && Array.isArray(row.childRows)) {
            getChildrenSelection(row.childRows, uniqueRowId, updatedSelection, checked);
          }
        });
      } else {
        rows.forEach((row) => {
          updatedSelection.delete(rowKeyGetter(row, uniqueRowId));
          if (row.childRows && Array.isArray(row.childRows)) {
            getChildrenSelection(row.childRows, uniqueRowId, updatedSelection, checked);
          }
        });
      }

      onSelectRows(updatedSelection);
    }}
    disabled={rows.length === 0 || !rows.some((row) => uniqueRowId in row)}
  />
);

/**
 * Retrieves the unique key for a row based on the given uniqueRowId.
 * @param {GridRow | HierarchyGridRow | ExpandableGridRow} row - The row object from which to retrieve the key.
 * @param {string} uniqueRowId - The unique key used to identify the row.
 * @returns {string | number} The unique key of the row.
 */
export const rowKeyGetter = (row: GridRow | HierarchyGridRow | ExpandableGridRow, uniqueRowId: string) => {
  const keyValue = row[uniqueRowId];
  return typeof keyValue === "string" || typeof keyValue === "number" ? keyValue : "";
};

/**
 * Extracts and returns custom sorting functions from the given columns.
 * @param {GridColumn[]} columns - Array of column definitions.
 * @returns {object[]} Array of objects, each containing a column key and its custom sort function.
 */
export const getCustomSortFn = (columns: GridColumn[]) => {
  const customSortFunctions = [...columns]
    .filter((column) => column.sortFn)
    .map((column) => ({ column: column.key, sortFn: column.sortFn! }));
  return customSortFunctions;
};

/**
 * Compares two row values based on the given custom sort function.
 * If no sort function is provided, default comparison is used.
 * @param {ReactNode} rowA - The first row value to compare.
 * @param {ReactNode} rowB - The second row value to compare.
 * @param {Function} sortFn - Optional custom sorting function.
 * @returns {number} -1 if rowA < rowB, 1 if rowA > rowB, or 0 if they are equal.
 */
export const compareRows = (rowA: ReactNode, rowB: ReactNode, sortFn?: (_a: ReactNode, _b: ReactNode) => number) => {
  if (rowA != null && rowB != null) {
    if (!sortFn) {
      return rowA > rowB ? 1 : rowA < rowB ? -1 : 0;
    }
    return sortFn(rowA, rowB);
  }
  return 0;
};

/**
 * Sorts an array of rows based on the specified sort columns and custom sort functions.
 * @param {GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]} rows - Array of rows to be sorted.
 * @param {SortColumn[]} sortColumns - Array of sort column definitions.
 * @param {Function[]} sortFunctions - Array of objects, each containing a column and its custom sort function.
 * @param {boolean} reversed - Boolean indicating whether the sort order should be reversed.
 * @returns {GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]} The sorted array of rows.
 */
export const sortRows = (
  rows: GridRow[] | ExpandableGridRow[] | HierarchyGridRow[],
  sortColumns: readonly SortColumn[],
  sortFunctions?: { column: string; sortFn: (_a: ReactNode, _b: ReactNode) => number }[],
  reversed?: boolean
) =>
  [...rows].sort((a, b) =>
    sortColumns.reduce((compResult, sort) => {
      if (compResult !== 0) {
        return compResult;
      }

      const sortValueA = a[sort.columnKey];
      const sortValueB = b[sort.columnKey];
      let newCompResult = compResult;

      if (sortValueA && sortValueB) {
        const sortFn = sortFunctions?.find(({ column }) => column === sort.columnKey)?.sortFn;
        newCompResult = compareRows(sortValueA, sortValueB, sortFn);
      }

      if (newCompResult !== 0) {
        return reversed
          ? sort.direction === "ASC"
            ? -newCompResult
            : newCompResult
          : sort.direction === "ASC"
            ? newCompResult
            : -newCompResult;
      }
      return newCompResult;
    }, 0)
  );

/**
 * Sorts an array of rows, ensuring child rows are placed under their parents.
 * @param {HierarchyGridRow[]} rows - Array of rows to be sorted.
 * @param {SortColumn[]} sortColumns - Array of sort column definitions.
 * @param {object[]} sortFunctions - Array of custom sort functions for specific columns.
 * @param {string} uniqueRowId - Unique key used to identify rows.
 * @returns {GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]} The sorted array of rows, with children positioned under their parents.
 */
export const sortHierarchyRows = (
  rows: HierarchyGridRow[],
  sortColumns: readonly SortColumn[],
  sortFunctions: { column: string; sortFn: (_a: ReactNode, _b: ReactNode) => number }[],
  uniqueRowId: string
) => {
  const parentsSorted = sortRows(
    rows.filter((row) => !row.parentKey),
    sortColumns,
    sortFunctions
  );
  // check if there are child rows
  if (rows.length === parentsSorted.length) {
    return parentsSorted;
  }
  let sortedChildren = sortRows(
    rows.filter((row) => row.parentKey),
    sortColumns,
    sortFunctions,
    true
  );
  // add children directly under the parent if it is available
  while (sortedChildren.length) {
    if (uniqueRowId && sortedChildren.some((row) => uniqueRowId in row)) {
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
};

/**
 * Inserts a new row into the row list at the specified index.
 * @param {GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]} rowList - Array of rows to insert the new row into.
 * @param {number} index - Index where the new row should be added.
 * @param {GridRow | HierarchyGridRow | ExpandableGridRow} row - The row to be added.
 */
export const addRow = (
  rowList: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  index: number,
  row: GridRow | HierarchyGridRow | ExpandableGridRow
) => {
  rowList.splice(index, 0, row);
};

/**
 * Deletes a row from the specified index of a list of rows.
 * @param {GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]} rowList - Array rows from which to delete a row.
 * @param {number} index - Index where the row should be deleted.
 */
export const deleteRow = (rowList: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[], index: number) => {
  rowList.splice(index, 1);
};

/**
 * @param {GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]} rowList List of rows in which to look for the row, it will also look for the row in the childRows
 * @param {string} uniqueRowId The key that contains the unique value of the row
 * @param {ReactNode} uniqueRowIdValue Unique value to identify the row
 * @returns {GridRow | HierarchyGridRow | ExpandableGridRow | undefined} A copy of the Row or undefined if not found
 */
export const rowFinderBasedOnId = (
  rowList: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  uniqueRowId: string,
  uniqueRowIdValue: ReactNode
): GridRow | HierarchyGridRow | ExpandableGridRow | undefined => {
  let foundRow: GridRow | HierarchyGridRow | ExpandableGridRow | undefined;
  rowList.forEach((row) => {
    if (rowKeyGetter(row, uniqueRowId) === uniqueRowIdValue) {
      foundRow = { ...row };
    }
    if (row.childRows && Array.isArray(row.childRows) && !foundRow) {
      foundRow = rowFinderBasedOnId(row.childRows, uniqueRowId, uniqueRowIdValue);
    }
  });
  if (foundRow) {
    return foundRow;
  }
  return undefined;
};

/**
 * Recursively selects or deselects children rows based on the checked state.
 * @param {HierarchyGridRow[]} rowList - List of child rows that need to be checked/unchecked.
 * @param {string} uniqueRowId - Key used to uniquely identify each row.
 * @param {Set<string | number>} selectedRows - Set of selected rows.
 * @param {boolean} checked - Boolean indicating whether the rows should be selected (true) or deselected (false).
 * @param {boolean} expandingChildren - Defines children are being expanded or not, used to avoid removing children that were previously set when expanding an unset parent
 */
const getChildrenSelection = (
  rowList: HierarchyGridRow[],
  uniqueRowId: string,
  selectedRows: Set<string | number>,
  checked: boolean,
  hierarchyValidation?: boolean
) => {
  rowList.forEach((row) => {
    if (row.childRows) {
      // Recursively select/deselect child rows
      getChildrenSelection(row.childRows, uniqueRowId, selectedRows, checked, hierarchyValidation);
    }
    if (checked) {
      selectedRows.add(rowKeyGetter(row, uniqueRowId));
    } else {
      if (!hierarchyValidation) {
        selectedRows.delete(rowKeyGetter(row, uniqueRowId));
      }
    }
  });
};

/**
 * Check if the parent and its parent should be selected/unselected
 * @param {HierarchyGridRow[]} rowList
 * @param {ReactNode} uniqueRowKeyValue Unique value of the selected row
 * @param {ReactNode} parentKeyValue Unique value of the parent Row
 * @param {string} uniqueRowId Key where the unique value is located
 * @param {Set<string | number>} selectedRows - Set of selected rows.
 * @param {boolean} checkedStateToMatch
 */
const getParentSelectedState = (
  rowList: HierarchyGridRow[],
  parentKeyValue: ReactNode,
  uniqueRowId: string,
  selectedRows: Set<string | number>,
  checkedStateToMatch: boolean
) => {
  if (!rowList.some((row) => uniqueRowId in row)) {
    return;
  }
  const parentRow = rowFinderBasedOnId(rowList, uniqueRowId, parentKeyValue) as HierarchyGridRow;

  if (!parentRow) {
    return;
  }

  // Check if we are unselecting or any of the other direct childRows is unselected
  const isAnyChildUnselected = parentRow.childRows?.some((row) => !selectedRows.has(rowKeyGetter(row, uniqueRowId)));

  if (!checkedStateToMatch || isAnyChildUnselected) {
    // If the parent is selected but should not be, deselect it
    if (selectedRows.has(rowKeyGetter(parentRow, uniqueRowId))) {
      selectedRows.delete(rowKeyGetter(parentRow, uniqueRowId));
    }
  } else if (parentRow.childRows && !isAnyChildUnselected) {
    // If all child rows are selected, we select the parent
    selectedRows.add(rowKeyGetter(parentRow, uniqueRowId));
  }

  // Recursively check the parent's parent if necessary
  if (parentRow.parentKey) {
    getParentSelectedState(rowList, parentRow.parentKey, uniqueRowId, selectedRows, checkedStateToMatch);
  }
};

/**
 * Updates the rows when the checkbox state changes
 * @param {GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]} rows - Array of rows that are currently displayed.
 * @param {GridRow | HierarchyGridRow | ExpandableGridRow} row - Row object to render the checkbox for.
 * @param {string} uniqueRowId - Unique identifier for each row.
 * @param {string} columnKey - Key of the column that displays the hierarchy trigger.
 * @param {Set<string | number>} selectedRows - Set of selected rows.
 * @param {boolean} checked - Whether the box has been checked or unchecked
 * @param {Function} onSelectRows - Callback function that triggers when rows are selected/deselected.
 * @returns {JSX.Element} Button that toggles visibility of child rows.
 */
const handleCheckboxUpdate = (
  rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[],
  row: GridRow | HierarchyGridRow | ExpandableGridRow,
  uniqueRowId: string,
  selectedRows: Set<string | number>,
  checked: boolean,
  onSelectRows?: (_selected: Set<string | number>) => void,
  hierarchyValidation?: boolean
) => {
  const selected = new Set(selectedRows);
  if (checked) {
    selected.add(rowKeyGetter(row, uniqueRowId));
  } else if (!hierarchyValidation) {
    selected.delete(rowKeyGetter(row, uniqueRowId));
  }
  if (row.childRows && Array.isArray(row.childRows)) {
    getChildrenSelection(row.childRows, uniqueRowId, selected, checked, hierarchyValidation);
  }
  if (row.parentKey) {
    getParentSelectedState(rows, row.parentKey, uniqueRowId, selected, checked);
  }
  onSelectRows?.(selected);
};

/**
 * Returns the starting index for paginated items on a specific page.
 * @param {number} currentPageInternal - The current page number.
 * @param {number} itemsPerPage - Number of items per page.
 * @param {number} page - Target page number.
 * @returns {number} The starting index of items for the given page.
 */
export const getMinItemsPerPageIndex = (currentPageInternal: number, itemsPerPage: number, page: number) =>
  currentPageInternal === 1 ? 0 : itemsPerPage * (page - 1);

/**
 * Returns the ending index for paginated items on a specific page.
 * @param {number} minItemsPerPageIndex - The starting index of items for the current page.
 * @param {number} itemsPerPage - Number of items per page.
 * @param {GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]} rows - List of all rows to paginate.
 * @param {number} page - Target page number.
 * @returns {number} The ending index of items for the given page.
 */
export const getMaxItemsPerPageIndex = (
  minItemsPerPageIndex: number,
  itemsPerPage: number,
  rows: GridRow[] | ExpandableGridRow[] | HierarchyGridRow[],
  page: number
) => (minItemsPerPageIndex + itemsPerPage > rows.length ? rows.length : itemsPerPage * page - 1);

/**
 * Filters and returns paginated rows along with their children rows if applicable.
 * @param {GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]} rows - All rows from which to select the paginated ones.
 * @param {string} uniqueRowId - The key used to uniquely identify each row.
 * @param {number} start - The starting index for pagination.
 * @param {number} end - The ending index for pagination.
 * @returns {GridRow[] | ExpandableGridRow[] | HierarchyGridRow[]} List of rows that should be rendered in the current pagination view, including child rows.
 */
export const getPaginatedNodes = (
  rows: readonly GridRow[] | ExpandableGridRow[] | HierarchyGridRow[],
  uniqueRowId?: string,
  start?: number,
  end?: number
): readonly GridRow[] | ExpandableGridRow[] | HierarchyGridRow[] => {
  if (!uniqueRowId) {
    return rows.slice(start, end);
  }
  const rowsToPaginate: HierarchyGridRow[] =
    start != null && end != null
      ? rows
          .filter(({ parentKey, isExpandedChildContent }) => parentKey == null && isExpandedChildContent == null)
          .slice(start, end)
      : [...rows];

  // Recursive function to check childRows at any depth
  const isRowInHierarchy = (row: HierarchyGridRow, targetId: ReactNode): boolean => {
    if (row[uniqueRowId] === targetId) {
      return true;
    }
    return !!row?.childRows?.some((child) => isRowInHierarchy(child, targetId));
  };

  // Filter rows to include only those that are within the pagination range or are child rows
  return rows.filter((row) =>
    rowsToPaginate.some(
      (rowToPaginate) =>
        rowToPaginate[uniqueRowId] === row[uniqueRowId] ||
        (rowToPaginate.contentIsExpanded &&
          row?.triggerRowKey === rowToPaginate[uniqueRowId] &&
          row?.isExpandedChildContent) ||
        rowToPaginate?.childRows?.some((child) => isRowInHierarchy(child, row[uniqueRowId]))
    )
  );
};

/**
 * Type guard to ensure `key` is a valid key of the `row` object.
 * This function checks if the given `key` exists within the provided object `obj`.
 *
 * @template T - The type of the row object.
 * @param {string} key - The key to check if it exists in the row object.
 * @param {T} obj - The row object to check the key against.
 * @returns {boolean} - Returns `true` if `key` is a valid key of `obj`, otherwise `false`.
 *
 */
export const isKeyOfRow = <T extends GridRow>(key: string, obj: T): key is Extract<keyof T, string> => {
  return key in obj;
};
