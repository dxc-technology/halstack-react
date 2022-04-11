import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const TextareaUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/textarea/usage/TextareaUsagePage.tsx" />
    </DxcStack>
  );
};

export default TextareaUsagePage;
