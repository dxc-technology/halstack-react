import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Do not use chips instead of buttons they have a total different aim in
          the UI.
        </DxcText>
        <DxcText>Make clear and simple the content of the label.</DxcText>
        <DxcText>Use chips to make tasks easier for the user.</DxcText>
      </DxcList>
    ),
  },
];

const ChipUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/chip/usage/ChipUsagePage.tsx" />
    </DxcStack>
  );
};

export default ChipUsagePage;
