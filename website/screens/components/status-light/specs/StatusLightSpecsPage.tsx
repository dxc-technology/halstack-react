import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/status-light_specs.jpg";
import anatomyImage from "./images/status-light_anatomy.jpg";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Status Light design specifications">
        <Image src={specsImage} alt="Status Light design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Status Light anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Status Light</DxcBulletedList.Item>
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const StatusLightSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/status-light/specs/StatusLightSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default StatusLightSpecsPage;
