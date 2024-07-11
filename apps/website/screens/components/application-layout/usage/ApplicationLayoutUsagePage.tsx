import { DxcParagraph, DxcFlex, DxcBulletedList, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Image from "@/common/Image";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import layoutGrid from "./images/layout_grid.png";
import layoutBreakpoints from "./images/layout_breakpoints.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          The application layout is the base component that wraps any application built with Halstack. In addition to
          this, all of the components listed below can be used within each other to create a wide variety of standard
          layouts:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Flex</DxcBulletedList.Item>
          <DxcBulletedList.Item>Bleed </DxcBulletedList.Item>
          <DxcBulletedList.Item>Inset</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Grid",
    content: (
      <>
        <DxcParagraph>
          The grid provides the foundation for consistently positioning elements onscreen. The 8px Grid is the geometric
          foundation of all the visual elements of Halstack Design System components and spacing. It provides structure
          and guidance for all creative decision-making.
        </DxcParagraph>
        <Image src={layoutGrid} alt="Layout grid of 8px" />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use multiples of 8px when defining measurements, spacing, and positioning elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>When necessary use 4px to make more fine tuned adjustments.</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Whenever possible, make sure that objects line up, both vertically and horizontally.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Align your bounding box to the grid, not the baseline of your text.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Breakpoints",
    content: (
      <>
        <DxcParagraph>
          Breakpoints define resolutions at which screen components adjust to offer an optimal user experience across
          screen sizes and devices. We&#39;ve defined five different breakpoints to accommodate multiple web, tablet,
          and mobile screen resolutions:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>px</th>
              <th>rem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>320</td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>480</td>
              <td>30</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>720</td>
              <td>45</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>1056</td>
              <td>66</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>1440</td>
              <td>90</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcParagraph>
          The image below illustrates how we&#39;ve used data on the most popular screen resolutions by device over the
          past few years to help define each breakpoint.
        </DxcParagraph>
        <Image src={layoutBreakpoints} alt="Layout breakpoints" />
      </>
    ),
  },
];

const ApplicationLayoutUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/application-layout/usage/ApplicationLayoutUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ApplicationLayoutUsagePage;
