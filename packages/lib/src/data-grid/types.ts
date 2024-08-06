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

type Props = {
  mode?: "default" | "reduced";
  columns: GridColumn[];
  summaryRow?: GridRow;
  onGridRowsChange?: (rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => void;
} & (
  | ({
      rows: GridRow[];
      expandable?: never | false;
    } & SelectableGridProps)
  | (ExpandableRows & SelectableGridProps)
  | (HierarchyRows & SelectableGridProps)
);

export default Props;
