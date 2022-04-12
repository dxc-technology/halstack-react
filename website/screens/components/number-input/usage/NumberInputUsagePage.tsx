import { DxcStack, DxcText, DxcList } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const NumberInputUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/number-input/usage/NumberInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default NumberInputUsagePage;
