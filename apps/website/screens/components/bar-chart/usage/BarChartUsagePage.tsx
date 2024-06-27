import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import barChartVariants from "./images/bar_chart_variants.png";
import barChartElements from "./images/bar_chart_elements.png";
import vertical from "./images/bar_chart_vertical.png";
import grouped from "./images/bar_chart_grouped.png";
import horizontal from "./images/bar_chart_horizontal.png";
import stacked from "./images/bar_chart_stacked.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        We use the{" "}
        <DxcLink href="https://cloudscape.design/components/bar-chart/" newWindow>
          Cloudscape
        </DxcLink>{" "}
        library for data visualization in our design system. Cloudscape offers high-quality, adaptable, and
        user-friendly tools for creating clear and comprehensive data visualizations. This helps our users understand
        and analyze data effectively, facilitating informed decision-making.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Ensure both the X and Y axes are labeled with appropriate units and descriptions.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Always plot bars against a zero-value baseline. It simplifies bar length comparison and ensures accurate
              data visualization. A non-zero baseline can distort the comparison as it disrupts the ratio between bar
              lengths and actual values.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              When constructing a bar chart, consider the order in which you will plot the bars. A common convention is
              to sort the bars from longest to shortest. While comparisons can be made regardless of order, this
              approach can ease the reader's task. However, if the category labels have an inherent order, this should
              typically take precedence.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Avoid adding too many categories or bars in a single chart, which can make it cluttered and hard to read.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Consider breaking up data into multiple charts if necessary.</DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid using abbreviations or jargon in labels that might not be understood by all viewers.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <Figure caption="Summary of all the Bar Chart variants">
        <Image src={barChartVariants} alt="Bar chart variants" />
      </Figure>
    ),
    subSections: [
      {
        title: "Vertical Bar Chart",
        content: (
          <>
            <Image src={vertical} alt="Vertical variant" />
            <DxcParagraph>
              Bars are oriented vertically with the X-axis representing categories and the Y-axis representing values.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Use Case</strong>: Comparing quantities across different categories.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Stacked Bar Chart",
        content: (
          <>
            <Image src={stacked} alt="Stacked variant" />
            <DxcParagraph>
              Bars are stacked on top of each other. Each stack segment represents a different sub-category.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Use Case</strong>: Showing the composition of each category, as well as comparing total values
                across categories.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Grouped Bar Chart",
        content: (
          <>
            <Image src={grouped} alt="Grouped variant" />
            <DxcParagraph>
              In a grouped bar chart, bars representing different sub-categories are placed next to each other, rather
              than stacked, for each main category.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Use Case</strong>: More direct comparison of sub-category values across different main
                categories.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Horizontal Bar Chart",
        content: (
          <>
            <Image src={horizontal} alt="Horizontal variant" />
            <DxcParagraph>
              Bars are oriented horizontally with the Y-axis representing categories and the X-axis representing values.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Use Case</strong>: Comparing quantities across different categories, especially when category
                names are long.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              For more details on how to use this component, please refer to its original source,{" "}
              <DxcLink newWindow href="https://cloudscape.design/components/bar-chart/?tabId=usage)">
                Cloudscape
              </DxcLink>
              .
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Elements of the Bar Chart",
    content: (
      <>
        <DxcParagraph>
          The Bar Chart is composed of several key elements that contribute to its effectiveness in visualizing data.
          They work together to provide a clear, accurate, and visually appealing representation of data, making it
          easier for viewers to understand and interpret the information being presented.
        </DxcParagraph>
        <Image src={barChartElements} alt="Bar chart elements" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Title</strong>: A descriptive heading that explains what the bar chart is about.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Filter</strong>: Enable data filtering.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Category axis (x-axis)</strong>: The horizontal axis in a vertical bar chart or the vertical axis in
            a horizontal bar chart. Typically represents categories or discrete data points.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Value axis (y-axis)</strong>: The vertical axis in a vertical bar chart or the horizontal axis in a
            horizontal bar chart. Typically represents the scale of values or measurements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Axis labels</strong>: Text labels that describe the data represented by each axis. Placed along the
            axes to identify categories (X-Axis) and units or magnitude (Y-Axis).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Axis titles</strong>: Descriptive titles for the X and Y axes that provide additional context about
            the data.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Tick marks</strong>: Small marks along the axes that indicate the scale or categories. Aid in
            aligning the bars with the corresponding values or categories.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Grid lines</strong>: Horizontal and/or vertical lines that help in reading the values of the bars
            against the axes. Their purpose is o enhance readability and precision in interpreting data values.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Average line (threshold)</strong>: An average line in a bar chart is a horizontal (or vertical,
            depending on the chart orientation) line that represents the average value of the data points being
            displayed. It helps provide a quick visual reference for comparing individual bar values to the overall
            average of the dataset.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Bars</strong>: Rectangular blocks that represent data values. Can be vertical (column chart) or
            horizontal (bar chart).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Legend</strong>: A key that explains what different colors, patterns, or bar segments represent.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Details popover</strong>: Information box that appear when a user hovers over a bar. Displays
            detailed information about the data point.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Interactions",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Hover interaction</strong>: Display popover when a user hovers over a bar.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Click interaction</strong>: Optional click events on bars to trigger additional actions (e.g.,
          filtering data displayed in a table).
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const BarChartUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bar-chart/usage/BarChartUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BarChartUsagePage;
