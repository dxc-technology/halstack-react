import PageHeading from "@/common/PageHeading";
import {
  DxcHeading,
  DxcStack,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";

const ParagraphPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/paragraph" },
    { label: "Usage", path: "/components/paragraph/usage" },
    { label: "Specifications", path: "/components/paragraph/specifications" },
  ];
  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Paragraph" weight="bold"></DxcHeading>
          <DxcParagraph>Paragraph is a block of text.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ParagraphPageHeading;
