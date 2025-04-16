import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const ResultsetTablePageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/resultset-table" },
    { label: "Usage", path: "/components/resultset-table/usage" },
    {
      label: "Specifications",
      path: "/components/resultset-table/specifications",
    },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Resultset Table" />
          <DxcParagraph>
            Data table is a component with a high rate of usage within the applications. It allows to show the user a
            big amount of information in a simple and simplified way. All the information contained in the table has a
            grid structure, defining columns and rows to place the data and allow the users to scan, analyze, compare
            and filter that information.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ResultsetTablePageHeading;
