import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const ChipPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/chip" },
    { label: "Code", path: "/components/chip/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Chip" />
          <DxcParagraph>
            A chip is a compact element used to label, filter, or represent pieces of information within an interface.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ChipPageHeading;
