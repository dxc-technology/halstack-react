import { DxcParagraph, DxcFlex, DxcAlert, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import Link from "next/link";
import { ReactNode } from "react";

const TagPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/tag" },
    { label: "Usage", path: "/components/tag/usage" },
    { label: "Specifications", path: "/components/tag/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Tag" />
          <DxcParagraph>
            The Tag represents resources and global terms to identify and linked with a text section to provide to the
            user more context and information regarding a topic. It usually appears in the top or bottom of the section
            and multiple tags can be concatenated to generate a series of resources displayed with a visual hierarchy
            that calls the user&#39;s attention.
          </DxcParagraph>
          <DxcAlert
            title="Deprecated"
            semantic="warning"
            message={{
              text: (
                <>
                  This component will be removed from Halstack Design System in the next major release. Please start
                  considering alternatives such as the{" "}
                  <Link href="/components/badge" passHref legacyBehavior>
                    <DxcLink href="/components/badge">Badge</DxcLink>
                  </Link>{" "}
                  , the{" "}
                  <Link href="/components/button" passHref legacyBehavior>
                    <DxcLink href="/components/button">Button</DxcLink>
                  </Link>{" "}
                  or the{" "}
                  <Link href="/components/chip" passHref legacyBehavior>
                    <DxcLink href="/components/chip">Chip</DxcLink>
                  </Link>{" "}
                  components.
                </>
              ),
            }}
            closable={false}
          />
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TagPageHeading;
