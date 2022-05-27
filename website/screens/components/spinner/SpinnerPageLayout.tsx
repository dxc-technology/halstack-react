import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const SpinnerPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/spinner" },
    { label: "Specifications", path: "/components/spinner/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Spinner" weight="bold"></DxcHeading>
          <DxcText as="p">
            Loading spinner is a waiting indicator in the user interface to
            communicate users an ongoing proccess.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default SpinnerPageHeading;
