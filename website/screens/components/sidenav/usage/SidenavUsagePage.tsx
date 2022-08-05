import {
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import sidenavVariants from "./images/sidenav_variants.png";
import sidenavResponsive from "./images/sidenav_responsive.png";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the sidenav element to improve the discoverability of the
          application, making the navigation links accessible to the users.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Keep in mind the type of the devices that you are developing for, and
          handle the behavior in a way that doesn&#39;t block or reduce the
          available space of the main area in the application.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Try to follow and order for the sidenav content and make use of
          hierarchy to differentiate between a title and a link.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <Figure
          caption={
            <DxcParagraph>
              Example of the <Code>overlay</Code> and <Code>push</Code> sidenav
              variants
            </DxcParagraph>
          }
        >
          <Image
            src={sidenavVariants}
            alt="Example of the overlay and push sidenav variants"
          />
        </Figure>
        <DxcParagraph>
          Two different modes can be set in the element, according to the needs
          of the application and the relation between the main content and the
          sidenav.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>overlay</strong>
              </td>
              <td>
                Content is covered by the sidenav container when displayed
              </td>
            </tr>
            <tr>
              <td>
                <strong>push</strong>
              </td>
              <td>Content is pushed right when displayed</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Responsive version for mobile and tablet",
    content: (
      <>
        <Figure caption="Sidenav component example in mobile devices">
          <Image
            src={sidenavResponsive}
            alt="Sidenav component example in mobile devices"
          />
        </Figure>
        <DxcParagraph>
          The responsive version of the component for mobile and tablet works a
          little bit different compared with the version for desktop. As the
          size of the screen in those devices is reduced, the default behavior
          in the first load of the page will be hidden in the sidenav component.
          Taking this approach, as a first view of the page the user has all the
          content in the main area visible, and then he will need to interact
          with the component to make it visible and navigate to other resources.
        </DxcParagraph>
        <DxcParagraph>
          Also, as an important point to mention, the only variant that works
          with responsive is the overlay, due to lack of space in the screen if
          the sidenav pushed the content of the main container.
        </DxcParagraph>
      </>
    ),
  },
];

const SidenavUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/sidenav/usage/SidenavUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SidenavUsagePage;
