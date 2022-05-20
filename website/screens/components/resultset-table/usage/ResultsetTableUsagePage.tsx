import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Use the table component to compare information in rows and columns.
        </DxcText>
        <DxcText>
          Every table cell requires a logical column header/row header.
        </DxcText>
        <DxcText>
          Don&#39;t use the table for create visual layout of the content of a
          page.
        </DxcText>
        <DxcText>Avoid truncating content, wrap instead.</DxcText>
      </DxcList>
    ),
  },
];

const ResultsetTableUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcStack>
  );
};

export default ResultsetTableUsagePage;
