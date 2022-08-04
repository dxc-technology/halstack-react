import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BoxPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/box" },
    { label: "Usage", path: "/components/box/usage" },
    { label: "Specifications", path: "/components/box/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Box" status="Ready" />
          <DxcParagraph>
            There are different ways to organise the content on the webpage to
            facilitate the user according to his nature of interaction with the
            content like forms, tables, lists etc. One of the best ways to
            organize the webpage is by using groups of related content, this can
            be achieved by using a dedicated Box component.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default BoxPageHeading;
