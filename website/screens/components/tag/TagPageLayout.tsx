import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const TagPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/tag" },
    { label: "Specifications", path: "/components/tag/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Tag" weight="bold"></DxcHeading>
          <DxcText as="p">
            The Tag represents resources and global terms to identify and linked
            with a text section to provide to the user more context and
            information regarding a topic. It usually appears in the top or
            bottom of the section and multiple tags can be concatenated to
            generate a series of resources displayed with a visual hierarchy
            that calls the user&#39;s attention.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default TagPageHeading;
