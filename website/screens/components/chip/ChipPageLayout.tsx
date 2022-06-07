import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const ChipPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/chip" },
    { label: "Usage", path: "/components/chip/usage" },
    { label: "Specifications", path: "/components/chip/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Chip" weight="bold"></DxcHeading>
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
