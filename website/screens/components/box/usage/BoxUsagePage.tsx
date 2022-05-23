import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import DocFooter from "@/common/DocFooter";
import boxVariants from "./images/box_variants.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Organize the group layout with the information presented clearly by
          applying the styles in the box container.
        </DxcText>
        <DxcText>
          Box can be reused accros the UI, avoid using different variants in the
          same page.
        </DxcText>
        <DxcText>
          Use always a minimun padding and always leave enough margin when
          stacking boxes so the shadows don&#39;t overlap.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <Figure caption="Box component variants">
          <Image src={boxVariants} alt="Box component variants" />
        </Figure>
        <DxcText as="p">
          The <Code>shadow-default</Code> and <Code>shadow-high</Code> variants
          can be used to create clear distictions between sections of content
          without the use of borders or separators, the <Code>no-shadow</Code>{" "}
          helps in the process of building the layout. Note that when using an
          application
          <Code>background-color</Code> different than white, the limits of the
          box are goig to be clearly visible no matter the variant chosen.
        </DxcText>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <DxcText as="p">
        Any type of content can be place inside the box component.
      </DxcText>
    ),
  },
];

const BoxUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/box/usage/BoxUsagePage.tsx" />
    </DxcStack>
  );
};

export default BoxUsagePage;
