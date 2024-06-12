import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import specs from "./images/bar_chart_specs.png";
import anatomy from "./images/bar_chart_anatomy.png";
import colorPalette from "./images/bar_chart_color_palette.png";
import Code from "@/common/Code";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Bar chart design specifications">
        <Image src={specs} alt="Bar chart design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Bar chart anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            Title - This is a <Code>DxcHeading level={2}</Code> component
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Filter - This is a <Code>DxcSelect</Code> component
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Graph</DxcBulletedList.Item>
          <DxcBulletedList.Item>Legend</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <>
            <DxcParagraph>
              We have carefully selected various shades from our color palette
              to be used in data visualization. Accessibility has been a key
              consideration in this selection, ensuring that these colors are
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
];

const BarChartSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bar-chart/specs/BarChartSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default BarChartSpecsPage;
