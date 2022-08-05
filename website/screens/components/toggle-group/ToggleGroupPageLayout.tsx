import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
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
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Toggle Group" status="Ready" />
          <DxcParagraph>
            Toggle buttons can be used to put together related options that
            share a common attribute modification. It allows the user to switch
            from one selected option to another in the same control, having one
            option selected at a time. Also, there can be another variation that
            allows selecting multiple options from the current toggle group.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ToggleGroupPageHeading;
