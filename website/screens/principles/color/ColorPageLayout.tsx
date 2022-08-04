import {
  DxcHeading,
  DxcParagraph,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const ColorPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/principles/color" },
    { label: "Usage", path: "/principles/color/usage" },
  ];
  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Color" weight="bold"></DxcHeading>
          <DxcParagraph>
            This section explains and shows examples of all colors used in
            Halstack Design System.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ColorPageHeading;
