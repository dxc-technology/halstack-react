import { DxcParagraph, DxcFlex } from "@repo/ui";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const NumberInputPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/nav-tabs" },
    { label: "Usage", path: "/components/nav-tabs/usage" },
    { label: "Specifications", path: "/components/nav-tabs/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Nav Tabs" />
          <DxcParagraph>
            Nav tabs function in the same way as the tab component but are more focused on navigation across pages or
            links.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default NumberInputPageHeading;
