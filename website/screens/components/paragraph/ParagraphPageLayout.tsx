import PageHeading from "@/common/PageHeading";
import {
  DxcHeading,
  DxcFlex,
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
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Paragraph" weight="bold"></DxcHeading>
          <DxcParagraph>Paragraph is a block of text.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ParagraphPageHeading;
