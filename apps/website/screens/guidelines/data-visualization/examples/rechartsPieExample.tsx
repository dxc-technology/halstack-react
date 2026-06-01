const code = `() => interface PieChartDataItem {
  name: string;
  value: number;
  fill?: string;
}

interface PieChartProps {
  data: PieChartDataItem[];
  variant?: "pie" | "donut";
  // Grouped Props
  styles?: {
    outerRadius?: number;
    innerRadius?: number;
    paddingAngle?: number;
    colors?: string[];
  };
  axis?: {
    showLabels?: boolean;
    fontSize?: number;
    tickColor?: string;
  };
  layout?: {
    height?: number | \`\${number}%\`;
    margin?: { top: number; right: number; left: number; bottom: number };
  };
  showLegend?: boolean;
}

const DEFAULT_COLORS = ["#0095ff", "#5f249f", "#00c49f", "#ffbb28", "#ff8042"];

const PieChart: React.FC<PieChartProps> = ({
  data,
  variant = "pie",
  styles = {},
  axis = {},
  layout = {},
  showLegend = true,
}) => {
  // Determine default inner radius based on variant
  const defaultInnerRadius = variant === "donut" ? 60 : 0;

  // Default values for grouped props
  const {
    outerRadius = 80,
    innerRadius = defaultInnerRadius,
    paddingAngle = variant === "donut" ? 5 : 0,
    colors = DEFAULT_COLORS,
  } = styles;

  const { showLabels = true, fontSize = 12, tickColor = "#666" } = axis;

  const {
    height = 300,
    margin = { top: 20, right: 80, left: 80, bottom: 20 },
  } = layout;

  // Memoize label renderer to avoid re-creating function on every render
  const renderLabel = useCallback(
    (props: any) => (
      <text
        x={props.x}
        y={props.y}
        fill={tickColor}
        fontSize={fontSize}
        textAnchor={props.textAnchor}
        dominantBaseline={props.dominantBaseline}
      >
        {\`\${props.name}: \${props.value}%\`}
      </text>
    ),
    [tickColor, fontSize]
  );

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsPieChart margin={margin}>
        <Pie
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={paddingAngle}
          dataKey="value"
          cy="50%"
          label={showLabels ? renderLabel : false}
          labelLine={showLabels}
        >
          {data.map((entry, index) => (
            <Cell
              key={\`cell-\${index}\`}
              fill={entry.fill || colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        {showLegend && <Legend />}
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};`;

export default { code, scope: {} };
