import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ApplicationLayoutPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/application-layout" },
    {
      label: "Specifications",
      path: "/components/application-layout/specifications",
    },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Application layout" status="Ready" />
          <DxcParagraph>
            The application layout provides a base UI wrapper for any
            application built with Halstack.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ApplicationLayoutPageHeading;
