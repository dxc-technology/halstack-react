import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Use the texarea when you need users to enter a text longer than a
          single line.
        </DxcText>
        <DxcText>
          Avoid using the text area when complex questions can break up in
          simpler ones.
        </DxcText>
      </DxcList>
    ),
  },
];

const TextareaUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/textarea/usage/TextareaUsagePage.tsx" />
    </DxcStack>
  );
};

export default TextareaUsagePage;
