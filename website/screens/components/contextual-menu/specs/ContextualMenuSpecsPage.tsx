import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Specifications",
    content: <DxcParagraph>Text</DxcParagraph>,
  },
  {
    title: "Anatomy",
    content: <DxcParagraph>Text</DxcParagraph>,
  },
];

const ContextualMenuSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/contextual-menu/specs/ContextualMenuSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ContextualMenuSpecsPage;
