const code = `() => {
  const data = [
    { name: "Q1", revenue: 4200, costs: 2400 },
    { name: "Q2", revenue: 3000, costs: 1398 },
    { name: "Q3", revenue: 2000, costs: 9800 },
    { name: "Q4", revenue: 2780, costs: 3908 },
  ];

  return (
    <DxcInset space="var(--spacing-padding-l)">
      <BarChart
        data={data}
        xKey="name"
        bars={[
          { dataKey: "revenue", name: "Revenue", color: "#0095ff" },
          { dataKey: "costs", name: "Costs", color: "#5f249f" },
        ]}
        axis={{ xLabel: "Quarter", yDomain: [0, 12000] }}
        layout={{ height: 320, margin: { top: 16, right: 16, left: 8, bottom: 24 } }}
        showLegend
      />
    </DxcInset>
  );
};`;

export default { code, scope: {} };
