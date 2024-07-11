import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const TooltipPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/tooltip" },
    { label: "Usage", path: "/components/tooltip/usage" },
    {
      label: "Specifications",
      path: "/components/tooltip/specifications",
    },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Tooltip" />
          <DxcParagraph>
            A tooltip is a descriptive or supplementary element that is
            displayed when an object is focused or hovered over. They are
            typically employed to enhance user experience by offering brief and
            helpful descriptions, instructions or tips without cluttering the
            interface.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TooltipPageHeading;
