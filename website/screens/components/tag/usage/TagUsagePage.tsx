import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import iconUsage from "./examples/iconUsage";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Use the tag component to highlight properties of a section that want
          to remark.
        </DxcText>
        <DxcText>
          Make consistent use of the component accross the application.
        </DxcText>
        <DxcText>
          Be responsible of the use of background color and icons.
        </DxcText>
        <DxcText>
          If there are multiple tags, the space between them should be at least
          16px.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <Example example={iconUsage} />
        <DxcList>
          <DxcText>
            The tag can be displayed with icon and label or only icon.
          </DxcText>
          <DxcText>The icon can be placed before or after.</DxcText>
          <DxcText>
            The icon background color can be defined with the
            <Code>iconBgColor</Code> component property.
          </DxcText>
        </DxcList>
      </>
    ),
  },
];

const TagUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/tag/usage/TagUsagePage.tsx" />
    </DxcStack>
  );
};

export default TagUsagePage;
