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
  displayValue: React.ReactNode;
  /**
   * Boolean value to indicate whether the column is sortable or not.
   */
  isSortable?: boolean;
};
type Row = {
  /**
   * Value to be displayed in the cell.
   */
  displayValue: React.ReactNode;
  /**
   * Value to be used when sorting the table by that
   * column. If not indicated displayValue will be used for sorting.
   */
  sortValue?: string;
};

type Props = {
  /**
   * An array of objects representing the columns of the table.
   */
  columns: [Column, ...Column[]];
  /**
   * An array of objects representing the rows of the table, you will have
   * as many objects as columns in the table.
   */
  rows: [Row, ...Row[]];
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

export default Props;
