import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const BoxPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/box" },
    { label: "Specifications", path: "/components/box/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Box" weight="bold"></DxcHeading>
          <DxcText as="p">
            There are different ways to organise the content on the webpage to
            facilitate the user according to his nature of interaction with the
            content like forms, tables, lists etc. One of the best ways to
            organize the webpage is by using groups of related content, this can
            be achieved by using a dedicated Box component.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default BoxPageHeading;
