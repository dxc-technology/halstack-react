import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const NumberInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [{ label: "Code", path: "/components/nav-tabs" }];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Nav Tabs" status="Experimental" />
          <DxcText as="p">Nav tabs allow the user to navigate easily.</DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default NumberInputPageHeading;
