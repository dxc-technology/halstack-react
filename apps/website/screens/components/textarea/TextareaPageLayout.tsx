import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const TextareaPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/textarea" },
    { label: "Usage", path: "/components/textarea/usage" },
    { label: "Specifications", path: "/components/textarea/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Textarea" />
          <DxcParagraph>A textarea allows the users enter a multi-line, free-form text.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TextareaPageHeading;
