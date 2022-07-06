import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const StackPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [{ label: "Code", path: "/components/stack" }];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Stack" status="Experimental" />
          <DxcText as="p">
            Stack layout arranges child nodes vertically, wrapping them into
            multiple columns if needed, with equal spacing between items.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default StackPageHeading;
