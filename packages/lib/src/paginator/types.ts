type Props = {
  /**
   * Number of the current selected page.
   */
  currentPage?: number;
  /**
   * Number of items per page.
   */
  itemsPerPage?: number;
  /**
   * Array of numbers representing the items per page options.
   * If undefined, the select with items per page options will not be displayed.
   */
  itemsPerPageOptions?: number[];
  /**
   * This function will be called when the user selects an item per page option.
   * The number will be passed as a parameter to this function.
   */
  itemsPerPageFunction?: (itemsPerPage: number) => void;
  /**
   * Total number of items in the pages.
   */
  totalItems?: number;
  /**
   * If true, a select will be displayed with the page numbers to move through them.
   */
  showGoToPage?: boolean;
  /**
   * This function will be called when the user clicks on any of the button to change pages.
   * The page number will be passed as a parameter to this function.
   */
  onPageChange?: (page: number) => void;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

export default Props;
