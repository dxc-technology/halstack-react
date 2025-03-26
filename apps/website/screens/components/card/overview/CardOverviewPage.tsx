import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Cards are versatile UI components used to group related content and actions within a contained layout. They help
        organize information into digestible sections, making it easier for users to scan, compare, and interact with
        individual items. Cards enhance readability and visual hierarchy and are commonly used in dashboards, product
        listings, user profiles, and content previews to support structured and engaging user experiences.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Card's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item></DxcBulletedList.Item>
          <DxcBulletedList.Item></DxcBulletedList.Item>
          <DxcBulletedList.Item></DxcBulletedList.Item>
          <DxcBulletedList.Item></DxcBulletedList.Item>
          <DxcBulletedList.Item></DxcBulletedList.Item>
          <DxcBulletedList.Item></DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const CardOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/card/overview/CardOverviewPage.tsx" />
  </DxcFlex>
);

export default CardOverviewPage;
