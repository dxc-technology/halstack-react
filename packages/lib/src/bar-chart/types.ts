type DataTypes = string | number;

type ThresholdSeries<X> = {
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

type BarDataSeries<X> = {
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

type BarChartSeries<X> = ThresholdSeries<X> | BarDataSeries<X>;

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
   * When set to true, the x and y axes are swapped, resulting in bars
   * being displayed horizontally rather than vertically. This feature is
   * applicable only when the chart contains exclusively bar series.
   */
  horizontalBars?: boolean;
  /**
   * Title of the chart legend.
   */
  legendTitle?: string;
  /**
   * If true, activates the loading state of the component.
   */
  loading?: boolean;
  /**
   * This function will be called when the user changes the displayed
   * data series with the default filter. This event is only triggered
   * when 'showFilter' is set to 'true'.
   */
  onFilterChange?: (visibleSeries: string[]) => void;
  /**
   * This function will be called when the user hovers over a data series
   * through the chart legend. This event is only triggered when
   * 'showLegend' is set to 'true'.
   */
  onHighlightChange?: (highlightedSeries?: string) => void;
  /**
   * This function will be called when the user clicks the retry action
   * in the error state. A 'DxcButton' component will be
   * displayed if this prop is defined to perform the action.
   */
  onRetry?: () => void;
  /**
   * An array of objects representing the data series to be displayed in
   * the chart.
   */
  series: BarChartSeries<X>[];
  /**
   * If true, the chart will display a filter to allow the user to change
   * the displayed data series.
   */
  showFilter?: boolean;
  /**
   * If true, the chart will display a legend with the data series
   * information.
   */
  showLegend?: boolean;
  /**
   * If true, bars in the same data point are stacked instead of being
   * grouped next to each other.
   */
  stackedBars?: boolean;
  /**
   * Specifies the x-axis domain, defining the visible range. For
   * numerical data, use a tuple: [minValue, maxValue]. For categorical
   * data, use an array of category strings. Explicitly setting this is
   * recommended. If not set, the component will auto-fit all data
   * points.
   */
  xDomain?: X[];
  /**
   * Function to format the displayed label of an x-axis mark.
   */
  xFormatter?: (value: X) => string;
  /**
   * Title of the x axis.
   */
  xTitle?: string;
  /**
   * Specifies the y-axis domain, defining the visible range. The domain
   * is defined by a tuple: [minValue, maxValue]. Explicitly setting this
   * is recommended. If not set, the component will auto-fit all data
   * points.
   */
  yDomain?: [number, number];
  /**
   * Function to format the displayed label of an y-axis mark.
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
