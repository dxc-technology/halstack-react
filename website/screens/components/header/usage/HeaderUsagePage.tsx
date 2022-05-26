import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import headerVariants from "./images/header_variants.png";
import headerResponsive from "./images/header_responsive.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Try to avoid to place a large number of items inside the content area.
        </DxcText>
        <DxcText>Avoid increasing the header height.</DxcText>
        <DxcText>
          Halstack components placed as a children should follow their
          respective guidelines.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <Figure caption="Header component variants">
          <Image src={headerVariants} alt="Header component variants" />
        </Figure>
        <DxcText as="p">
          Following the convention of the variants that can be found in a
          component, two main variants are defined for the header. Variants:{" "}
          <strong>default</strong> and <strong>underlined</strong>.
        </DxcText>
      </>
    ),
  },
  {
    title: "Custom content",
    content: (
      <DxcList>
        <DxcText>
          <strong>Application name</strong>: If the application has a specific
          name, can be placed following the brand image.
        </DxcText>
        <DxcText>
          <strong>Primary navigation</strong>: The links and dropdowns with a
          navigational purpose.
        </DxcText>
        <DxcText>
          <strong>Site options</strong>: Language selector, settings, or other
          any option that applies.
        </DxcText>
        <DxcText>
          <strong>Account</strong>: In the case that the application manages
          accounts, the element for the login and register options should be
          positioned on the far right except in the tablet and mobile version
          that will be covered in the following sections.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Responsive version for mobile and tablet",
    content: (
      <>
        <DxcText as="p">
          Due to the applications are accessible from a laptop, tablet and
          mobile it is necessary to think and design a header version for the
          corresponding device. The design for smaller devices tries to keep the
          consistency respect to the other versions, allowing the user
          experiences a similar interaction although the space available is
          less.
        </DxcText>
        <Figure caption="Header menu responsive version">
          <Image src={headerResponsive} alt="Header menu responsive version" />
        </Figure>
      </>
    ),
  },
];

const HeaderUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/header/usage/HeaderUsagePage.tsx" />
    </DxcStack>
  );
};

export default HeaderUsagePage;
