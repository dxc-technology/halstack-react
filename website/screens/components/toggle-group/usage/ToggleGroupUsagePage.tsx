import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import toggleGroupVariants from "./images/toggle_group_variants.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const ToggleGroupUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">
          Toggles should be used in place of radio buttons whenever the options are:
        </DxcText>
        <DxcList>
          <DxcText>
            Minimal in number, i.e. 3 or 4 maximum choices where only one selction is required
          </DxcText>
          <DxcText>Opposites of each other</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Variants</HeadingLink>
        <Figure caption="Toggle component single and multiple variants">
          <Image src={toggleGroupVariants} alt="Toggle component single and multiple variants" />
        </Figure>
        <DxcText as="p">
          The selection of the toggle group can be mutually exclusive (single variant) or multiple
          (multiple variant).
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Icon Usage</HeadingLink>
        <DxcText as="p">
          Inside the toggle button, it is possible to use icons to represent recognizable actions.
          The specifications for icon usage differs a little bit in relation to text usage. The size
          of the icons should be 24 by 24 pixels, it must be centered respecting to the box that
          contains it vertically and horizontally.{" "}
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/toggle-group/usage/ToggleGroupUsagePage.tsx" />
    </DxcStack>
  );
};

export default ToggleGroupUsagePage;
