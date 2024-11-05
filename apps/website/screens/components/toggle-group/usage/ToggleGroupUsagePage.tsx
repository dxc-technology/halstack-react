import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import icons from "./examples/icons";
import Code from "@/common/Code";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>Toggles should be used in place of radio buttons whenever the options are:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Minimal in number, i.e. 3 or 4 maximum choices where only one selection is required.
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
          The selection of the toggle group can be mutually exclusive (single variant) or mutually inclusive (multiple
          variant).
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcParagraph>
          Icons can be used to add information and clarify the action performed by each button in the toggle group. Do
          not use icons primarily for visual interest.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The size of the icons is 24 by 24 pixels. They must be aligned vertically and horizontally with respect to
            the corresponding toggle button box.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            A group of icon-only toggle buttons is a valid use case and allowed in the design system. In such a
            situation and in order to preserve the accessibility of the component, the use of the title prop is
            mandatory.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The <Code>title</Code> prop offers a contextual bubble with missing information necessary to clarify the
            action performed by each toggle button. It also provides an accessible gateway when no regular label can be
            specified.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Try to limit the use of icon-only toggle groups. Whenever possible, the icon should be accompanied by a
            label.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={icons} />
      </>
    ),
  },
];

const ToggleGroupUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toggle-group/usage/ToggleGroupUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ToggleGroupUsagePage;
