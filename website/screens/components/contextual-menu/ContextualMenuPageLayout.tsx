import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ContextualMenuPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/contextual-menu" },
    { label: "Usage", path: "/components/contextual-menu/usage" },
    { label: "Specifications", path: "/components/contextual-menu/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Contextual Menu" />
          <DxcParagraph>
            The contextual menu is a powerful component that improves user
            experience by allowing users to navigate through page-level content
            or choose from a list of actions while complementing the general
            disposition of the main content within the interface.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ContextualMenuPageHeading;
