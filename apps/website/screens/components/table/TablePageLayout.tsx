import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const TablePageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/table" },
    { label: "Code", path: "/components/table/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Table" />
          <DxcParagraph>
            Data table is a component with a high rate of usage within the applications. It allows to show the user a
            big amount of information in a simple and simplified way. All the information contained in the table has a
            grid structure, defining columns and rows to place the data and allow the users to scan, analyze, compare
            and filter that information.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TablePageHeading;
