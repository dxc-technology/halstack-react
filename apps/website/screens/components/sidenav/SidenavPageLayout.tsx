import { DxcParagraph, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import Link from "next/link";
import { ReactNode } from "react";

const SidenavPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/sidenav" },
    { label: "Code", path: "/components/sidenav/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Sidenav" />
          <DxcParagraph>
            The sidenav component provides a vertical navigation structure placed on the left side of the interface.
          </DxcParagraph>
          <DxcParagraph>
            The sidenav is part of the application layout, so it can only be used inside of it. Please check the{" "}
            <Link href="/components/application-layout" passHref legacyBehavior>
              <DxcLink>DxcApplicationLayout</DxcLink>
            </Link>{" "}
            documentation.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default SidenavPageHeading;
