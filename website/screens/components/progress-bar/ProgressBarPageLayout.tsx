import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ProgressBarPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/progress-bar" },
    { label: "Usage", path: "/components/progress-bar/usage" },
    {
      label: "Specifications",
      path: "/components/progress-bar/specifications",
    },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Progress Bar" status="Ready" />
          <DxcParagraph>
            Progress indicators offer visibility of system status to the user,
            giving feedback to indicate that the application is taking some time
            to processing data. The main aim of these components is to reduce
            the user&#39;s uncertainty about offering something to look at while
            the user is waiting for the end. A progress bar should be used in
            any scenario that will take more than 1 second in performing the
            action, for anything that takes less than that time, it will be
            distracting for the user.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ProgressBarPageHeading;
