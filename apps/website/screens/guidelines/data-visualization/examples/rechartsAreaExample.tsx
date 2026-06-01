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
  showLegend = false,
  showBrush = false,
}) => {
  // Default values for grouped props
  const {
    gridColor = "#f0f0f0",
    verticalGrid = false,
    horizontalGrid = true,
    gridDashArray = "3 3",
  } = styles;

  const { fontSize = 10, tickColor = "#666", yDomain } = axis;

  const { height = 300, margin = { top: 0, right: 0, left: 0, bottom: 0 } } =
    layout;

  // Memoize gradients to avoid re-creating them on every render
  const gradients = useMemo(
    () =>
      areas.map((area) => (
        <linearGradient
          key={\`gradient-\${area.dataKey}\`}
          id={\`color-\${area.dataKey}\`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="5%"
            stopColor={area.color || "#5f249f"}
            stopOpacity={area.fillOpacity || 0.1}
          />
          <stop
            offset="95%"
            stopColor={area.color || "#5f249f"}
            stopOpacity={0}
          />
        </linearGradient>
      )),
    [areas]
  );

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data} margin={margin}>
        <defs>{gradients}</defs>
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
        />
        <YAxis
          domain={yDomain}
          axisLine={false}
          tickLine={false}
          width={40}
          tick={{ fontSize: fontSize, fill: tickColor }}
        />
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

        {areas.map((area) => (
          <Area
            key={area.dataKey}
            type="monotone"
            dataKey={area.dataKey}
            name={area.name}
            stroke={area.color || "#5f249f"}
            fillOpacity={1}
            fill={\`url(#color-\${area.dataKey})\`}
            strokeWidth={2}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};`;

export default { code, scope: {} };
