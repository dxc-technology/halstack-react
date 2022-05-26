import { DxcStack, DxcText, DxcList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcText as="p">
          Considerations for the use of the number input component:
        </DxcText>
        <DxcList>
          <DxcText>
            Don&#39;t use the number input component for amounts. Use a text
            input instead.
          </DxcText>
          <DxcText>Always enable typing in the input field.</DxcText>
          <DxcText>
            Avoid using the component when large values are expected.
          </DxcText>
        </DxcList>
      </>
    ),
  },
];

const NumberInputUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/number-input/usage/NumberInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default NumberInputUsagePage;
