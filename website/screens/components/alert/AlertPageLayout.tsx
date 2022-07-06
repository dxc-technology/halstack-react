import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const AlertPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/alert" },
    { label: "Usage", path: "/components/alert/usage" },
    { label: "Specifications", path: "/components/alert/specifications" },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Alert" status="Ready" />
          <DxcText as="p">
            Alert messages are meant to provide contextual feedback about
            important changes in the interface.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default AlertPageHeading;
