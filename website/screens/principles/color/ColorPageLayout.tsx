import {
  DxcHeading,
  DxcParagraph,
  DxcStack,
} from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const ColorPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/principles/color" },
    { label: "Usage", path: "/principles/color/usage" },
  ];
  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Color" weight="bold"></DxcHeading>
          <DxcParagraph>
            This section explains and shows examples of all colors used in
            Halstack Design System.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ColorPageHeading;
