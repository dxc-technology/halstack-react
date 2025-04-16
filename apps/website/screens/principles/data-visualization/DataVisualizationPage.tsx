import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcLink, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import Link from "next/link";
import colorPalette from "./images/bar_chart_color_palette.png";
import barChartVariants from "./images/bar_chart_variants.png";
import Example from "@/common/example/Example";
import themeBarChart from "./examples/barChart";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          At Halstack, we believe that effective data visualization is crucial for transforming complex data into clear,
          actionable insights. Our principles focus on clarity, accuracy, accessibility, and interactivity. By adhering
          to these guidelines, you can create visual representations that are not only aesthetically pleasing, but also
          highly functional, ensuring that users can easily understand and interact with the data presented.
        </DxcParagraph>
        <DxcParagraph>
          As we consider data visualization a tremendously dense and complex design pattern, we have decided to rely on
          another design system for this task. Our choice is{" "}
          <Link href="https://cloudscape.design/" passHref legacyBehavior>
            <DxcLink>Cloudscape</DxcLink>
          </Link>
          .
        </DxcParagraph>
        <DxcParagraph>
          Cloudscape offers high-quality, adaptable, and user-friendly tools for creating clear and comprehensive data
          visualizations. This helps our users understand and analyze data effectively, facilitating informed
          decision-making.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Chart types",
    content: (
      <>
        <DxcParagraph>The Cloudscape design system provides a wide range of chart types, including:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Link href="https://cloudscape.design/components/bar-chart/" passHref legacyBehavior>
              <DxcLink>Bar chart</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="https://cloudscape.design/components/line-chart/" passHref legacyBehavior>
              <DxcLink>Line chart</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="https://cloudscape.design/components/mixed-line-bar-chart/" passHref legacyBehavior>
              <DxcLink>Mixed line and bar chart</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="https://cloudscape.design/components/area-chart/" passHref legacyBehavior>
              <DxcLink>Area chart</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="https://cloudscape.design/components/pie-chart/" passHref legacyBehavior>
              <DxcLink>Pie and donut chart</DxcLink>
            </Link>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          All the information presented below complements the{" "}
          <Link href="https://cloudscape.design/patterns/general/data-vis/" passHref legacyBehavior>
            <DxcLink>Cloudscape data visualization pattern</DxcLink>
          </Link>
          . We strongly recommend reading it in parallel.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Bar chart",
    content: (
      <DxcParagraph>
        A bar chart is a graphical representation that displays and compares discrete data categories using rectangular
        bars. Each bar's length or height is proportional to the frequency or value of its corresponding category,
        allowing users to identify which groups are the highest or most common and compare them with others.
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
              to sort the bars from longest to shortest. While comparisons can be made regardless of the order, this
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
      {
        title: "Variants",
        content: (
          <>
            <Image src={barChartVariants} alt="Bar chart variants" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Variant</th>
                  <HeaderDescriptionCell>Description</HeaderDescriptionCell>
                  <th>Use case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Vertical</strong>
                  </td>
                  <td>
                    Bars are oriented vertically with the X-axis representing categories and the Y-axis representing
                    values.
                  </td>
                  <td>Comparing quantities across different categories.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Stacked</strong>
                  </td>
                  <td>
                    Bars are stacked on top of each other. Each stack segment represents a different sub-category.
                  </td>
                  <td>
                    Showing the composition of each category, as well as comparing total values across categories.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Grouped</strong>
                  </td>
                  <td>
                    In a grouped bar chart, bars representing different sub-categories are placed next to each other,
                    rather than stacked, for each main category.
                  </td>
                  <td>More direct comparison of sub-category values across different main categories.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Horizontal</strong>
                  </td>
                  <td>
                    Bars are oriented horizontally with the Y-axis representing categories and the X-axis representing
                    values.
                  </td>
                  <td>Comparing quantities across different categories, especially when category names are long.</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <>
            <DxcParagraph>
              We have carefully selected various shades from our color palette to be used in data visualization.
              Accessibility has been a key consideration in this selection, ensuring that these colors are
              distinguishable for all users.
            </DxcParagraph>
            <Image src={colorPalette} alt="Bar chart color palette" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Categorical color</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color-categorical-01</td>
                  <td>
                    <Code>color-purple-500</Code>
                  </td>
                  <td>#A46EDE</td>
                </tr>
                <tr>
                  <td>color-categorical-02</td>
                  <td>
                    <Code>color-blue-600</Code>
                  </td>
                  <td>#0095FF</td>
                </tr>
                <tr>
                  <td>color-categorical-03</td>
                  <td>
                    <Code>color-green-700</Code>
                  </td>
                  <td>#24A148</td>
                </tr>
                <tr>
                  <td>color-categorical-04</td>
                  <td>
                    <Code>color-red-500</Code>
                  </td>
                  <td>#FE344F</td>
                </tr>
                <tr>
                  <td>color-categorical-05</td>
                  <td>
                    <Code>color-yellow-800</Code>
                  </td>
                  <td>#947705</td>
                </tr>
                <tr>
                  <td>color-categorical-06</td>
                  <td>
                    <Code>color-orange-700</Code>
                  </td>
                  <td>#C26C0A</td>
                </tr>
                <tr>
                  <td>color-categorical-07</td>
                  <td>
                    <Code>color-purple-600</Code>
                  </td>
                  <td>#7D2FD0</td>
                </tr>
                <tr>
                  <td>color-categorical-08</td>
                  <td>
                    <Code>color-blue-800</Code>
                  </td>
                  <td>#0067B3</td>
                </tr>
                <tr>
                  <td>color-categorical-09</td>
                  <td>
                    <Code>color-green-900</Code>
                  </td>
                  <td>#135325</td>
                </tr>
                <tr>
                  <td>color-categorical-10</td>
                  <td>
                    <Code>color-red-700</Code>
                  </td>
                  <td>#D0011B</td>
                </tr>
                <tr>
                  <td>color-categorical-11</td>
                  <td>
                    <Code>color-yellow-900</Code>
                  </td>
                  <td>#624F04</td>
                </tr>
                <tr>
                  <td>color-categorical-12</td>
                  <td>
                    <Code>color-orange-800</Code>
                  </td>
                  <td>#915108</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "How to apply our design tokens",
    content: (
      <>
        <DxcParagraph>
          Here is an example of how to apply our design tokens to a bar chart using the Cloudscape theming strategy.
        </DxcParagraph>
        <DxcParagraph>
          For a more detailed explanation of how Cloudscape components are styled, please refer to their{" "}
          <Link href="https://cloudscape.design/foundation/visual-foundation/theming/" passHref legacyBehavior>
            <DxcLink>theming documentation</DxcLink>
          </Link>
          . The complete list of data visualization color design tokens can be found{" "}
          <Link href="https://cloudscape.design/foundation/visual-foundation/data-vis-colors/" passHref legacyBehavior>
            <DxcLink>here</DxcLink>
          </Link>
          .
        </DxcParagraph>
        <Example example={themeBarChart} defaultIsVisible />
      </>
    ),
  },
];

const DataVisualizationPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Data visualization"></DxcHeading>
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/data-visualization/DataVisualizationPage.tsx" />
    </DxcFlex>
  );
};

export default DataVisualizationPage;
