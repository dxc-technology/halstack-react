import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
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
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Nav Tabs" status="Experimental" />
          <DxcParagraph>
            Nav tabs allow the user to navigate easily.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default NumberInputPageHeading;
