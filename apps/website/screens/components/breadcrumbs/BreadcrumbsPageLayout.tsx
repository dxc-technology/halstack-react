import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const BreadcrumbsPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/breadcrumbs" },
    { label: "Code", path: "/components/breadcrumbs/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Breadcrumbs" />
          <DxcParagraph>
            A breadcrumbs trail is a secondary form of navigation that allows users to keep track and maintain awareness
            of their location as they move through a hierarchically structured web application.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BreadcrumbsPageHeading;
