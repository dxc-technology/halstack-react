import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "@/common/HeadingLink";
import DocFooter from "@/common/DocFooter";

const ChipUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Do not use chips instead of buttons they have a total different aim
            in the UI.
          </DxcText>
          <DxcText>Make clear and simple the content of the label.</DxcText>
          <DxcText>Use chips to make tasks easier for the user.</DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/chip/usage/ChipUsagePage.tsx" />
    </DxcStack>
  );
};

export default ChipUsagePage;
