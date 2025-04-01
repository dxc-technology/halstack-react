import { DxcFlex, DxcParagraph, DxcBulletedList, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The flex component simplifies the creation of flexible and responsive layouts by abstracting the complexity of
          CSS flexbox. Instead of manually handling flex properties, developers can use this component to build
          structured and adaptable designs with improved readability and maintainability.
        </DxcParagraph>
        <DxcParagraph>
          By leveraging flex, layouts can automatically adjust to different screen sizes and content variations,
          ensuring a seamless user experience. This documentation covers its functionality, best practices, and key
          concepts to help you use it effectively.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "The flexible box layout module",
    content: (
      <>
        <DxcParagraph>
          The flexible box layout module (usually referred to as <strong>flexbox</strong>) is a CSS layout model that
          provides a more efficient way to organize, align, and distribute space among items within a container, even
          when their size is unknown or dynamic.
        </DxcParagraph>
        <DxcParagraph>
          Below, we share a series of essential links to help you understand and use the flex component correctly. If
          you are not acquainted with these concepts, we strongly recommend taking a moment to review them:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" newWindow>
              MDN web docs: CSS flexible box layout
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://web.dev/learn/css/flexbox" newWindow>
              Google web.dev: Flexbox
            </DxcLink>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use flex for responsive layouts:</strong> use the flex component to create layouts that adapt to
          different screen sizes and content variations.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prioritize fluidity over fixed sizes:</strong> avoid using fixed widths or heights when possible, as
          they can lead to layout issues on different devices. Instead, leverage flex properties like <Code>grow</Code>,
          <Code>shrink</Code>, and <Code>basis</Code> to create scalable designs.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Leverage alignment and justification:</strong> use <Code>justifyContent</Code> and{" "}
          <Code>alignItems</Code> strategically to control content positioning within the flex container, ensuring a
          well-structured and visually balanced layout.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Optimize nested flex containers:</strong> while nesting flex containers is sometimes necessary,
          excessive nesting can reduce readability and maintainability. Consider alternative layout strategies when
          appropriate.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure consistency with design tokens:</strong> whenever possible, use the design tokens provided by
          the Halstack Design System to maintain visual and functional consistency across applications, even though the
          component allows custom values.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Combine with other layout techniques:</strong> flexbox is powerful but not always the best tool for
          every scenario. Consider using the{" "}
          <Link href="/components/grid" passHref legacyBehavior>
            <DxcLink>grid</DxcLink>
          </Link>{" "}
          component for complex two-dimensional layouts or stacked components for simpler structures.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const FlexOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/flex/overview/FlexOverviewPage.tsx" />
  </DxcFlex>
);

export default FlexOverviewPage;
