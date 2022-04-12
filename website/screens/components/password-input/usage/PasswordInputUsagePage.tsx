import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const PasswordInputUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <HeadingLink level={3}>Do&#39;s</HeadingLink>
        <DxcList>
          <DxcText>
            Use the component password input when the value expected is a
            password and need to be secured.
          </DxcText>
          <DxcText>Provide the requirements in the helper text.</DxcText>
        </DxcList>
        <HeadingLink level={3}>Dont&#39;s</HeadingLink>
        <DxcList>
          <DxcText>
            Show the validation of the password input until the component loses
            the focus.
          </DxcText>
          <DxcText>Disable the copy/paste input functionality.</DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/password-input/usage/PasswordInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default PasswordInputUsagePage;
