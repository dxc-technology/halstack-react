import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const AlertPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/alert" },
    { label: "Specifications", path: "/components/alert/specifications" },
  ];

  return (
    <DxcStack gutter="xxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Alert" weight="bold"></DxcHeading>
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
