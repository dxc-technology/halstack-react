import {
  DxcParagraph,
  DxcBulletedList,
  DxcStack,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import variants from "./examples/variants";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Toggles should be used in place of radio buttons whenever the options
          are:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Minimal in number, i.e. 3 or 4 maximum choices where only one
            selection is required.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Opposites of each other.</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <Example example={variants} />
        <DxcParagraph>
          The selection of the toggle group can be mutually exclusive (single
          variant) or mutually inclusive (multiple variant).
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <DxcParagraph>
        Inside the toggle button, it is possible to use icons to represent
        recognizable actions. The specifications for icon usage differs a little
        bit in relation to text usage. The size of the icons should be 24 by 24
        pixels, it must be centered respecting to the box that contains it
        vertically and horizontally.{" "}
      </DxcParagraph>
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
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/toggle-group/usage/ToggleGroupUsagePage.tsx" />
    </DxcStack>
  );
};

export default ToggleGroupUsagePage;
