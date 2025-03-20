import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The textarea component is a form component that allows the user to enter a multi-line, free-form text.
      </DxcParagraph>
    ),
  },
];

const TextareaOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/textarea/overview/TextareaOverviewPage.tsx" />
  </DxcFlex>
);

export default TextareaOverviewPage;
