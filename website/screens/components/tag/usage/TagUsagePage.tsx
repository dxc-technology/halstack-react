import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import iconsUsageImage from "./images/tag_icon.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Use the tag component for highlight properties of a section that want
          to remark.
        </DxcText>
        <DxcText>
          Make consistent use of the component accross the application.
        </DxcText>
        <DxcText>
          Be responsible of the use of background color and icons.
        </DxcText>
        <DxcText>
          If there are multiple tags, the space between the should be at least
          16px.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <Figure caption="Icon usage examples">
          <Image src={iconsUsageImage} alt="Icon usage examples" />
        </Figure>
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
