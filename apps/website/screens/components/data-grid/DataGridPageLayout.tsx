import { DxcParagraph, DxcFlex, DxcAlert } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const DataGridPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/data-grid" },
    { label: "Code", path: "/components/data-grid/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Data Grid" />
          <DxcAlert
            title="Issues"
            semantic="warning"
            message={{ text: "There are known styling issues with sortable columns when used in a NextJS app." }}
            closable={false}
          />
          <DxcParagraph>
            The datagrid component is used to display and manage large sets of data in a tabular format, allowing users
            to sort, filter, and interact with the data efficiently.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default DataGridPageHeading;
