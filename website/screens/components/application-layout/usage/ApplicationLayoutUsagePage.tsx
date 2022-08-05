import {
  DxcParagraph,
  DxcFlex,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import SidenavBehavior from "./images/sidenav_behavior.png";
import SidenavBehaviorMobile from "./images/sidenav_behavior_mobile.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          When using the application layout component consider the following:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use the sidenav when the application navigation has an horizontal
            hierarchy
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Header and footer elements should be always present
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Only use the mode overlay if the content cannot dynamically adapt to
            the available space
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Sidenav: overlay and push",
    content: (
      <>
        <Figure caption="Overlay and push behavior of the sidenav component">
          <Image
            src={SidenavBehavior}
            alt="Overlay and push behavior of the sidenav component"
          />
        </Figure>
        <DxcParagraph>
          Overlay and push interactions by the sidenav component can alter the
          way the layout is displayed. For overlay, the sidenav simply slides
          over the content with no changes to position. The push interaction
          moves the main container to the side depending on the width of the
          sidenav.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Mobile behavior",
        content: (
          <>
            <Figure caption="Default sidenav behavior on mobile devices">
              <Image
                src={SidenavBehaviorMobile}
                alt="Default sidenav behavior on mobile devices"
              />
            </Figure>
            <DxcParagraph>
              The default behavior for mobile device is overlay since the
              available space doesn&#39;t allow to push the main content.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
];

const ApplicationLayoutUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/application-layout/usage/ApplicationLayoutUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ApplicationLayoutUsagePage;
