import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>Use the table component to compare information in rows and columns.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Every table cell requires a logical column header/row header.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Don't use the table to create visual layout of the content of a page.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Avoid truncating content, wrap instead.</DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TableOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/table/overview/TableOverviewPage.tsx" />
  </DxcFlex>
);

export default TableOverviewPage;
