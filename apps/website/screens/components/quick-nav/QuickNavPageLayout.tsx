import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const QuickNavPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/quick-nav" },
    { label: "Code", path: "/components/quick-nav/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Quick Nav" />
          <DxcParagraph>
            The Quick Nav component allows navigation inside a page. It renders links according to the headings of the
            content structure, enabling users to jump to specific sections. The navigation label is based on the section
            title or a combination of section and sub-section titles (for nested links). If a heading includes spaces,
            they are replaced with hyphens (<code>-</code>) in the URL.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default QuickNavPageHeading;
