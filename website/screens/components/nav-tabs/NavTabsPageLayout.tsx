import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const NumberInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [{ label: "Code", path: "/components/nav-tabs" }];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Nav Tabs" weight="bold"></DxcHeading>
          <DxcText as="p">Nav tabs allow the user to navigate easily.</DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default NumberInputPageHeading;
