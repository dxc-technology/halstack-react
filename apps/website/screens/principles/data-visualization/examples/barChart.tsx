import { applyTheme } from "@cloudscape-design/components/theming";
import { BarChart } from "@cloudscape-design/components";
import { DxcHeading, DxcInset } from "@dxc-technology/halstack-react";

const CoreColorTokens = {
  color_grey_700: "#666666",
  color_grey_900: "#333333",
  color_grey_50_a: "#00000005",
  color_grey_100_a: "#0000000d",
  color_grey_200_a: "#0000001a",
  color_grey_300_a: "#00000033",
  color_grey_400_a: "#0000004d",
  color_grey_500_a: "#00000066",
  color_grey_600_a: "#00000080",
  color_grey_700_a: "#00000099",
  color_grey_800_a: "#000000b3",
  color_grey_900_a: "#000000cc",
  color_purple_500: "#a46ede",
  color_purple_600: "#7d2fd0",
  color_blue_600: "#0095ff",
  color_blue_800: "#0067b3",
  color_red_500: "#fe344f",
  color_red_700: "#d0011b",
  color_green_700: "#24a148",
  color_green_900: "#135325",
  color_yellow_800: "#947705",
  color_yellow_900: "#624f04",
  color_orange_700: "#c26c0a",
  color_orange_800: "#915108",
};

const code = `() => {
  const theme = {
    tokens: {
      colorChartsPaletteCategorical1: CoreColorTokens.color_purple_500,
      colorChartsPaletteCategorical2: CoreColorTokens.color_blue_600,
      colorChartsPaletteCategorical3: CoreColorTokens.color_green_700,
      colorChartsPaletteCategorical4: CoreColorTokens.color_red_500,
      colorChartsPaletteCategorical5: CoreColorTokens.color_orange_700,
      colorChartsPaletteCategorical6: CoreColorTokens.color_yellow_800,
      colorChartsPaletteCategorical7: CoreColorTokens.color_purple_600,
      colorChartsPaletteCategorical8: CoreColorTokens.color_blue_800,
      colorChartsPaletteCategorical9: CoreColorTokens.color_green_900,
      colorChartsPaletteCategorical10: CoreColorTokens.color_red_700,
      colorChartsPaletteCategorical11: CoreColorTokens.color_orange_800,
      colorChartsPaletteCategorical12: CoreColorTokens.color_yellow_900,
      colorChartsThresholdNeutral: CoreColorTokens.color_grey_700,
      colorTextBodySecondary: CoreColorTokens.color_grey_700,
      colorTextBodyDefault: CoreColorTokens.color_grey_900,
    },
  };
  
  applyTheme({ theme });

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcHeading text="Themed bar chart" level={2} margin={{ bottom: "large" }} />
      <BarChart
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
        legendTitle="Legend"
        hideFilter
      />
    </DxcInset>
  );
}`;

const scope = {
  applyTheme,
  BarChart,
  CoreColorTokens,
  DxcHeading,
  DxcInset,
};

export default { code, scope };
