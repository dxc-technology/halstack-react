import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import tooltipAnatomy from "./images/tooltip_anatomy.png";
import tooltipSpecs from "./images/tooltip_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Tooltip design specifications">
        <Image src={tooltipSpecs} alt="Tooltip design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={tooltipAnatomy} alt="Tooltip anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
          <DxcBulletedList.Item>Chevron</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Design tokens",
    content: (
      <>
        <DxcParagraph>This component currently has no design tokens.</DxcParagraph>
      </>
    ),
  },
];

const TooltipSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tooltip/specs/TooltipSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default TooltipSpecsPage;
