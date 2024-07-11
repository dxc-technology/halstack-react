import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const InsetPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/inset" },
    { label: "Usage", path: "/components/inset/usage" },
    { label: "Specifications", path: "/components/inset/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Inset" />
          <DxcParagraph>Inset layout applies positive spacing scale to its child nodes.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default InsetPageHeading;
