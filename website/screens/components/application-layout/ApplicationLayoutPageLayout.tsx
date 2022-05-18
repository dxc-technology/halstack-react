import TabsPageHeading from "../../common/TabsPageLayout";
import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";

const ApplicationLayoutPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Usage", path: "/components/application-layout" },
    {
      label: "Specifications",
      path: "/components/application-layout/specifications",
    },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading
            level={1}
            text="Application layout"
            weight="bold"
          ></DxcHeading>
          <DxcText>
            The application layout provides a base UI wrapper for any
            application built with Halstack.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ApplicationLayoutPageHeading;
