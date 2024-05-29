type DataTypes = string | number;

type BarChartThresholdSeries<X> = {
  /**
   * Title of the series.
   */
  title: string;
  /**
   * Type of the series. It can be either "threshold" or "bar".
   */
  type: "threshold";
  /**
   * Value of the y axis.
   */
  y?: number;
  /**
   * Value of the x axis. It can be a string or a number.
   */
  x?: X;
};

type BarChartDataSeries<X> = {
  /**
   * Title of the series.
   */
  title: string;
  /**
   * Type of the series. It can be either "threshold" or "bar".
   */
  type: "bar";
  /**
   * Data points of the series. Each data point is represented by an object with an x value and a y value.
   */
  data: { x: X; y: number }[];
};

type BarChartSeries<X> = BarChartThresholdSeries<X> | BarChartDataSeries<X>;

type BarChartProps<X extends DataTypes> = {
  /**
   * Title of the chart.
   */
  chartTitle?: string;
  /**
   * Error state of the chart. If set, the chart will display an error message with a retry action.
   */
  error?: string;
  /**
   * If true, the chart will display horizontal bars.
   */
  horizontalBars?: boolean;
  /**
   * Legend title.
   */
  legendTitle?: string;
  /**
   * Activates the loading state.
   */
  loading?: boolean;
  /**
   * Event called when the bar chart filters are changed.
   */
  onFilterChange?: (visibleSeries: string[]) => void;
  /**
   * Event called when the highlighted series has changed because of user interaction.
   */
  onHighlightChange?: (highlightedSeries?: string) => void;
  /**
   * Event called when the user clicks on the retry action of the error state.
   */
  onRetry?: () => void;
  /**
   * Array that represents the source of data for the displayed chart.
   */
  series: BarChartSeries<X>[];
  /**
   * If true, the chart will display a filter to show/hide series.
   */
  showFilter?: boolean;
  /**
   * If true, the chart will display a legend with the corresponding data series.
   */
  showLegend?: boolean;
  /**
   * When set to true, bars in the same data point are stacked instead of being grouped next to each other.
   */
  stackedBars?: boolean;
  /**
   * Determines the domain of the x axis, i.e. the range of values that will be visible in the chart
   */
  xDomain?: X[];
  /**
   * Formatter function for the x axis. It receives the x value and returns a string.
   */
  xFormatter?: (value: X) => string;
  /**
   * Title of the x axis.
   */
  xTitle?: string;
  /**
   * Determines the domain of the y axis, i.e. the range of values that will be visible in the chart
   */
  yDomain?: [number, number];
  /**
   * Formatter function for the y axis. It receives the y value and returns a string.
   */
  yFormatter?: (value: number) => string;
  /**
   * Title of the y axis.
   */
  yTitle?: string;
};

type InsetWrapperProps = {
  condition: boolean;
  children: React.ReactNode;
};

export default BarChartProps;

export type { DataTypes, InsetWrapperProps };
