import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          The Grid component allows for both row and column layouts while allowing for a lot of flexibility of item
          placement within the grid itself.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Layout, Spacing, and Placement",
    content: (
      <>
        <DxcParagraph>
          The layout type can be specified using the <Code>grid-auto-flow</Code> property. This property lets you
          control how the auto-placement algorithm works, determining exactly how auto-placed items get flowed into the
          grid. Use the <Code>gap</Code> property to set the space between items and the placement properties{" "}
          <Code>placeContent</Code> and <Code>placeItems</Code> for more specific controls of how individual items stack
          or align within the grid.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Grid Templates",
    content: (
      <>
        <DxcParagraph>
          You can use templates to define grid areas, columns, and rows. The <Code>grid-template-areas</Code> property
          is used to establish cells within a grid and assign them names. <Code>grid-template-columns</Code> defines the
          line names and track sizing functions of the grid columns while <Code>grid-template-rows</Code> defines the
          line names and track sizing functions of the grid columns.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Grid Items",
    content: (
      <>
        <DxcParagraph>
          The Grid items are direct descendants of a grid container. They are represented by the{" "}
          <Code>DxcGrid.Item</Code> tag and should be used when the decision to follow the Grid layout pattern is
          assumed only by the parent container.
        </DxcParagraph>
        <DxcParagraph>
          In case you are building a complex Grid layout with several nested grid containers, <Code>DxcGrid.Item</Code>{" "}
          becomes very limited and therefore, you will have to wrap the children with <Code>DxcGrid</Code>.
        </DxcParagraph>
      </>
    ),
  },
];

const GridUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/grid/usage/GridUsagePage.tsx" />
    </DxcFlex>
  );
};

export default GridUsagePage;
