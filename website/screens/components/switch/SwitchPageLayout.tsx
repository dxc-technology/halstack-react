import TabsPageHeading from "../../common/TabsPageLayout";
import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";

const SwitchPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/switch" },
    { label: "Specifications", path: "/components/switch/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Switch" weight="bold"></DxcHeading>
          <DxcText as="p">
            Switch toggles are elements that can get two simple states, each of
            them has an impact on the system and it can be switched on or off,
            there are no more options. If the switch toggle is on one state, the
            action to change it will modify to value of the element to the
            contrary.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default SwitchPageHeading;
