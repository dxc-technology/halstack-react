import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const ParagraphPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/paragraph" },
    { label: "Usage", path: "/components/paragraph/usage" },
    { label: "Specifications", path: "/components/paragraph/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Paragraph" />
          <DxcParagraph>Paragraph is a block of text.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ParagraphPageHeading;
