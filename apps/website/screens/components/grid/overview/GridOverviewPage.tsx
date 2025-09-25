import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The grid component is a powerful layout tool that simplifies the creation of complex and responsive designs.
          It allows developers to create structured layouts using rows and columns, making it easier to manage spacing
          and alignment within a design.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "The grid layout",
    content: (
      <>
        <DxcParagraph>
          The grid layout module is a two-dimensional layout system for the web. It allows you to create complex layouts
          using rows and columns, making it easier to design responsive web pages. The grid layout provides a more
          efficient way to align and distribute space among items in a container, even when their size is unknown or
          dynamic.
        </DxcParagraph>
        <DxcParagraph>
          Below, we share a series of essential links to help you understand and use the grid component correctly. If
          you are not acquainted with these concepts, we strongly recommend taking a moment to review them:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" newWindow>
              MDN web docs: CSS grid layout
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://web.dev/learn/css/grid" newWindow>
              Google web.dev: Grid
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
          <strong>Use grid for complex layouts:</strong> the grid component is ideal for creating complex layouts with
          multiple rows and columns. It allows you to create responsive designs that adapt to different screen sizes.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep it simple:</strong> while the grid component is powerful, it's essential to keep your layouts as
          simple as possible. Avoid overcomplicating your designs with too many nested grids or complex structures,
          which can reduce the readability and maintainability of your code.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use grid items correctly:</strong> they are represented by the <Code>DxcGrid.Item</Code> tag and
          should be used when the decision to follow the Grid layout pattern is assumed only by the parent container.
          Ensure that you use the grid items correctly within the grid container. The grid items should be direct
          descendants of the grid container to ensure proper alignment and spacing.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prioritize fluidity over fixed sizes:</strong> avoid using fixed widths or heights when possible, as
          they can lead to layout issues on different devices. Instead, leverage grid properties like{" "}
          <Code>templateColumns</Code>, <Code>templateRows</Code>, and <Code>templateAreas</Code> to create scalable
          designs.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use grid gaps wisely:</strong> the grid component provides a gap property to control spacing between
          items. Use this property to create consistent spacing between items and avoid excessive margins or padding.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Leverage alignment and justification:</strong> use <Code>placeContent</Code> and{" "}
          <Code>placeItems</Code> strategically to control content positioning within the grid container, ensuring a
          well-structured and visually balanced layout.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure consistency with design tokens:</strong> whenever possible, use the design tokens provided by
          the Halstack Design System to maintain visual and functional consistency across applications, even though the
          component allows custom values.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Combine with other layout techniques:</strong> grid is powerful but not always the best tool for every
          scenario. Consider using the{" "}
          <Link href="/components/flex" passHref legacyBehavior>
            <DxcLink>flex</DxcLink>
          </Link>{" "}
          component instead for one-dimensional layouts or stacked components with simpler structures.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const GridOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/grid/overview/GridOverviewPage.tsx" />
  </DxcFlex>
);

export default GridOverviewPage;
