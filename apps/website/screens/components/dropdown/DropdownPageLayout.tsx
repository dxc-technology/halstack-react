import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const DropdownPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/dropdown" },
    { label: "Code", path: "/components/dropdown/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Dropdown" />
          <DxcParagraph>
            The dropdown component is a compact, interactive element that allows users to select from a list of options,
            reducing clutter in the interface.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default DropdownPageHeading;
