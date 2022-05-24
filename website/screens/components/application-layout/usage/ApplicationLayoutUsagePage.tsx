import { DxcText, DxcStack, DxcList } from "@dxc-technology/halstack-react";
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
        <DxcText>
          When using the application layout component consider the following:
        </DxcText>
        <DxcList>
          <DxcText>
            Use the sidenav when the application navigation has an horizontal
            hierarchy
          </DxcText>
          <DxcText>Header and footer elements should be always present</DxcText>
          <DxcText>
            Only use the mode overlay if the content cannot dynamically adapt to
            the available space
          </DxcText>
        </DxcList>
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
        <DxcText>
          Overlay and push interactions by the sidenav component can alter the
          way the layout is displayed. For overlay, the sidenav simply slides
          over the content with no changes to position. The push interaction
          moves the main container to the side depending on the width of the
          sidenav.
        </DxcText>
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
            <DxcText as="p">
              The default behavior for mobile device is overlay since the
              available space doesn&#39;t allow to push the main content.
            </DxcText>
          </>
        ),
      },
    ],
  },
];

const ApplicationLayoutUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/application-layout/usage/ApplicationLayoutUsagePage.tsx" />
    </DxcStack>
  );
};

export default ApplicationLayoutUsagePage;
