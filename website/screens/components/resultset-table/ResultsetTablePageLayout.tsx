import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ResultsetTablePageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/resultset-table" },
    { label: "Usage", path: "/components/resultset-table/usage" },
    {
      label: "Specifications",
      path: "/components/resultset-table/specifications",
    },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Resultset Table" status="Ready" />
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

export default ResultsetTablePageHeading;
