import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BadgePageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/badge" },
    { label: "Usage", path: "/components/badge/usage" },
    { label: "Specifications", path: "/components/badge/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Badge" />
          <DxcParagraph>
            The badge component enables users to categorize content effectively
            and uniformly across their interfaces. It offers a quick overview of
            a category or status and is frequently used to display numerical or
            status data.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BadgePageHeading;
