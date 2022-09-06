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
          Box can be reused accros the UI, avoid using different variants in the
          same page.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Use always a minimun padding and always leave enough margin when
          stacking boxes so the shadows don&#39;t overlap.
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
          can be used to create clear distictions between sections of content
          without the use of borders or separators, the <Code>no-shadow</Code>{" "}
          helps in the process of building the layout. Note that when using an
          application
          <Code>background-color</Code> different than white, the limits of the
          box are goig to be clearly visible no matter the variant chosen.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <DxcParagraph>
        Any type of content can be place inside the box component.
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
