const code = `() => {
  const data = [
    { label: "Performance", value: 82, fill: "#0095ff" },
    { label: "Reliability", value: 64, fill: "#5f249f" },
    { label: "Security", value: 91, fill: "#24a148" },
  ];

  return (
    <DxcInset space="var(--spacing-padding-l)">
      <HorizontalBarChart data={data} styles={{ gap: "1.25rem", barHeight: 18 }} layout={{ width: "100%" }} />
    </DxcInset>
  );
};`;

export default { code, scope: {} };
