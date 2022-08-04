import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const PaginatorPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/paginator" },
    { label: "Usage", path: "/components/paginator/usage" },
    { label: "Specifications", path: "/components/paginator/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Paginator" status="Ready" />
          <DxcParagraph>
            The paginator component allows dividing large amounts of content
            into multiple pages.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default PaginatorPageHeading;
