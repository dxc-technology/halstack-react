type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type Column = {
  /**
   * Column display value.
   */
  displayValue;
};
type Row = {
  /**
   * Value to be displayed in the cell.
   */
  displayValue;
};
type ColumnSortable = Column & {
  /**
   * Boolean value to indicate whether the column is sortable or not.
   */
  isSortable: boolean;
};
type RowSortable = Row & {
  /**
   * Value to be used when sorting the table by that
   * column. If not indicated displayValue will be used for sorting.
   */
  sortValue: boolean;
};
type CommonProps = {
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
  itemsPerPageFunction?: (newValue: number) => void;
  /**
   * Size of the margin to be applied to the component. You can pass an object with 'top',
   * 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex attribute given to the sortable icon.
   */
  tabIndex?: number;
};
export type Props = CommonProps & {
  /**
   * An array of objects representing the columns of the table.
   */
  columns: [Column, ...Column[]];
  /**
   * An array of objects representing the rows of the table, you will have
   * as many objects as columns in the table.
   */
  rows: [Row, ...Row[]];
};
export type PropsSortable = CommonProps & {
  /**
   * An array of objects representing the columns of the table.
   */
  columns: [ColumnSortable, ...ColumnSortable[]];
  /**
   * An array of objects representing the rows of the table, you will have
   * as many objects as columns in the table.
   */
  rows: [RowSortable, ...RowSortable[]];
};
type Overload = {
  (props: Props): JSX.Element;
  (props: PropsSortable): JSX.Element;
};

export default Overload;
