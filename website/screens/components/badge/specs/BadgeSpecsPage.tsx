import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import specsImage from "./images/badge_specs.jpg";
import anatomyImage from "./images/badge_anatomy.jpg";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Badge design specifications">
        <Image src={specsImage} alt="Badge design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Badge anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const BadgeSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/badge/specs/BadgeSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default BadgeSpecsPage;
