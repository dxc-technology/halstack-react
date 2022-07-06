import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const CheckboxPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/checkbox" },
    { label: "Usage", path: "/components/checkbox/usage" },
    { label: "Specifications", path: "/components/checkbox/specifications" },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Checkbox" status="Ready" />
          <DxcText as="p">
            Checkboxes are inputs that offer to the user the possibility to
            select one or more options from a range of attributes.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default CheckboxPageHeading;
