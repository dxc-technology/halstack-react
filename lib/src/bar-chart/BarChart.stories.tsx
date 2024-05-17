import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBarChart from "./BarChart";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Bar Chart",
  component: DxcBarChart,
};

const BarChart = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart
        chartTitle="Bar Chart"
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
            title: "Average",
            type: "threshold",
            y: 400000,
          },
        ]}
        xDomain={[0, 1, 2, 3, 4]}
        yDomain={[0, 1000000]}
        showFilter
        yTitle="Y Axis"
        legendTitle="Legend"
      />
    </ExampleContainer>
    <Title title="Error state" theme="light" level={4} />
    <ExampleContainer>
      <DxcBarChart series={[]} error="Error loading data." />
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
BarChart.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const filter = canvas.getAllByTitle("Clear selection")[1];
  await userEvent.click(filter);
};
