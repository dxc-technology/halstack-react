import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import expandedContent from "./examples/expandedContent";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>Use the data grid (TODO).</DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Expanded content",
    content: (
      <>
        <DxcParagraph>The expanded content can contain any type of child element, but limited to a space.</DxcParagraph>
        <Example example={expandedContent} />
      </>
    ),
  },
];

const DataGridUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/data-grid/usage/DataGridUsagePage.tsx" />
    </DxcFlex>
  );
};

export default DataGridUsagePage;
