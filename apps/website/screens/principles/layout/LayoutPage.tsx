import { DxcHeading, DxcFlex, DxcLink, DxcTable, DxcParagraph, DxcBulletedList } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import layoutBreakpoints from "./images/layout_breakpoints.png";
import layoutColumns from "./images/layout_medium_small.png";
import layoutGrid from "./images/layout_grid.png";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Halstack provides multiple components to achieve layout consistency and an easy way to arrange elements in the
          UI. The{" "}
          <Link href="/components/application-layout/" passHref legacyBehavior>
            <DxcLink>application layout</DxcLink>
          </Link>{" "}
          is the base that wraps any application built with Halstack. In addition, all of the components listed below
          can be used within each other to create a wide variety of standard layouts:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Bleed</DxcBulletedList.Item>
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Flex</DxcBulletedList.Item>
          <DxcBulletedList.Item>Grid</DxcBulletedList.Item>
          <DxcBulletedList.Item>Inset</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Layout basics",
    subSections: [
      {
        title: "Grid",
        content: (
          <>
            <DxcParagraph>
              The grid provides the foundation for consistently positioning elements onscreen. The 8x Grid is the
              geometric foundation of all the visual elements of Halstack Design System components and spacing. It
              provides structure and guidance for all creative decision-making.
            </DxcParagraph>
            <Image src={layoutGrid} alt="Layout grid of 8px" />
          </>
        ),
        subSections: [
          {
            title: "Grid usage",
            content: (
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
            ),
          },
        ],
      },
      {
        title: "Breakpoints",
        content: (
          <>
            <DxcParagraph>
              Breakpoints define resolutions at which screen components adjust to offer an optimal user experience
              across screen sizes and devices. We&#39;ve defined five different breakpoints to accommodate multiple web,
              tablet, and mobile screen resolutions:
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
                    <Code>x-large</Code>
                  </td>
                  <td>1440</td>
                  <td>90</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcParagraph>
              The image below illustrates how we&#39;ve used data on the most popular screen resolutions by device over
              the past few years to help define each breakpoint.
            </DxcParagraph>
            <Image src={layoutBreakpoints} alt="Layout breakpoints" />
          </>
        ),
      },
      {
        title: "Columns, margins and gutters",
        content: (
          <>
            <Image src={layoutColumns} alt="Layout grid of 8px" />
            <DxcParagraph>
              Columns, gutters, and margins make up the responsive layout grid following these breakpoints. Depending on
              resolution and screen size of a device, column numbers and the values of the margins and gutters adjust to
              accommodate all screen elements in the most optimal manner.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Columns are the areas of the screen where content is placed. </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                A gutter is the space between columns used to separate content.{" "}
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Margins are the space between the edges of the screen and content.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Recommended values",
            content: (
              <>
                <DxcParagraph>
                  The following table describes the columns, margins, and gutter at each of the different breakpoints:
                </DxcParagraph>
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Breakpoint</th>
                      <th>Columns</th>
                      <th>
                        Gutter (recommended) <sup>1</sup>
                      </th>
                      <th>
                        Margin (min)<sup>2</sup>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Code>xsmall</Code>
                      </td>
                      <td>4</td>
                      <td>16 / small</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>small</Code>
                      </td>
                      <td>4</td>
                      <td>16 / small</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>medium</Code>
                      </td>
                      <td>4</td>
                      <td>24 / medium</td>
                      <td>48</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>large</Code>
                      </td>
                      <td>8</td>
                      <td>16 / small</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>x-large</Code>
                      </td>
                      <td>8</td>
                      <td>24 / medium</td>
                      <td>56</td>
                    </tr>
                  </tbody>
                </DxcTable>
                <DxcBulletedList type="number">
                  <DxcBulletedList.Item>
                    Any value provided by the <Code>gutter</Code> prop in the layout components can be used (ideally
                    multiples of 8) although we recommend to stick to the values provided.{" "}
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    The margin value provided are the minimun recommended, any value from our{" "}
                    <Link href="/principles/spacing/#core-spacing-tokens" passHref legacyBehavior>
                      <DxcLink>spacing scale</DxcLink>
                    </Link>{" "}
                    can be used or even an <Code>auto</Code> value.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <>
        <DxcParagraph>
          Understanding and implementing the appropriate grid, breakpoint, and column/margin/gutter specifications all
          contribute to how the application adjusts to different screen sizes. While these higher-level components
          determine the overall responsive behavior of the application, adjustments can also be made at a smaller
          component level within the layout.
        </DxcParagraph>
        <DxcParagraph>Here are some important considerations when designing for responsiveness:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Consider the actual device/screen use cases. If the application is designed exclusively for desktop,
            consider what the minimum resolution is, then plan accordingly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            For applications that are focused on supporting tablet or mobile designs, make sure to design for and test
            the application across all expected screen sizes and orientations. Please refer to{" "}
            <Link href="/principles/layout/#layout-basics-breakpoints" passHref legacyBehavior>
              <DxcLink>Breakpoints</DxcLink>
            </Link>{" "}
            section. Consider the density of screen elements, the structure (ex. number of columns), and even the actual
            components needed (ex. when to use different types and variations of tables and data grids).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            There are also cases where mobile is the default resolution for the application. In this case consider how
            the application's contents grows based on changing screen sizes (such as all the different sizes of mobile
            and tablet devices).
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

export default function LayoutPage() {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Layout" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/layout/LayoutPage.tsx" />
    </DxcFlex>
  );
}
