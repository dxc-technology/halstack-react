import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Test",
    content: (
      <>
        <DxcParagraph>Container my friend</DxcParagraph>
      </>
    ),
  },
];

const ContainerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/container/usage/ContainerUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ContainerUsagePage;
