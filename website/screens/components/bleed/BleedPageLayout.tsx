import { DxcText, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BleedPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [{ label: "Code", path: "/components/bleed" }];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Bleed" status="Experimental" />
          <DxcText as="p">
            Bleed layout applies negative spacing scale to its child nodes.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BleedPageHeading;
