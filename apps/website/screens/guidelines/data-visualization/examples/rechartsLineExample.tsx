const code = `() => {
  const data = [
    { month: "Jan", desktop: 400, mobile: 240 },
    { month: "Feb", desktop: 300, mobile: 139 },
    { month: "Mar", desktop: 200, mobile: 980 },
    { month: "Apr", desktop: 278, mobile: 390 },
  ];

  return (
    <DxcInset space="var(--spacing-padding-l)">
      <LineChart
        data={data}
        xKey="month"
        lines={[
          { dataKey: "desktop", name: "Desktop", color: "#0095ff" },
          { dataKey: "mobile", name: "Mobile", color: "#5f249f" },
        ]}
        axis={{ xLabel: "Month" }}
        layout={{ height: 300 }}
        showLegend
        showBrush
      />
    </DxcInset>
  );
};`;

export default { code, scope: {} };
