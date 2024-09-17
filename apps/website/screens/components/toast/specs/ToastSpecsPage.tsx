import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import specs from "./images/toast_specs.png";
import anatomy from "./images/toast_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Toast design specifications">
        <Image src={specs} alt="Toast design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Toast anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Text message</DxcBulletedList.Item>
          <DxcBulletedList.Item>Action</DxcBulletedList.Item>
          <DxcBulletedList.Item>Close action</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Design tokens",
    content: <DxcParagraph>This component currently has no design tokens.</DxcParagraph>,
  },
];

const TextareaSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/toast/specs/ToastSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default TextareaSpecsPage;
