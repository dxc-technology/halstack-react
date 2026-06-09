import { SectionType } from "@/common/Section";
import DxcParagraph from "../../../../../packages/lib/src/paragraph/Paragraph";
import Link from "next/link";
import { DxcBulletedList, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import cloudscapeBarImage from "./images/cloudscape_bar_chart.png";
import cloudscapePieImage from "./images/cloudscape_pie_chart.png";

export const cloudscapeGuidelinesSection: SectionType = {
  title: "Cloudscape Charts",
  content: (
    <>
      <DxcParagraph>
        Cloudscape offers <strong>high-quality, adaptable, and user-friendly tools</strong> for creating clear and
        comprehensive data visualizations. This helps our users understand and analyze data effectively, facilitating
        informed decision-making.
      </DxcParagraph>
      <DxcParagraph>
        Check out the different configuration options for{" "}
        <Link href="https://cloudscape.design/components/charts/" passHref legacyBehavior>
          <DxcLink>Cloudscape charts</DxcLink>
        </Link>
        .
      </DxcParagraph>
    </>
  ),
  subSections: [
    {
      title: "When to use",
      content: (
        <>
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Amazon QuickSight dashboards are embedded in the application, and custom charts should match the look and
              feel of QuickSight and AWS interfaces.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              The application follows an AWS-style console or dashboard experience (operations, monitoring,
              administration, reporting).
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Maintaining a consistent user experience across Cloudscape components, QuickSight dashboards, tables,
              filters, and charts.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        </>
      ),
    },
    {
      title: "Chart types",
      content: (
        <>
          <DxcParagraph>
            Cloudscape charts are divided into <strong>cartesian charts</strong> (bar, line, area, mixed line and bar)
            and <strong>pie and donut charts</strong>.
          </DxcParagraph>
        </>
      ),
      subSections: [
        {
          title: "Cartesian charts",
          content: (
            <>
              <DxcFlex direction="column" gap="var(--spacing-gap-l)">
                <DxcParagraph>
                  <Link href="https://cloudscape.design/components/cartesian-chart/" passHref legacyBehavior>
                    <DxcLink>Cartesian charts</DxcLink>
                  </Link>{" "}
                  display information along horizontal and vertical axes to clearly show patterns, comparisons, and
                  relationships between values. It includes line, bar, area, scatter, bubble, and mixed charts.
                </DxcParagraph>
                <Image src={cloudscapeBarImage} alt="Bar chart" />
              </DxcFlex>
            </>
          ),
        },
        {
          title: "Pie and donut charts",
          content: (
            <>
              <DxcFlex direction="column" gap="var(--spacing-gap-l)">
                <DxcParagraph>
                  <Link href="https://cloudscape.design/components/pie-chart/" passHref legacyBehavior>
                    <DxcLink>Pie and donut charts</DxcLink>
                  </Link>{" "}
                  are circular charts divided into segments to illustrate numerical proportions. Best for a small number
                  of segments; pair with a table if precision matters.
                </DxcParagraph>
                <Image src={cloudscapePieImage} alt="Pie chart" />
              </DxcFlex>
            </>
          ),
        },
      ],
    },
    {
      title: "Color configuration",
      content: (
        <>
          <DxcParagraph>
            Cloudscape charts use a <strong>default color palette</strong> that is designed to be visually distinct and
            accessible. However, you can customize the colors to better fit your application's branding, theme, or to
            highlight specific data points.
          </DxcParagraph>
          <DxcParagraph>
            Check out how to configure colors in the{" "}
            <Link
              href="https://cloudscape.design/components/cartesian-chart/?tabId=api#usage-of-color"
              passHref
              legacyBehavior
            >
              <DxcLink>Cloudscape documentation</DxcLink>
            </Link>
            .
          </DxcParagraph>
        </>
      ),
    },
  ],
};
