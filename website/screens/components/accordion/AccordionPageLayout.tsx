import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import PageHeading from "@/common/PageHeading";
import ComponentHeading from "@/common/ComponentHeading";

const AccordionPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/accordion" },
    { label: "Usage", path: "/components/accordion/usage" },
    { label: "Specifications", path: "/components/accordion/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Accordion" status="Ready" />
          <DxcParagraph>
            Accordions are used to group similar content and hide or show it
            depending on user needs or preferences. Accordions give users more
            granular control over the interface and help digest content in
            stages, rather than all at once.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default AccordionPageHeading;
