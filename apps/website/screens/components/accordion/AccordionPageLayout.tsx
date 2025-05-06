import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import PageHeading from "@/common/PageHeading";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const AccordionPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/accordion" },
    { label: "Code", path: "/components/accordion/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Accordion" />
          <DxcParagraph>
            The accordion component is a vertical stack of interactive headers used to group related content into
            collapsible sections, allowing users to expand or hide content based on their needs or preferences. It
            enhances the user experience by organizing information into smaller, digestible chunks, helping reduce
            cognitive load and save screen space.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default AccordionPageHeading;
