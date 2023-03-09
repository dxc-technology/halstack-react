import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
  DxcLink,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import navTabsNavigation from "./images/navTabs_navigation.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Nav tabs organize and allow navigation across different pages of
          content that are related and at the same level of hierarchy. They are
          commonly used in the header of a page.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use nav tabs for page or site navigation when dividing content into
            different pages.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The content should follow an organized structure and hierarchy.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Text labels should be short and have a clear relation to content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Know when to use nav tabs for page navigation and regular tabs for
            section navigation within pages.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          For general tabs usage, refer to the{" "}
          <DxcLink href="https://developer.dxc.com/halstack/next/components/tabs/usage/">
            tabs usage section
          </DxcLink>
          .
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Navigation",
    content: (
      <>
        <DxcParagraph>
          Nav tabs can be used both to navigate within a page as well as to
          external pages and links. The image below illustrates that a
          combination of internal and external links can be used together:
        </DxcParagraph>
        <Image src={navTabsNavigation} alt="Nav tabs navigation" />
      </>
    ),
  },
];

const NavTabsUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/nav-tabs/usage/NavTabsUsagePage.tsx" />
    </DxcFlex>
  );
};

export default NavTabsUsagePage;