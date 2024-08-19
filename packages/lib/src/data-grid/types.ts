import { ReactElement } from "react";

export type GridColumn = {
  key: string;
  label: string;
  resizable?: boolean;
  sortable?: boolean;
  draggable?: boolean;
  textEditable?: boolean;
  summaryKey?: string;
  alignment?: "left" | "right" | "center";
};

export type GridRow = {
  [key: string]: React.ReactNode | undefined;
};

export type HierarchyGridRow = GridRow & {
  childRows?: HierarchyGridRow[] | GridRow[];
};

export type ExpandableGridRow = GridRow & {
  expandedContent?: React.ReactNode;
  expandedContentHeight?: number;
};

export type ExpandableRows = {
  rows: ExpandableGridRow[];
  expandable: true;
  uniqueRowId: string;
};

export type HierarchyRows = {
  rows: HierarchyGridRow[];
  uniqueRowId: string;
  expandable?: false;
};

export type SelectableGridProps =
  | {
      selectable: true;
      selectedRows: Set<string | number>;
      onSelectRows: (selectedRows: Set<number | string>) => void;
      uniqueRowId: string;
    }
  | {
      selectable?: false;
      selectedRows?: never;
      onSelectRows?: never;
      uniqueRowId?: string;
    };

export type CommonProps = {
  columns: GridColumn[];
  summaryRow?: GridRow;
  onGridRowsChange?: (rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => void;
};

export type BasicGridProps = {
  rows: GridRow[];
  expandable?: false;
};

type Props = CommonProps &
  (
    | (BasicGridProps & SelectableGridProps)
    | (ExpandableRows & SelectableGridProps)
    | (HierarchyRows & SelectableGridProps)
  );

export type ColSpanArgs<TRow, TSummaryRow> =
  | { type: 'HEADER' }
  | { type: 'ROW'; row: TRow }
  | { type: 'SUMMARY'; row: TSummaryRow };

export interface Column<TRow, TSummaryRow = unknown> {
  name: string | ReactElement;
  key: string;
  width?: number | string;
  minWidth?: number
  maxWidth?: number
  cellClass?: string | ((row: TRow) => string)
  headerCellClass?: string
  summaryCellClass?: string | ((row: TSummaryRow) => string)
  // renderHeaderCell?: (props: RenderHeaderCellProps<TRow, TSummaryRow>) => ReactNode
  // renderCell?: (props: RenderCellProps<TRow, TSummaryRow>) => ReactNode
  // renderSummaryCell?: (props: RenderSummaryCellProps<TSummaryRow, TRow>) => ReactNode
  // renderGroupCell?: (props: RenderGroupCellProps<TRow, TSummaryRow>) => ReactNode
  // renderEditCell?: (props: RenderEditCellProps<TRow, TSummaryRow>) => ReactNode
  editable?: boolean | ((row: TRow) => boolean)
  colSpan?: (args: ColSpanArgs<TRow, TSummaryRow>) => number;
  frozen?: boolean;
  resizable?: boolean;
  sortable?: boolean;
  draggable?: boolean;
  sortDescendingFirst?: boolean;
  editorOptions?: {
    displayCellContent?: boolean;
    commitOnOutsideClick?: boolean;
  }
}

export default Props;
