import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import PageHeading from "@/common/PageHeading";

const AccordionPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/accordion" },
    { label: "Specifications", path: "/components/accordion/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Accordion" weight="bold"></DxcHeading>
          <DxcText as="p">
            Accordions are used to group similar content and hide or show it
            depending on user needs or preferences. Accordions give users more
            granular control over the interface and help digest content in
            stages, rather than all at once.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default AccordionPageHeading;
