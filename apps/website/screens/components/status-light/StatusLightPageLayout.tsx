import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const StatusLightPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/status-light" },
    { label: "Code", path: "/components/status-light/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Status light" />
          <DxcParagraph>
            Status light is a small, color-coded visual indicator used to represent the state or condition of a system,
            process, or component. It provides at-a-glance feedback, helping users quickly assess statuses without
            needing detailed explanations.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default StatusLightPageHeading;
