import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcBulletedList, DxcParagraph, DxcAlert } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Bulleted lists are used to present grouped information in a clear, scannable format. They help users quickly
          identify key points or related items without following a specific order. In Halstack, the bulleted list
          component supports customizable icon variants, and nesting levels to adapt to different content needs while
          maintaining consistency and readability across the interface. Use this component to enhance clarity and break
          down complex information into digestible chunks.
        </DxcParagraph>
        <DxcAlert
          title="Use cases"
          semantic="warning"
          message={{
            text: (
              <DxcParagraph>
                Disclaimer - This component is not a 1-to-1 replacement of the <Code>ul</Code> <Code>ol</Code> native
                tags. These native tags have many different use-cases and the Bulleted List only covers one of them:
                listing text items within a document.
              </DxcParagraph>
            ),
          }}
          closable={false}
        />
      </>
    ),
  },
];

const BulletedListOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/bulleted-list/usage/BulletedListOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default BulletedListOverviewPage;
