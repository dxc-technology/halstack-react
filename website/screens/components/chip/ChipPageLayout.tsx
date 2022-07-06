import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ChipPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/chip" },
    { label: "Usage", path: "/components/chip/usage" },
    { label: "Specifications", path: "/components/chip/specifications" },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Chip" status="Ready" />
          <DxcText as="p">
            Chips are elements that represent status, complementary information,
            or association between elements.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ChipPageHeading;
