import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The bleed component is a container that applies negative margins around its content, allowing elements to
          extend beyond their usual boundaries. This can be useful for aligning content seamlessly and creating dynamic,
          edge-to-edge layouts. It provides customizable spacing options, offering greater design flexibility while
          maintaining visual coherence.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Enhance visual flow:</strong> use the bleed component to create smooth transitions between sections,
          removing unwanted spacing restrictions.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain balance and aesthetics:</strong> choose appropriate spacing values to ensure a
          well-proportioned and visually appealing design.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid unnecessary clutter:</strong> excessive use of the Inset component may lead to a fragmented or
          overcrowded layout.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure consistency with design tokens:</strong> whenever possible, use the design tokens provided by
          the Halstack Design System, to maintain visual and functional consistency across applications, even though the
          component allows custom values.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Combine with other layout techniques:</strong> use this component alongside{" "}
          <Link href="/components/flex" passHref legacyBehavior>
            <DxcLink>flex</DxcLink>
          </Link>{" "}
          and{" "}
          <Link href="/components/grid" passHref legacyBehavior>
            <DxcLink>grid</DxcLink>
          </Link>{" "}
          components to create consistent and semantic layouts.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const BleedOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/bleed/overview/BleedOverviewPage.tsx" />
  </DxcFlex>
);

export default BleedOverviewPage;
