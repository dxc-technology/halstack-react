import { DxcBulletedList, DxcFlex, DxcParagraph } from "@repo/ui";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import headerResponsive from "./images/header_responsive.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Try to avoid to place a large number of items inside the content area.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Avoid increasing the header height.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Halstack components placed as a children should follow their respective guidelines.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        {/* <Example example={variants} /> */}
        <DxcParagraph>
          Following the convention of the variants that can be found in a component, two main variants are defined for
          the header. Variants: <strong>default</strong> and <strong>underlined</strong>.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Custom content",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Application name</strong>: If the application has a specific name, can be placed following the brand
          image.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Primary navigation</strong>: The links and dropdowns with a navigational purpose.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Site options</strong>: Language selector, settings, or other any option that applies.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Account</strong>: In the case that the application manages accounts, the element for the login and
          register options should be positioned on the far right except in the tablet and mobile version that will be
          covered in the following sections.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Responsive version for mobile and tablet",
    content: (
      <>
        <DxcParagraph>
          Due to the applications are accessible from a laptop, tablet and mobile it is necessary to think and design a
          header version for the corresponding device. The design for smaller devices tries to keep the consistency
          respect to the other versions, allowing the user experiences a similar interaction although the space
          available is less.
        </DxcParagraph>
        <Figure caption="Header menu responsive version">
          <Image src={headerResponsive} alt="Header menu responsive version" />
        </Figure>
      </>
    ),
  },
];

const HeaderUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/header/usage/HeaderUsagePage.tsx" />
    </DxcFlex>
  );
};

export default HeaderUsagePage;
