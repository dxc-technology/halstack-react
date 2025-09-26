import { ReactNode } from "react";
import { Margin, Space } from "../common/utils";

export type Column = {
  /**
   * Column display value.
   */
  displayValue: ReactNode;
  /**
   * Boolean value to indicate whether the column is sortable or not.
   */
  isSortable?: boolean;
};

type Cell = {
  /**
   * Value to be displayed in the cell.
   */
  displayValue: ReactNode;
  /**
   * Value to be used when sorting the table by that
   * column. If not indicated displayValue will be used for sorting.
   */
  sortValue?: string | number | Date;
};

export type Row = Cell[];

type CommonProps = {
  /**
   * An array of objects representing the columns of the table.
   */
  columns: Column[];
  /**
   * Size of the margin to be applied to the component. You can pass an object with 'top',
   * 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Determines the visual style and layout
   * - "default": The default mode with big spacing
   * - "reduced": A reduced mode with minimal spacing for dense tables
   */
  mode?: "default" | "reduced";
  /**
   * An array of objects representing the rows of the table, you will have
   * as many objects as columns in the table.
   */
  rows: Row[];
  /**
   * Value of the tabindex attribute applied to the sortable icon.
   */
  tabIndex?: number;
  /**
   * A fixed height must be set to enable virtualization.
   * If no height is provided, the table will automatically adjust to the height of its content, and virtualization will not be applied.
   */
  virtualizedHeight?: string;
};

type PaginatedProps = CommonProps & {
  hidePaginator?: false;
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
};

type NonPaginatedProps = CommonProps & {
  /**
   * If true, paginator will not be displayed.
   */
  hidePaginator: true;
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
   * If true, a select component for navigation between pages will be displayed.
   */
  showGoToPage?: never;
};

type Props = PaginatedProps | NonPaginatedProps;

export default Props;
