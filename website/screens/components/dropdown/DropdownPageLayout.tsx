import { DxcText, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const DropdownPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/dropdown" },
    { label: "Usage", path: "/components/dropdown/usage" },
    { label: "Specifications", path: "/components/dropdown/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Dropdown" status="Ready" />
          <DxcText as="p">
            The use of dropdowns has its advantages but it depends on the screen
            support. Dropdowns are a standard widget, so the users know how to
            interact with them. The options available in a dropdown component
            are static, preventing erroneous data entered by the user since it
            only shows a range of correct values for that input.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default DropdownPageHeading;
