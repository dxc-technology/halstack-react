const code = `() => interface LineSeriesConfig {
  dataKey: string;
  name: string;
  color?: string;
}

interface LineChartProps {
  data: Array<Record<string, string | number>>;
  lines: LineSeriesConfig[];
  xKey?: string;
  // Grouped Props
  styles?: {
    gridColor?: string;
    verticalGrid?: boolean;
    horizontalGrid?: boolean;
    gridDashArray?: string;
    strokeWidth?: number;
    dotRadius?: number;
  };
  axis?: {
    fontSize?: number;
    tickColor?: string;
    yDomain?: [number, number];
    xLabel?: string;
    hideX?: boolean;
    hideY?: boolean;
  };
  layout?: {
    height?: number | \`\${number}%\`;
    margin?: { top: number; right: number; left: number; bottom: number };
  };
  showLegend?: boolean;
  showBrush?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  lines,
  xKey = "name",
  styles = {},
  axis = {},
  layout = {},
  showLegend = false,
  showBrush = false,
}) => {
  // Default values for grouped props
  const {
    gridColor = "#f0f0f0",
    verticalGrid = false,
    horizontalGrid = true,
    gridDashArray = "3 3",
    strokeWidth = 2,
    dotRadius = 4,
  } = styles;

  const {
    fontSize = 10,
    tickColor = "#666",
    yDomain,
    xLabel,
    hideX = false,
    hideY = false,
  } = axis;

  const { height = 300, margin = { top: 10, right: 20, left: 0, bottom: 0 } } =
    layout;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data} margin={margin}>
        <CartesianGrid
          strokeDasharray={gridDashArray}
          stroke={gridColor}
          vertical={verticalGrid}
          horizontal={horizontalGrid}
        />
        {!hideX && (
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
        )}
        {!hideY && (
          <YAxis
            domain={yDomain}
            axisLine={false}
            tickLine={false}
            width={40}
            tick={{ fontSize: fontSize, fill: tickColor }}
          />
        )}
        <Tooltip />
        {showLegend && <Legend />}
        {showBrush && (
          <Brush
            dataKey={xKey}
            height={30}
            stroke={gridColor}
            fill="#fff"
            padding={{ top: 10, bottom: 0, left: 0, right: 0 }}
          />
        )}

        {lines.map((line) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            name={line.name}
            stroke={line.color || "#0095ff"}
            strokeWidth={strokeWidth}
            dot={{ fill: line.color || "#0095ff", r: dotRadius }}
            activeDot={{ r: dotRadius + 2 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};`;

export default { code, scope: {} };
