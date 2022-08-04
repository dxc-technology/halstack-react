import PageHeading from "@/common/PageHeading";
import {
  DxcHeading,
  DxcStack,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";

const BulletedListPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/bulleted-list" },
    { label: "Usage", path: "/components/bulleted-list/usage" },
    {
      label: "Specifications",
      path: "/components/bulleted-list/specifications",
    },
  ];
  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Bulleted list" weight="bold"></DxcHeading>
          <DxcParagraph>
            Bulleted list are used to display text items in a bulleted format.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default BulletedListPageHeading;
