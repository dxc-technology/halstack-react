import TabsPageHeading from "../../common/TabsPageLayout";
import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";

const LinkPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/link" },
    { label: "Specifications", path: "/components/link/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Link" weight="bold"></DxcHeading>
          <DxcText as="p">
            Links are used as navigational elements. They may appear isolated,
            inside a sentence or paragraph or following the content.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default LinkPageHeading;
