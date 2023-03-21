import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the table component to compare information in rows and columns.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Every table cell requires a logical column header/row header.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Don&#39;t use the table for create visual layout of the content of a
          page.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid truncating content, wrap instead.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ResultsetTableUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/resultset-table/usage/ResultsetTableUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ResultsetTableUsagePage;
