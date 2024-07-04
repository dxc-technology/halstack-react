import { render } from "@testing-library/react";
import DxcBarChart from "./BarChart";
import userEvent from "@testing-library/user-event";
import DxcBarChart from "./BarChart";

// Mocking applyTheme function to avoid issues with Cloudscape theming
jest.mock("@cloudscape-design/components/theming", () => ({
  applyTheme: jest.fn(),
}));

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Bar Chart component tests", () => {
  test("onFilterChange is called when the value of the select is changed", async () => {
    const onFilterChange = jest.fn();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcBarChart
        showFilter
        onFilterChange={onFilterChange}
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
            title: "Average",
            type: "threshold",
            y: 300000,
          },
        ]}
      />
    );
    expect(getByText("Bar Chart")).toBeTruthy();
    expect(getByText("Filter displayed data")).toBeTruthy();
    await userEvent.click(getByRole("combobox"));
    expect(getByText("Series 1")).toBeTruthy();
    expect(getByText("Average")).toBeTruthy();
    await userEvent.click(getAllByRole("option")[1]);
    expect(onFilterChange).toHaveBeenCalled();
    expect(onFilterChange).toHaveBeenCalledWith(["Series 1"]);
  });
  test("onHighlightChange is called when a legend's series is hovered/clicked", async () => {
    const onHighlightChange = jest.fn();
    const { getByText } = render(
      <DxcBarChart
        showLegend
        legendTitle="Legend"
        onHighlightChange={onHighlightChange}
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
      />
    );
    expect(getByText("Legend")).toBeTruthy();
    await userEvent.hover(getByText("Series 1"));
    expect(onHighlightChange).toHaveBeenCalled();
    expect(onHighlightChange).toHaveBeenCalledWith("Series 1");
  });
  test("onRetry is called when the retry button is clicked", async () => {
    const onRetry = jest.fn();
    const { getByText, getByRole } = render(
      <DxcBarChart
        onRetry={onRetry}
        error="Error"
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
      />
    );
    expect(getByText("Error")).toBeTruthy();
    await userEvent.click(getByRole("button"));
    expect(onRetry).toHaveBeenCalled();
  });
});
