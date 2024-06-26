import { DxcBarChart, DxcInset } from "@repo/ui";

const code = `() => (
  <DxcInset space="2rem">
    <DxcBarChart
      chartTitle="Bar chart title"
      series={[
        {
          title: "Series 1",
          type: "bar",
          data: [
            { x: 0, y: 100000 },
            { x: 1, y: 200000 },
            { x: 2, y: 300000 },
            { x: 3, y: 400000 },
            { x: 4, y: 500000 },
          ],
        },
        {
          title: "Average",
          type: "threshold",
          y: 300000,
        },
      ]}
      xDomain={[0, 1, 2, 3, 4]}
      yDomain={[0, 550000]}
      xTitle="X Axis"
      yTitle="Y Axis"
      showFilter
      showLegend
      legendTitle="Legend"
    />
  </DxcInset>
);`;

const scope = {
  DxcBarChart,
  DxcInset,
};

export default { code, scope };
