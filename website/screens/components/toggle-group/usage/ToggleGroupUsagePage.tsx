import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import toggleGroupVariants from "./images/toggle_group_variants.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcText as="p">
          Toggles should be used in place of radio buttons whenever the options
          are:
        </DxcText>
        <DxcList>
          <DxcText>
            Minimal in number, i.e. 3 or 4 maximum choices where only one
            selction is required
          </DxcText>
          <DxcText>Opposites of each other</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <Figure caption="Toggle component single and multiple variants">
          <Image
            src={toggleGroupVariants}
            alt="Toggle component single and multiple variants"
          />
        </Figure>
        <DxcText as="p">
          The selection of the toggle group can be mutually exclusive (single
          variant) or multiple (multiple variant).
        </DxcText>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <DxcText as="p">
        Inside the toggle button, it is possible to use icons to represent
        recognizable actions. The specifications for icon usage differs a little
        bit in relation to text usage. The size of the icons should be 24 by 24
        pixels, it must be centered respecting to the box that contains it
        vertically and horizontally.{" "}
      </DxcText>
    ),
  },
];

const ToggleGroupUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/toggle-group/usage/ToggleGroupUsagePage.tsx" />
    </DxcStack>
  );
};

export default ToggleGroupUsagePage;
