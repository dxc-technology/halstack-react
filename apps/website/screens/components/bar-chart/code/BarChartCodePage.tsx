import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";

const thresholdSeriesTypeString = `{
  title: string;
  type: "threshold";
  y?: number;
  x?: number | string;
}`;

const barDataSeriesTypeString = `{
  title: string;
  type: "bar";
  data: ({ 
    x: number | string; 
    y: number 
  })[];
}`;

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>chartTitle</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the chart.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>error</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Error state of the chart. If set, the component will display an error message with a retry action.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>horizontalBars</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              When set to true, the x and y axes are swapped, resulting in bars being displayed horizontally rather than
              vertically. This feature is applicable only when the chart contains exclusively bar series.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>legendTitle</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the chart legend.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, activates the loading state of the component.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onFilterChange</td>
            <td>
              <TableCode>{"(visibleSeries: string[]) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user changes the displayed data series with the default filter. This
              event is only triggered when <Code>showFilter</Code> is set to <Code>true</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onHighlightChange</td>
            <td>
              <TableCode>{"(highlightedSeries?: string) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user hovers over a data series through the chart legend. This event
              is only triggered when <Code>showLegend</Code> is set to <Code>true</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onRetry</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the retry action in the error state. A{" "}
              <Code>DxcButton</Code> component will be displayed if this prop is defined to perform the action.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>series</td>
            <td>
              <ExtendedTableCode>{`(${thresholdSeriesTypeString} | ${barDataSeriesTypeString})[]`}</ExtendedTableCode>
            </td>
            <td>An array of objects representing the data series to be displayed in the chart.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>showFilter</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the chart will display a filter to allow the user to change the displayed data series.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>showLegend</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the chart will display a legend with the data series information.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>stackedBars</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, bars in the same data point are stacked instead of being grouped next to each other.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>xDomain</td>
            <td>
              <TableCode>(number | string)[]</TableCode>
            </td>
            <td>
              Specifies the x-axis domain, defining the visible range. For numerical data, use a tuple: [minValue,
              maxValue]. For categorical data, use an array of category strings. Explicitly setting this is recommended.
              If not set, the component will auto-fit all data points.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>xFormatter</td>
            <td>
              <TableCode>{"(value: number | string) => string"}</TableCode>
            </td>
            <td>Function to format the displayed label of an x-axis mark.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>xTitle</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the x axis.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>yDomain</td>
            <td>
              <TableCode>[number, number]</TableCode>
            </td>
            <td>
              Specifies the y-axis domain, defining the visible range. The domain is defined by a tuple: [minValue,
              maxValue]. Explicitly setting this is recommended. If not set, the component will auto-fit all data
              points.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>yFormatter</td>
            <td>
              <TableCode>{"(value: number | string) => string"}</TableCode>
            </td>
            <td>Function to format the displayed label of an y-axis mark.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>yTitle</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the y axis.</td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    content: "Right now there are no examples for this component.",
  },
];

const BarChartTableCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bar-chart/code/BarChartCodePage.tsx" />
    </DxcFlex>
  );
};

export default BarChartTableCodePage;
