import { DxcText, DxcFlex } from "@dxc-technology/halstack-react";
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
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Box" status="Ready" />
          <DxcText as="p">
            There are different ways to organise the content on the webpage to
            facilitate the user according to his nature of interaction with the
            content like forms, tables, lists etc. One of the best ways to
            organize the webpage is by using groups of related content, this can
            be achieved by using a dedicated Box component.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BoxPageHeading;
