import { DxcBulletedList, DxcFlex, DxcParagraph, DxcLink } from "@dxc-technology/halstack-react";
import Link from "next/link";
import type { SectionType } from "@/common/Section";
import Code from "@/common/Code";
import Image from "@/common/Image";
import rechartsBarImage from "./images/recharts_bar_chart.png";
import rechartsAreaImage from "./images/recharts_area_chart.png";
import rechartsLineImage from "./images/recharts_line_chart.png";
import rechartsPieImage from "./images/recharts_pie_chart.png";
import rechartsHorizontalBarImage from "./images/recharts_horizontal_bar_chart.png";

/** Maintainer: set this to the published playground URL (single app with all five wrappers). */
const CODE_SANDBOX_REFERENCE_APP =
  "https://codesandbox.io/embed/recharts-examples-p3hg24?view=split&hidenavigation=1&editorsize=0&fontsize=12";

export const rechartsGuidelinesSection: SectionType = {
  title: "Recharts wrappers",
  content: (
    <>
      <DxcParagraph>
        For a <strong>lighter and React-first</strong> charting stack,{" "}
        <Link href="https://recharts.org/" passHref legacyBehavior>
          <DxcLink>Recharts</DxcLink>
        </Link>{" "}
        <strong>combines well</strong> with custom layouts and <strong>Halstack primitives</strong> (for example{" "}
        <Code>DxcInset</Code>, <Code>DxcFlex</Code>, and <Code>DxcContainer</Code>).
      </DxcParagraph>
      <DxcParagraph>
        As previously mentioned, <strong>Halstack does not ship chart components today</strong>. The examples below use
        a small set of reference <strong>wrappers-patterns</strong> you can recreate in your own codebase-to cover
        typical analytics views: vertical bars (including grouped series), lines (with optional brush), filled areas,
        part-to-whole pies and donuts, and horizontal percentage bars for KPI-style rows. They are for{" "}
        <strong>illustrative purposes only</strong>, not a versioned API of the design system.
      </DxcParagraph>
      <DxcParagraph>
        Apply the same narrative guidance as the rest of this page (clear baselines, readable labels, sensible color
        differentiation). Prefer Halstack categorical colors when you pass color or fill props so charts stay on-brand.
      </DxcParagraph>
    </>
  ),
  subSections: [
    {
      title: "When to use",
      content: (
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Consider a thin Recharts wrapper layer when your product already standardizes on Recharts and you want
            shared defaults for axes, grids, and tooltips.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Prefer Cloudscape charts when you need out-of-the-box AWS console patterns, their data-vis color tokens, or
            parity with Cloudscape documentation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Prefer raw Recharts when you need a chart type or behavior a wrapper does not expose yet.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      ),
    },
    {
      title: "Chart types",
      content: (
        <>
          <DxcParagraph>
            Open the CodeSandbox example to see each chart in depth and run the examples. We created some examples of
            how you can use recharts as a base to build your own chart components in conjunction with Halstack
            primitives.
          </DxcParagraph>
          <DxcParagraph>
            <iframe
              src={CODE_SANDBOX_REFERENCE_APP}
              style={{
                width: "100%",
                aspectRatio: "16/9",
                border: "0",
                borderRadius: "4px",
                overflow: "hidden",
                zoom: 0.5,
              }}
              title="Application layout with components"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </DxcParagraph>
          <DxcParagraph>There you will find:</DxcParagraph>
          <DxcBulletedList>
            <DxcBulletedList.Item>
              An overview of dependencies and how data is expected to be shaped.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              A dedicated section for each wrapper, props, suggested use cases, and live demos.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Full source for all five components in one place so they stay in sync.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        </>
      ),
      subSections: [
        {
          title: "Bar chart",
          content: (
            <DxcFlex direction="column" gap="var(--spacing-gap-l)">
              <DxcParagraph>
                Compare categories or a few grouped series. Good default for quarterly metrics, counts by region, or
                before/after snapshots.
              </DxcParagraph>
              <Image src={rechartsBarImage} alt="Bar chart" />
            </DxcFlex>
          ),
        },
        {
          title: "Line chart",
          content: (
            <DxcFlex direction="column" gap="var(--spacing-gap-l)">
              <DxcParagraph>
                Show trends over time or ordered categories. Optional brush helps when the horizontal domain is long.
              </DxcParagraph>
              <Image src={rechartsLineImage} alt="Line chart" />
            </DxcFlex>
          ),
        },
        {
          title: "Area chart",
          content: (
            <DxcFlex direction="column" gap="var(--spacing-gap-l)">
              <DxcParagraph>
                Emphasize volume or cumulative change; gradients make stacked or overlapping series easier to read at a
                glance.
              </DxcParagraph>
              <Image src={rechartsAreaImage} alt="Area chart" />
            </DxcFlex>
          ),
        },
        {
          title: "Pie chart",
          content: (
            <DxcFlex direction="column" gap="var(--spacing-gap-l)">
              <DxcParagraph>
                Part-to-whole with pie or donut variants. Best for a small number of segments; pair with a table if
                precision matters.
              </DxcParagraph>
              <Image src={rechartsPieImage} alt="Pie chart" />
            </DxcFlex>
          ),
        },
        {
          title: "Horizontal bar",
          content: (
            <DxcFlex direction="column" gap="var(--spacing-gap-l)">
              <DxcParagraph>
                Label + headline value + a 0-100 track-useful for scores, completion, or capability models without a
                full Cartesian chart.
              </DxcParagraph>
              <Image src={rechartsHorizontalBarImage} alt="Horizontal bar chart" />
            </DxcFlex>
          ),
        },
      ],
    },
    {
      title: "Color configuration",
      content: (
        <>
          <DxcParagraph>
            Recharts does not have a built-in color palette, but you can pass any colors you like via props. It is{" "}
            <strong>highly recommended to use Halstack tokens</strong> for color values to maintain consistency with the
            rest of your UI.
          </DxcParagraph>
          <DxcParagraph>
            Check out how colors are configured in the{" "}
            <Link href={CODE_SANDBOX_REFERENCE_APP} passHref legacyBehavior>
              <DxcLink>codesandbox example</DxcLink>
            </Link>
            .
          </DxcParagraph>
        </>
      ),
    },
  ],
};
