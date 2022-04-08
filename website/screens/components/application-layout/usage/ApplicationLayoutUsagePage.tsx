import Image from "@/common/Image";
import {
  DxcText,
  DxcStack,
  DxcList,
  DxcTable,
} from "@dxc-technology/halstack-react";
import SidenavBehavior from "./images/sidenav_behavior.png";
import SidenavBehaviorMobile from "./images/sidenav_behavior_mobile.png";
import DocFooter from "../../../common/DocFooter";
import Figure from "../../../common/Figure";
import HeadingLink from "../../../common/HeadingLink";

const ApplicationLayoutUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText>When using the application layout component consider the following:</DxcText>
        <DxcList>
          <DxcText>
            Use the sidenav when the application navigation has an horizontal hierarchy
          </DxcText>
          <DxcText>
            Header and footer elements should be always present
          </DxcText>
          <DxcText>
            Only use the mode overlay if the content cannot dynamically adapt to the available space
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Sidenav: overlay and push</HeadingLink>
        <Figure caption="Overlay and push behavior of the sidenav component">
          <Image src={SidenavBehavior} alt="Overlay and push behavior of the sidenav component" />
        </Figure>
        <DxcText>Overlay and push interactions by the sidenav component can alter the way the layout is displayed. 
          For overlay, the sidenav simply slides over the content with no changes to position. 
          The push interaction moves the main container to the side depending on the width of the sidenav. </DxcText>
      
        <HeadingLink level={4}>Mobile behavior</HeadingLink>
        <Figure caption="Default sidenav behavior on mobile devices">
          <Image src={SidenavBehaviorMobile} alt="Default sidenav behavior on mobile devices" />
        </Figure>
        <DxcText as="p">
            The default behavior for mobile device is overlay since the available space doesn't allow to push the main content.
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/application-layout/usage/ApplicationLayoutUsagePage.tsx" />
    </DxcStack>
  );
};

export default ApplicationLayoutUsagePage;
