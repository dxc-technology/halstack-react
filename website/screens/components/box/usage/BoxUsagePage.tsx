import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import variants from "./examples/variants";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Organize the group layout with the information presented clearly by
          applying the styles in the box container.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Box can be reused across the UI, avoid using different variants in the
          same page.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Set always a minimum padding among the content and the box border.
          Also, try to leave enough margin when stacking boxes so the shadows
          don't overlap.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <Example example={variants} />
        <DxcParagraph>
          The <Code>shadow-default</Code> and <Code>shadow-high</Code> variants
          can be used to create clear distinctions between sections of content
          without the use of borders or separators, the <Code>no-shadow</Code>{" "}
          helps in the process of building the layout. Note that when an
          application <Code>background-color</Code> other than white is used,
          the boundaries of the box will be visible regardless of the variant
          chosen.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <DxcParagraph>
        Any type of content can be placed inside the box component.
      </DxcParagraph>
    ),
  },
];

const BoxUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/box/usage/BoxUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BoxUsagePage;
