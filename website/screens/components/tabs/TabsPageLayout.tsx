import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageLayout from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const TabsPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/tabs" },
    { label: "Usage", path: "/components/tabs/usage" },
    { label: "Specifications", path: "/components/tabs/specifications" },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Tabs" status="Ready" />
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
