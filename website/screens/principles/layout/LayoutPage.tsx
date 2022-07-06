import {
  DxcHeading,
  DxcText,
  DxcStack,
  DxcList,
  DxcLink,
  DxcTable,
} from "@dxc-technology/halstack-react";
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
        <DxcText as="p">
          Halstack provide multiple components in order to achieve layout
          consistency and an easy way to arrange elements in the UI. The{" "}
          <Link href="/components/application-layout/" passHref>
            <DxcLink>application layout</DxcLink>
          </Link>{" "}
          is the base component that wraps any application built with halstack.
          In addition, all of the components listed below can be used within
          each other to create a wide variety of standard layouts:
        </DxcText>
        <DxcList>
          <DxcText>Stack</DxcText>
          <DxcText>Row</DxcText>
          <DxcText>Bleed</DxcText>
          <DxcText>Inset</DxcText>
        </DxcList>
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
            <DxcText as="p">
              The grid provides the foundation for consistently positioning
              elements onscreen. The 8x Grid is the geometric foundation of all
              the visual elements of Halstack Design System components and
              spacing. It provides structure and guidance for all creative
              decision-making.
            </DxcText>
            <Image src={layoutGrid} alt="Layout grid of 8px" />
          </>
        ),
        subSections: [
          {
            title: "Grid usage",
            content: (
              <DxcList>
                <DxcText>
                  Use multiples of 8px when defining measurements, spacing, and
                  positioning elements.
                </DxcText>
                <DxcText>
                  When necessary use 4px to make more fine tuned adjustments.
                </DxcText>
                <DxcText>
                  Whenever possible, make sure that objects line up, both
                  vertically and horizontally.
                </DxcText>
                <DxcText>
                  Align your bounding box to the grid, not the baseline of your
                  text.
                </DxcText>
              </DxcList>
            ),
          },
        ],
      },
      {
        title: "Breakpoints",
        content: (
          <>
            <DxcText as="p">
              Breakpoints define resolutions at which screen components adjust
              to offer an optimal user experience across screen sizes and
              devices. We&#39;ve defined five different breakpoints to
              accommodate multiple web, tablet, and mobile screen resolutions:
            </DxcText>
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
            <DxcText as="p">
              The image below illustrates how we&#39;ve used data on the most
              popular screen resolutions by device over the past few years to
              help define each breakpoint.
            </DxcText>
            <Image src={layoutBreakpoints} alt="Layout grid of 8px" />
          </>
        ),
      },
      {
        title: "Columns, margins and gutters",
        content: (
          <>
            <Image src={layoutColumns} alt="Layout grid of 8px" />
            <DxcText as="p">
              Columns, gutters, and margins make up the responsive layout grid
              following these breakpoints. Depending on resolution and screen
              size of a device, column numbers and the values of the margins and
              gutters adjust to accommodate all screen elements in the most
              optimal manner.
            </DxcText>
            <DxcList>
              <DxcText>
                Columns are the areas of the screen where content is placed.{" "}
              </DxcText>
              <DxcText>
                A gutter is the space between columns used to separate content.{" "}
              </DxcText>
              <DxcText>
                Margins are the space between the edges of the screen and
                content.
              </DxcText>
            </DxcList>
          </>
        ),
        subSections: [
          {
            title: "Recommended values",
            content: (
              <>
                <DxcText as="p">
                  The following table describes the columns, margins, and gutter
                  at each of the different breakpoints:
                </DxcText>
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
                <DxcList type="number">
                  <DxcText>
                    Any value provided by the <Code>gutter</Code> prop in the
                    layout components can be used (ideally multiples of 8)
                    although we recommend to stick to the values provided.{" "}
                  </DxcText>
                  <DxcText>
                    The margin value provided are the minimun recommended, any
                    value from our{" "}
                    <Link
                      href="/principles/spacing/#core-spacing-tokens"
                      passHref
                    >
                      <DxcLink>spacing scale</DxcLink>
                    </Link>{" "}
                    can be used or even an <Code>auto</Code> value.
                  </DxcText>
                </DxcList>
              </>
            ),
          },
        ],
      },
    ],
  },
];

const Layout = () => {
  return (
    <DxcStack gutter="4rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <DxcHeading level={1} text="Layout" weight="bold"></DxcHeading>
        </DxcStack>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/principles/layout/LayoutPage.tsx" />
    </DxcStack>
  );
};

export default Layout;
