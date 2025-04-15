import { DxcParagraph, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import Link from "next/link";
import { ReactNode } from "react";

const SidenavPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/sidenav" },
    { label: "Usage", path: "/components/sidenav/usage" },
    { label: "Specifications", path: "/components/sidenav/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Sidenav" />
          <DxcParagraph>
            The sidenav component is part of the layout of the application and it makes easier to divide the main screen
            into two different areas. The main area will have all the content and the sidenav as a secondary element as
            an index, including links to different resources on the web page.
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
