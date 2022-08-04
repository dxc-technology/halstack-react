import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const HeaderPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/header" },
    { label: "Usage", path: "/components/header/usage" },
    { label: "Specifications", path: "/components/header/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Header" status="Ready" />
          <DxcParagraph>
            The header is an important component in the interface, it is the
            area dedicated for the navigation across the application and helps
            users understand what the content of the page is about. They appear
            at the top of a page, above the main content.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default HeaderPageHeading;
