import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const BulletedListPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/bulleted-list" },
    { label: "Code", path: "/components/bulleted-list/code" },
  ];
  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Bulleted List" />
          <DxcParagraph>Bulleted list are used to display text items in a bulleted format.</DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BulletedListPageHeading;
