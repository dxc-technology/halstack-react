const code = `() => interface HorizontalBarData {
  label: string;
  value: number;
  fill?: string;
}

interface HorizontalBarChartProps {
  data: HorizontalBarData[];
  // Grouped Props
  styles?: {
    barColor?: string;
    barHeight?: number;
    gap?: string;
    borderRadius?: number;
    borderColor?: string;
  };
  axis?: {
    fontSize?: string;
    labelColor?: string;
    valueFontSize?: string;
    valueFontWeight?: string;
  };
  layout?: {
    padding?: string;
    width?: string;
  };
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  styles = {},
  axis = {},
  layout = {},
}) => {
  // Default values for grouped props
  const {
    barColor = "#5f249f",
    barHeight = 16,
    gap = "1.5rem",
    borderRadius = 14,
    // borderColor = "var(--border-color-primary-light)",
    borderColor = "#5f249f",
  } = styles;

  const {
    fontSize = "1rem",
    labelColor = "#666666",
    valueFontSize = "1.5rem",
    valueFontWeight = "600",
  } = axis;

  const { width = "100%" } = layout;

  return (
    <DxcContainer width={width}>
      <DxcFlex direction="column" gap={gap}>
        {data.map((metric, index) => (
          <DxcFlex key={index} direction="column" gap="0.5rem">
            <DxcFlex justifyContent="space-between" alignItems="center">
              <DxcTypography color={labelColor} fontSize={fontSize}>
                {metric.label}
              </DxcTypography>
              <DxcTypography
                fontSize={valueFontSize}
                fontWeight={valueFontWeight}
              >
                {metric.value}%
              </DxcTypography>
            </DxcFlex>
            <DxcContainer
              border={{
                color: borderColor,
                width: "var(--border-width-s)",
                style: "var(--border-style-default)",
              }}
              borderRadius={\`\${borderRadius}px\`}
              overflow={"hidden"}
              background={{ color: "white" }}
            >
              <ResponsiveContainer width="100%" height={barHeight}>
                <BarChart
                  data={[{ value: metric.value }]}
                  layout="vertical"
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  barSize={barHeight - 2} // Slightly smaller than container
                >
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" hide />
                  <Bar
                    dataKey="value"
                    radius={[
                      borderRadius,
                      borderRadius,
                      borderRadius,
                      borderRadius,
                    ]}
                    fill={metric.fill || barColor}
                    // background={{ fill: '#f0f0f0', stroke: '#5f249f', strokeWidth: 1 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </DxcContainer>
          </DxcFlex>
        ))}
      </DxcFlex>
    </DxcContainer>
  );
};`;

export default { code, scope: {} };
