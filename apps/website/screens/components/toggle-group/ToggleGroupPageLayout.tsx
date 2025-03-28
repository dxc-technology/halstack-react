import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const ToggleGroupPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/toggle-group" },
    { label: "Code", path: "/components/toggle-group/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Toggle group" />
          <DxcParagraph>
            Toggle buttons can be used to put together related options that share a common attribute modification. It
            allows the user to switch from one selected option to another in the same control, having one option
            selected at a time. Also, there can be another variation that allows selecting multiple options from the
            current toggle group.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ToggleGroupPageHeading;
