import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const TagPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/tag" },
    { label: "Usage", path: "/components/tag/usage" },
    { label: "Specifications", path: "/components/tag/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Tag" />
          <DxcParagraph>
            The Tag represents resources and global terms to identify and linked
            with a text section to provide to the user more context and
            information regarding a topic. It usually appears in the top or
            bottom of the section and multiple tags can be concatenated to
            generate a series of resources displayed with a visual hierarchy
            that calls the user&#39;s attention.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TagPageHeading;
