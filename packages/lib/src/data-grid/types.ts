import { ReactNode } from "react";
import { SortColumn } from "react-data-grid";

export type GridColumn = {
  /**
   * Key that will be rendered from each row in rows.
   */
  key: string;
  /**
   * Label that will be used for the column header.
   */
  label: string;
  /**
   * Whether the column is resizable or not.
   */
  resizable?: boolean;
  /**
   * Whether the column is sortable or not.
   */
  sortable?: boolean;
  /**
   * Custom criteria for sorting the column.
   */
  sortFn?: (_a: ReactNode, _b: ReactNode) => 0 | 1 | -1;
  /**
   * Whether the column is draggable or not.
   */
  draggable?: boolean;
  /**
   * Whether the column cells are editable or not.
   */
  textEditable?: boolean;
  /**
   * Value that will be rendered from the summaryRow.
   */
  summaryKey?: string;
  /**
   * Sets the alignment inside the cells.
   */
  alignment?: "left" | "right" | "center";
};

export type GridRow = {
  /**
   * List of rows that will be rendered in each cell based on the key in each column.
   */
  [key: string]: ReactNode | undefined;
};

export type HierarchyGridRow = GridRow & {
  /**
   * Array of child rows nested under this row, enabling hierarchical (tree-like) structures.
   * These child rows will be displayed when the parent row is expanded.
   */
  childRows?: HierarchyGridRow[] | GridRow[];
  /**
   * Function called when a row with children is expanded or collapsed (based on the value of `open`).
   * Returns (or resolves to) the array of child rows nested under this row to display when expanded.
   */
  childrenTrigger?: (
    open?: boolean,
    triggerRow?: HierarchyGridRow
  ) => (HierarchyGridRow[] | GridRow[]) | Promise<HierarchyGridRow[] | GridRow[]>;
  /**
   * Indicates whether child rows are currently being loaded.
   */
  loadingChildren?: boolean;
  /**
   * Indicates the level of nesting for this row in the hierarchy.
   */
  rowLevel?: number;
  /**
   * Reference to the parent row's unique identifier.
   */
  parentKey?: string | number;
  /**
   * Indicates whether child rows are currently visible.
   */
  visibleChildren?: boolean;
};

export type ExpandableGridRow = GridRow & {
  expandedContent?: ReactNode;
  expandedContentHeight?: number;
  contentIsExpanded?: boolean;
};

export type ExpandableRows = {
  rows: ExpandableGridRow[];
  /**
   * Whether the rows can expand or not.
   */
  expandable: true;
  /**
   * This prop indicates the unique key that can be used to identify each row. This prop is mandatory if selectable is set to true, expandable is set to true or rows is of type HierarchyGridRow[].
   */
  uniqueRowId: string;
};

export type HierarchyRows = {
  rows: HierarchyGridRow[];
  /**
   * This prop indicates the unique key that can be used to identify each row. This prop is mandatory if selectable is set to true, expandable is set to true or rows is of type HierarchyGridRow[].
   */
  uniqueRowId: string;
  /**
   * Whether the rows can expand or not.
   */
  expandable?: false;
};

export type SelectableGridProps =
  | {
      /**
       * Whether the rows are selectable or not.
       */
      selectable: true;
      /**
       * Set of selected rows. This prop is mandatory if selectable is set to true. The uniqueRowId key will be used to identify the each row.
       */
      selectedRows: Set<string | number>;
      /**
       * Function called whenever the selected values changes. This prop is mandatory if selectable is set to true.The uniqueRowId key will be used to identify the rows.
       */
      onSelectRows: (selectedRows: Set<number | string>) => void;
      /**
       * This prop indicates the unique key that can be used to identify each row. This prop is mandatory if selectable is set to true, expandable is set to true or rows is of type HierarchyGridRow[].
       */
      uniqueRowId: string;
    }
  | {
      selectable?: false;
      selectedRows?: never;
      onSelectRows?: never;
      uniqueRowId?: string;
    };

type PaginatedProps = {
  /**
   * If true, paginator will be displayed.
   */
  showPaginator?: true;
  /**
   * Number of total items.
   */
  totalItems?: number;
  /**
   * If true, a select component for navigation between pages will be displayed.
   */
  showGoToPage?: boolean;
  /**
   * Number of items per page.
   */
  itemsPerPage?: number;
  /**
   * An array of numbers representing the items per page options.
   */
  itemsPerPageOptions?: number[];
  /**
   * This function will be called when the user selects an item per page
   * option. The value selected will be passed as a parameter.
   */
  itemsPerPageFunction?: (value: number) => void;
  /**
   * Function called whenever the current page is changed.
   */
  onPageChange?: (_page: number) => void;
  /**
   * Default page in which the datagrid is rendered
   */
  defaultPage?: number;
};

type NonPaginatedProps = {
  /**
   * If true, paginator will be displayed.
   */
  showPaginator: false;
  /**
   * Number of total items.
   */
  totalItems?: never;
  /**
   * If true, a select component for navigation between pages will be displayed.
   */
  showGoToPage?: never;
  /**
   * Number of items per page.
   */
  itemsPerPage?: never;
  /**
   * An array of numbers representing the items per page options.
   */
  itemsPerPageOptions?: never;
  /**
   * This function will be called when the user selects an item per page
   * option. The value selected will be passed as a parameter.
   */
  itemsPerPageFunction?: never;
  /**
   * Function called whenever the current page is changed.
   */
  onPageChange?: never;
  /**
   * Default page in which the datagrid is rendered
   */
  defaultPage?: never;
};

export type CommonProps = {
  columns: GridColumn[];
  /**
   * Extra row that will be always visible.
   */
  summaryRow?: GridRow;
  /**
   * Function called whenever a cell is edited.
   */
  onGridRowsChange?: (_rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => void;
  /**
   * Function called whenever a column is sorted. Receives the sorted
   * column and direction, or `undefined` if no sorting is applied.
   */
  onSort?: (_sortColumn?: SortColumn) => void;
};

export type BasicGridProps = {
  rows: GridRow[];
  /**
   * Whether the rows can expand or not.
   */
  expandable?: false;
};

type Props = CommonProps &
  (PaginatedProps | NonPaginatedProps) &
  (
    | (BasicGridProps & SelectableGridProps)
    | (ExpandableRows & SelectableGridProps)
    | (HierarchyRows & SelectableGridProps)
  );

export default Props;
