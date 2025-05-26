import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The Table component is a powerful and flexible tool for displaying tabular data in a structured format. It
        allows users to present information in rows and columns, making it easy to read and analyze large datasets.
      </DxcParagraph>
    ),
  },
];

const TableOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/table/overview/TableOverviewPage.tsx" />
  </DxcFlex>
);

export default TableOverviewPage;
