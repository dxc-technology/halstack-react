import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const SwitchPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/switch" },
    { label: "Usage", path: "/components/switch/usage" },
    { label: "Specifications", path: "/components/switch/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Switch" />
          <DxcParagraph>
            Switch toggles are elements that can get two simple states, each of them has an impact on the system and it
            can be switched on or off, there are no more options. If the switch toggle is on one state, the action to
            change it will modify to value of the element to the contrary.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default SwitchPageHeading;
