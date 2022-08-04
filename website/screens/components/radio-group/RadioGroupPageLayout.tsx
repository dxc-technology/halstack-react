import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
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
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Radio Group" status="Experimental" />
          <DxcParagraph>
            A radio group let the user make a mutually exclusive selection from
            a group of options.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default RadioGroupPageHeading;
