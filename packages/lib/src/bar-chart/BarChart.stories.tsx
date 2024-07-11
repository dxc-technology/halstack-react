import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBarChart from "./BarChart";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Bar Chart",
  component: DxcBarChart,
};

const series = [
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
    title: "Series 2",
    type: "bar",
    data: [
      { x: 0, y: 50000 },
      { x: 1, y: 100000 },
      { x: 2, y: 150000 },
      { x: 3, y: 200000 },
      { x: 4, y: 250000 },
    ],
  },
  {
    title: "Series 3",
    type: "bar",
    data: [
      { x: 0, y: 200000 },
      { x: 1, y: 400000 },
      { x: 2, y: 600000 },
      { x: 3, y: 800000 },
      { x: 4, y: 1000000 },
    ],
  },
  {
    title: "Series 4",
    type: "bar",
    data: [
      { x: 0, y: 100000 },
      { x: 1, y: 200000 },
      { x: 2, y: 400000 },
      { x: 3, y: 700000 },
      { x: 4, y: 900000 },
    ],
  },
  {
    title: "Series 5",
    type: "bar",
    data: [
      { x: 0, y: 50000 },
      { x: 1, y: 500000 },
      { x: 2, y: 800000 },
      { x: 3, y: 900000 },
      { x: 4, y: 100000 },
    ],
  },
  {
    title: "Series 6",
    type: "bar",
    data: [
      { x: 0, y: 10000 },
      { x: 1, y: 250000 },
      { x: 2, y: 550000 },
      { x: 3, y: 750000 },
      { x: 4, y: 950000 },
    ],
  },
  {
    title: "Average",
    type: "threshold",
    y: 400000,
  },
];

const BarChart = () => (
  <>
    <Title title="Basic bar chart" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart
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
        yDomain={[0, 600000]}
      />
    </ExampleContainer>
    <Title title="Horizontal bar chart" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart
        series={[
          {
            title: "Series 1",
            type: "bar",
            data: [
              { x: 0, y: 100000 },
              { x: 1, y: 200000 },
              { x: 2, y: 300000 },
            ],
          },
          {
            title: "Series 2",
            type: "bar",
            data: [
              { x: 0, y: 50000 },
              { x: 1, y: 100000 },
              { x: 2, y: 150000 },
            ],
          },
        ]}
        xDomain={[0, 1, 2]}
        yDomain={[0, 600000]}
        horizontalBars
      />
    </ExampleContainer>
    <Title title="Stacked bar chart" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={series as any} xDomain={[0, 1, 2, 3, 4]} yDomain={[0, 5000000]} stackedBars />
    </ExampleContainer>
    <Title title="Stacked & horizontal bar chart" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={series as any} xDomain={[0, 1, 2, 3, 4]} yDomain={[0, 5000000]} stackedBars horizontalBars />
    </ExampleContainer>
    <Title title="Complete bar chart" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart
        chartTitle="Bar Chart"
        series={series as any}
        xDomain={[0, 1, 2, 3, 4]}
        yDomain={[0, 1000000]}
        xTitle="X Axis"
        yTitle="Y Axis"
        showFilter
        showLegend
        legendTitle="Legend"
      />
    </ExampleContainer>
    <Title title="Error state" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={[]} error="Error loading data." />
    </ExampleContainer>
    <Title title="Error state with 'Retry' action" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={[]} error="Error loading data." onRetry={() => {}} />
    </ExampleContainer>
    <Title title="Loading state" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={[]} loading />
    </ExampleContainer>
    <Title title="No data" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={[]} />
    </ExampleContainer>
    <Title title="No matching data" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart
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
            title: "Series 2",
            type: "bar",
            data: [
              { x: 0, y: 50000 },
              { x: 1, y: 100000 },
              { x: 2, y: 150000 },
              { x: 3, y: 200000 },
              { x: 4, y: 250000 },
            ],
          },
          {
            title: "Series 3",
            type: "bar",
            data: [
              { x: 0, y: 200000 },
              { x: 1, y: 400000 },
              { x: 2, y: 600000 },
              { x: 3, y: 800000 },
              { x: 4, y: 1000000 },
            ],
          },
          {
            title: "Series 4",
            type: "bar",
            data: [
              { x: 0, y: 100000 },
              { x: 1, y: 200000 },
              { x: 2, y: 400000 },
              { x: 3, y: 700000 },
              { x: 4, y: 900000 },
            ],
          },
          {
            title: "Series 5",
            type: "bar",
            data: [
              { x: 0, y: 50000 },
              { x: 1, y: 500000 },
              { x: 2, y: 800000 },
              { x: 3, y: 900000 },
              { x: 4, y: 100000 },
            ],
          },
          {
            title: "Series 6",
            type: "bar",
            data: [
              { x: 0, y: 10000 },
              { x: 1, y: 250000 },
              { x: 2, y: 550000 },
              { x: 3, y: 750000 },
              { x: 4, y: 950000 },
            ],
          },
          {
            title: "Series 7",
            type: "bar",
            data: [
              { x: 0, y: 20000 },
              { x: 1, y: 150000 },
              { x: 2, y: 350000 },
              { x: 3, y: 450000 },
              { x: 4, y: 750000 },
            ],
          },
          {
            title: "Average",
            type: "threshold",
            y: 400000,
          },
        ]}
        xDomain={[0, 1, 2, 3, 4]}
        yDomain={[0, 1000000]}
        showFilter
        xTitle="X Axis"
        yTitle="Y Axis"
        legendTitle="Legend"
      />
    </ExampleContainer>
  </>
);

export const Chromatic = BarChart.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByTitle("Clear selection")[1]);
};
