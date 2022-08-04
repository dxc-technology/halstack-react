import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const InsetPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [{ label: "Code", path: "/components/inset" }];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Inset" status="Experimental" />
          <DxcParagraph>
            Inset layout applies positive spacing scale to its child nodes.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default InsetPageHeading;
