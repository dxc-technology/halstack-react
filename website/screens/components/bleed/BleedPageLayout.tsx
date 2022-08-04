import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BleedPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [{ label: "Code", path: "/components/bleed" }];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Bleed" status="Experimental" />
          <DxcParagraph>
            Bleed layout applies negative spacing scale to its child nodes.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default BleedPageHeading;
