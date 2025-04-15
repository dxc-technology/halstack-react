import { DxcParagraph, DxcFlex, DxcAlert } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const DataGridPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/data-grid" },
    { label: "Usage", path: "/components/data-grid/usage" },
    { label: "Specifications", path: "/components/data-grid/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Data Grid" />
          <DxcAlert
            title="Issues"
            semantic="warning"
            message={{ text: "There are known styling issues with sortable columns when used in a NextJS app." }}
            closable={false}
          />
          <DxcParagraph>
            A data grid is a component designed to display large volumes in a structured and organized manner. It
            structures data into rows and columns, making it easy for users to visualize, analyze, and interact with the
            information. The data grid also improves user experience by providing features like sorting, filtering, and
            editing.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default DataGridPageHeading;
