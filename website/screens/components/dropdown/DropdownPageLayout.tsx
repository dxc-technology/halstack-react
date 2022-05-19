import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const DropdownPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/dropdown" },
    { label: "Specifications", path: "/components/dropdown/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Dropdown" weight="bold"></DxcHeading>
          <DxcText as="p">
            The use of dropdowns has its advantages but it depends on the screen
            support. Dropdowns are a standard widget, so the users know how to
            interact with them. The options available in a dropdown component
            are static, so this prevents from erroneous data entered by the user
            since it only shows a range of correct values for that input.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default DropdownPageHeading;
