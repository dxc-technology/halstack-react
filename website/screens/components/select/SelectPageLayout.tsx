import TabsPageHeading from "../../common/TabsPageLayout";
import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";

const SelectPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/select" },
    { label: "Specifications", path: "/components/select/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Select" weight="bold"></DxcHeading>
          <DxcText as="p">
            The select component allows users to make single or multiple
            selections from a pre-defined list of options.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default SelectPageHeading;
