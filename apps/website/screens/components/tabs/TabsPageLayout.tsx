import { DxcParagraph, DxcFlex } from "@repo/ui";
import PageHeading from "@/common/PageHeading";
import TabsPageLayout from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const TabsPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/tabs" },
    { label: "Usage", path: "/components/tabs/usage" },
    { label: "Specifications", path: "/components/tabs/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Tabs" />
          <DxcParagraph>
            Tabs allow the user to interact across the sections to switch from one set of content to another, making the
            transition easily from one peer to the other.
          </DxcParagraph>
          <TabsPageLayout tabs={tabs}></TabsPageLayout>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TabsPageHeading;
