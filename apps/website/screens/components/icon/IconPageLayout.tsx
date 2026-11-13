import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const IconPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/icon" },
    { label: "Code", path: "/components/icon/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Icon" />
          <DxcParagraph>
            The Icon component provides a consistent way to display Material Icons and custom SVG icons across Halstack
            applications. It helps users recognize actions, understand information, and navigate interfaces through
            visual representation while maintaining consistency in appearance, sizing, color and accessibility.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default IconPageHeading;
