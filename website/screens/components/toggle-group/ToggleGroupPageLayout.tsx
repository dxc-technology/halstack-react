import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ToggleGroupPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/toggle-group" },
    { label: "Usage", path: "/components/toggle-group/usage" },
    {
      label: "Specifications",
      path: "/components/toggle-group/specifications",
    },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Toggle Group" status="Ready" />
          <DxcText as="p">
            Toggle buttons can be used to put together related options that
            share a common attribute modification. It allows the user to switch
            from one selected option to another in the same control, having one
            option selected at a time. Also, there can be another variation that
            allows selecting multiple options from the current toggle group.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ToggleGroupPageHeading;
