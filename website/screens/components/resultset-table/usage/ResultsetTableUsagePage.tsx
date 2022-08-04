import { DxcText, DxcList, DxcFlex } from "@dxc-technology/halstack-react";
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
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ResultsetTableUsagePage;
