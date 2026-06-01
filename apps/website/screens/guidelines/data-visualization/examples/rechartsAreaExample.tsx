const code = `() => {
  const data = [
    { name: "Mon", uv: 4000, pv: 2400 },
    { name: "Tue", uv: 3000, pv: 1398 },
    { name: "Wed", uv: 2000, pv: 9800 },
    { name: "Thu", uv: 2780, pv: 3908 },
  ];

  return (
    <DxcInset space="var(--spacing-padding-l)">
      <AreaChart
        data={data}
        xKey="name"
        areas={[
          { dataKey: "uv", name: "UV", color: "#5f249f" },
          { dataKey: "pv", name: "PV", color: "#0095ff", fillOpacity: 0.12 },
        ]}
        layout={{ height: 300 }}
        showLegend
      />
    </DxcInset>
  );
};`;

export default { code, scope: {} };
