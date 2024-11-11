import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import sidenavResponsive from "./images/sidenav_responsive.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use the sidenav component to improve the discoverability of the application, making the navigation links
            accessible to the users.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Keep in mind the type of the devices that you are developing for, and handle the behavior in a way that
            doesn&#39;t block or reduce the available space of the main area in the application.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Try to follow and order for the Sidenav content and make use of hierarchy to differentiate between a title
            and a link.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Responsive version for mobile and tablet",
    content: (
      <>
        <DxcParagraph>
          The responsive version of the component for mobile and tablet works a little bit different compared to the
          version for desktop. As the size of the screen in those devices is reduced and once the breakpoint has been
          reached (720px), the sidenav is displayed in mobile responsive view.
        </DxcParagraph>
        <Figure caption="Sidenav responsive version">
          <Image src={sidenavResponsive} alt="Sidenav responsive version" />
        </Figure>
      </>
    ),
  },
];

const SidenavUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/sidenav/usage/SidenavUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SidenavUsagePage;
