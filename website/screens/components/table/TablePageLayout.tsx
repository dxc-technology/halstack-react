import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const TablePageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/table" },
    { label: "Specifications", path: "/components/table/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Table" weight="bold"></DxcHeading>
          <DxcText as="p">
            Data table is a component with a high rate of usage within the
            applications. It allows to show the user a big amount of information
            in a simple and simplified way. All the information contained in the
            table has a grid structure, defining columns and rows to place the
            data and allow the users to scan, analazy, compare and filter that
            information.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default TablePageHeading;
