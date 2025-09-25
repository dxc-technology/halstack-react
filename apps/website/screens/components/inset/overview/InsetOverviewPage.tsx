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
          The inset component is a container that adds spacing around its content, enhancing visual separation between
          elements in a layout. It offers customizable spacing options, allowing for greater design flexibility.
          Typically, it is used alongside other components to create a cohesive and well-structured layout.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Enhance visual hierarchy:</strong> use the inset component to create clear separation between elements
          in a layout.
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

const InsetOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/inset/overview/InsetOverviewPage.tsx" />
  </DxcFlex>
);

export default InsetOverviewPage;
