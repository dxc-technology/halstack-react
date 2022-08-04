import {
  DxcHeading,
  DxcParagraph,
  DxcStack,
} from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const TypographyPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/principles/typography" },
    { label: "Usage", path: "/principles/typography/usage" },
  ];
  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Typography" weight="bold"></DxcHeading>
          <DxcParagraph>
            This section explains and shows examples of all the typographic
            variables included in Halstack Design System.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default TypographyPageHeading;
