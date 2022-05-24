import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcList>
            <DxcText>
              Use the component password input when the value expected is a
              password and need to be secured.
            </DxcText>
            <DxcText>Provide the requirements in the helper text.</DxcText>
          </DxcList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcList>
            <DxcText>
              Show the validation of the password input until the component
              loses the focus.
            </DxcText>
            <DxcText>Disable the copy/paste input functionality.</DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const PasswordInputUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/password-input/usage/PasswordInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default PasswordInputUsagePage;
