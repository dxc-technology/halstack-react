import { DxcBulletedList, DxcFlex, DxcParagraph } from "@repo/ui";
import Image from "@/common/Image";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import specs from "./images/breadcrumbs_specs.png";
import anatomy from "./images/breadcrumbs_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Breadcrumbs design specifications">
        <Image src={specs} alt="Breadcrumbs design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Breadcrumbs anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Breadcrumbs item</DxcBulletedList.Item>
          <DxcBulletedList.Item>Divider</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Design tokens",
    content: <DxcParagraph>This component currently has no design tokens.</DxcParagraph>,
  },
];

const BreadcrumbsSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/breadcrumbs/specs/BreadcrumbsSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default BreadcrumbsSpecsPage;
