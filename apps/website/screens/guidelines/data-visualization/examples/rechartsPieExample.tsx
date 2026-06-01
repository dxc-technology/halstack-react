const code = `() => {
  const data = [
    { name: "Chrome", value: 48 },
    { name: "Safari", value: 32 },
    { name: "Firefox", value: 14 },
    { name: "Edge", value: 6 },
  ];

  return (
    <DxcInset space="var(--spacing-padding-l)">
      <PieChart data={data} variant="donut" axis={{ showLabels: true }} layout={{ height: 320 }} showLegend />
    </DxcInset>
  );
};`;

export default { code, scope: {} };
