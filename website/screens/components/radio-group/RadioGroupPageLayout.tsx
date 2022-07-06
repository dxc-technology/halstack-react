import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const RadioGroupPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/radio-group" },
    { label: "Usage", path: "/components/radio-group/usage" },
    { label: "Specifications", path: "/components/radio-group/specifications" },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Radio Group" status="Experimental" />
          <DxcText as="p">
            A radio group let the user make a mutually exclusive selection from
            a group of options.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default RadioGroupPageHeading;
