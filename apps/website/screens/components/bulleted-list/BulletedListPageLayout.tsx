import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcParagraph } from "@repo/ui";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BulletedListPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/bulleted-list" },
    { label: "Usage", path: "/components/bulleted-list/usage" },
    {
      label: "Specifications",
      path: "/components/bulleted-list/specifications",
    },
  ];
  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Bulleted List" />
          <DxcParagraph>Bulleted list are used to display text items in a bulleted format.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BulletedListPageHeading;
