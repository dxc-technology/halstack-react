import { DxcParagraph, DxcFlex, DxcBulletedList, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Image from "@/common/Image";
import DocFooter from "@/common/DocFooter";
import layoutGrid from "./images/layout_grid.png";
import layoutBreakpoints from "./images/layout_breakpoints.png";
import layoutMargins from "./images/layout_margins.png";
import Link from "next/link";
import Figure from "@/common/Figure";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The <strong>Application Layout</strong> is the base scaffolding of any application built in Halstack, serving
          as the structural and organizational framework for all UI components.
        </DxcParagraph>
        <DxcParagraph>
          The following layout components are designed to work together, enabling flexible and consistent UI structures:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>
              <Link href="/components/flex" passHref legacyBehavior>
                <DxcLink>Flex</DxcLink>
              </Link>
              :
            </strong>{" "}
            For fluid, responsive content arrangements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>
              <Link href="/components/bleed" passHref legacyBehavior>
                <DxcLink>Bleed</DxcLink>
              </Link>
              :
            </strong>{" "}
            To extend content beyond container boundaries when needed.{" "}
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>
              <Link href="/components/inset" passHref legacyBehavior>
                <DxcLink>Inset</DxcLink>
              </Link>
              :
            </strong>{" "}
            For controlled internal spacing within containers.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Grid system",
    content: (
      <>
        <DxcParagraph>
          The Halstack layout system is built on a rigorous 8px grid, which serves as the foundational framework for all
          component placement and spacing. This geometric backbone ensures visual harmony by standardizing measurements,
          alignments, and spatial relationships across every interface.
        </DxcParagraph>
        <Figure caption="Halstack's 8px grid">
          <Image src={layoutGrid} alt="Halstack's 8px grid" />
        </Figure>
      </>
    ),
  },
  {
    title: "Breakpoints",
    content: (
      <>
        <DxcParagraph>
          Breakpoints are specific screen widths where a layout adapts to deliver an optimal experience across devices.
        </DxcParagraph>
        <DxcParagraph>
          The Halstack system uses <strong>five carefully calibrated breakpoints</strong> based on:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Analysis of current device resolution trends</DxcBulletedList.Item>
          <DxcBulletedList.Item>Overview patterns across mobile, tablet, and desktop</DxcBulletedList.Item>
        </DxcBulletedList>
        <Figure caption="Breakpoint thresholds derived from analysis of global device resolution trends.">
          <Image
            src={layoutBreakpoints}
            alt="Breakpoint thresholds derived from analysis of global device resolution trends."
          />
        </Figure>
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
      </>
    ),
  },
  {
    title: "Columns, gutters and margins",
    content: (
      <>
        <DxcParagraph>
          Columns, gutters, and margins make up the responsive layout grid following these breakpoints. Depending on
          resolution and screen size of a device, column numbers and the values of the margins and gutters adjust to
          accommodate all screen elements in the most optimal manner.
        </DxcParagraph>
        <Image src={layoutMargins} alt="Halstack's layout margins" />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Columns:</strong> Content containers (increase with screen size)
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Gutters:</strong> Spacing between columns (scale responsively)
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Margins:</strong> Padding between content and viewport edges
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>All three elements should be recalibrated at each breakpoint to:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Maximize content legibility</DxcBulletedList.Item>
          <DxcBulletedList.Item>Maintain proportional spacing</DxcBulletedList.Item>
          <DxcBulletedList.Item>Ensure touch target accessibility</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
    subSections: [
      {
        title: "Recommended values",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Breakpoint</th>
                  <th>Columns</th>
                  <th>Gutter (recomended) ¹</th>
                  <th>Margin (min) ²</th>
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
                    <Code>xlarge</Code>
                  </td>
                  <td>8</td>
                  <td>24 / medium</td>
                  <td>56</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                Any value provided by the gutter prop in the layout components can be used (ideally multiples of 8)
                although we recommend to stick to the values provided.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The margin value provided are the minimun recommended, any value from our spacing scale can be used or
                even an auto value.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Enforce the 8px baseline grid:</strong> Align all measurements (spacing, sizing, positioning) to
            multiples of 8px for visual harmony.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Imit 4px adjustments:</strong> Reserve finer increments only for edge cases like icon alignment or
            typography.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Test across all five breakpoints:</strong> Verify layouts adapt seamlessly from mobile (320px) to
            desktop (1200px+).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Default to recommended values:</strong> Use predefined gutter/margin sizes unless justified by
            specific use cases.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scale columns proportionally:</strong> Increase column count with screen size while preserving
            gutter/margin ratios.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const ApplicationLayoutOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/application-layout/overview/ApplicationLayoutOverviewPage.tsx" />
  </DxcFlex>
);

export default ApplicationLayoutOverviewPage;
