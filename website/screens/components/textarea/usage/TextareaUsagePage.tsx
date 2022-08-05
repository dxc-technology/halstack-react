import { DxcList, DxcFlex, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Use the textarea when users need to enter text longer than a single
          line.
        </DxcText>
        <DxcText>
          Avoid using the textarea when complex questions can break up in
          simpler ones.
        </DxcText>
      </DxcList>
    ),
  },
];

const TextareaUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/textarea/usage/TextareaUsagePage.tsx" />
    </DxcFlex>
  );
};

export default TextareaUsagePage;
