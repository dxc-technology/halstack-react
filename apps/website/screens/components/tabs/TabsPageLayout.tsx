import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageLayout from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const TabsPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/tabs" },
    { label: "Code", path: "/components/tabs/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Tabs" />
          <DxcParagraph>
            A tab is a UI component that allows users to switch between different sections of content without leaving
            the page. Tabs are often used to organize related information into distinct views, making it easier to
            navigate between them.
          </DxcParagraph>
          <TabsPageLayout tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TabsPageHeading;
