import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const HeaderPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/header" },
    { label: "Specifications", path: "/components/header/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Header" weight="bold"></DxcHeading>
          <DxcText as="p">
            The header is an important component in the interface, it is the
            area dedicated for the navigation across the application and helps
            users understand what the content of the page is about. They appear
            at the top of a page, above the main content.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default HeaderPageHeading;
