type DataTypes = string | number;

type BarChartThresholdSeries<X> = {
  title: string;
  type: "threshold";
  y?: number;
  x?: X;
};

type BarChartDataSeries<X> = {
  title: string;
  type: "bar";
  data: { x: X; y: number }[];
};

type BarChartSeries<X> = BarChartThresholdSeries<X> | BarChartDataSeries<X>;

type BarChartProps<X extends DataTypes> = {
  chartTitle?: string;
  error?: string;
  horizontalBars?: boolean;
  legendTitle?: string;
  loading?: boolean;
  onFilterChange?: (visibleSeries: string[]) => void;
  onHighlightChange?: (highlightedSeries?: string) => void;
  onRetry?: () => void;
  series: BarChartSeries<X>[];
  showFilter?: boolean;
  showLegend?: boolean;
  stackedBars?: boolean;
  xDomain?: X[];
  xTitle?: string;
  yDomain?: [number, number];
  yTitle?: string;
};

type InsetWrapperProps = {
  condition: boolean;
  children: React.ReactNode;
};

export default BarChartProps;

export type { DataTypes, InsetWrapperProps };
