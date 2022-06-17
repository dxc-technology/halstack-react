import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageLayout from "@/common/TabsPageLayout";

const TabsPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/tabs" },
    { label: "Usage", path: "/components/tabs/usage" },
    { label: "Specifications", path: "/components/tabs/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Tabs" weight="bold"></DxcHeading>
          <DxcText as="p">
            Tabs allow the user to interact across the sections to switch from
            one set of content to another, making the transition easily from one
            peer to the other.
          </DxcText>
          <TabsPageLayout tabs={tabs}></TabsPageLayout>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default TabsPageHeading;
