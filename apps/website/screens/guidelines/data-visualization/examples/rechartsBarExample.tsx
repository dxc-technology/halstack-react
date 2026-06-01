const code = `() => {
  interface AreaSeriesConfig {
  dataKey: string;
  name: string;
  color?: string;
  fillOpacity?: number;
}

interface AreaChartProps {
  data: Array<Record<string, string | number>>;
  areas: AreaSeriesConfig[];
  xKey?: string;
  // Grouped Props
  styles?: {
    gridColor?: string;
    verticalGrid?: boolean;
    horizontalGrid?: boolean;
    gridDashArray?: string;
  };
  axis?: {
    fontSize?: number;
    tickColor?: string;
    yDomain?: [number, number];
  };
  layout?: {
    height?: number | \`\${number}%\`;
    margin?: { top: number; right: number; left: number; bottom: number };
  };
  showLegend?: boolean;
  showBrush?: boolean;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  areas,
  xKey = "name",
  styles = {},
  axis = {},
  layout = {},
  showLegend = false,interface BarSeriesConfig {
  dataKey: string;
  name: string;
  color?: string;
}

interface BarChartProps {
  data: Array<Record<string, string | number>>;
  xKey?: string;
  yKey?: string;
  bars?: BarSeriesConfig[];
  // Grouped Props
  styles?: {
    barColor?: string;
    gridColor?: string;
    verticalGrid?: boolean;
    horizontalGrid?: boolean;
    gridDashArray?: string;
    barRadius?: [number, number, number, number];
    barSize?: number;
    cursorColor?: string;
  };
  axis?: {
    fontSize?: number;
    tickColor?: string;
    xLabel?: string;
    yDomain?: [number, number];
  };
  layout?: {
    height?: number | string;
    margin?: { top: number; right: number; left: number; bottom: number };
  };
  showLegend?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  xKey = "name",
  yKey = "value",
  bars,
  styles = {},
  axis = {},
  layout = {},
  showLegend = false,
}) => {
  // Default values for grouped props
  const {
    barColor = "#0095ff",
    gridColor = "#f0f0f0",
    verticalGrid = false,
    horizontalGrid = true,
    gridDashArray = "3 3",
    barRadius = [4, 4, 0, 0],
    barSize = 40,
    cursorColor = "#f5f5f5",
  } = styles;

  const { fontSize = 10, tickColor = "#666", xLabel, yDomain } = axis;

  const { height = 300, margin = { top: 0, right: 0, left: 0, bottom: 0 } } =
    layout;

  return (
    <ResponsiveContainer width="100%" height={height as any}>
      <RechartsBarChart data={data} margin={margin}>
        <CartesianGrid
          strokeDasharray={gridDashArray}
          stroke={gridColor}
          vertical={verticalGrid}
          horizontal={horizontalGrid}
        />
        <XAxis
          dataKey={xKey}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: fontSize, fill: tickColor }}
          label={
            xLabel
              ? {
                  value: xLabel,
                  position: "insideBottom",
                  offset: -10,
                  fontSize: fontSize,
                  fill: tickColor,
                }
              : undefined
          }
        />
        <YAxis
          domain={yDomain}
          axisLine={false}
          tickLine={false}
          width={40}
          tick={{ fontSize: fontSize, fill: tickColor }}
        />
        <Tooltip cursor={{ fill: cursorColor }} />
        {showLegend && <Legend />}
        {bars ? (
          bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color || barColor}
              radius={barRadius}
              barSize={barSize}
            />
          ))
        ) : (
          <Bar
            dataKey={yKey}
            fill={((entry: any) => (entry.fill as string) || barColor) as any}
            radius={barRadius}
            barSize={barSize}
          />
        )}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};`;

export default { code, scope: {} };
