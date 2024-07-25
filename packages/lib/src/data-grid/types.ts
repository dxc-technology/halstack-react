export type GridColumn = {
  key: string;
  name: string;
  resizable?: boolean;
  sortable?: boolean;
  draggable?: boolean;
  textEditable?: boolean;
  summaryKeyToRender?: string;
  alignment?: "left" | "right" | "center";
};

export type GridRow = {
  [key: string]: React.ReactNode | undefined;
};

export type HierarchyGridRow = GridRow & {
  childRows?: HierarchyGridRow[];
  rowLevel?: number;
};

export type ExpandableGridRow = GridRow & {
  expandedContent?: React.ReactNode;
  expandedContentHeight?: number;
};

export type ExpandableRows = {
  columns: GridColumn[];
  rows: ExpandableGridRow[];
  expandable: true;
  uniqueRowId: string;
  summaryRow?: GridRow;
};

export type HierarchyRows = {
  columns: GridColumn[];
  rows: HierarchyGridRow[];
  uniqueRowId: string;
  expandable?: false;
  summaryRow?: GridRow;
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

type Props =
  | ({
      columns: GridColumn[];
      rows: GridRow[];
      expandable?: never;
      summaryRow?: GridRow;
    } & SelectableGridProps)
  | (ExpandableRows & SelectableGridProps)
  | (HierarchyRows & SelectableGridProps);

export default Props;
