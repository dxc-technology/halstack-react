import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const InsetPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/inset" },
    { label: "Code", path: "/components/inset/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Inset" />
          <DxcParagraph>Inset layout applies positive spacing scale to its child nodes.</DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default InsetPageHeading;
