import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const FooterPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/footer" },
    { label: "Specifications", path: "/components/footer/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Footer" weight="bold"></DxcHeading>
          <DxcText as="p">
            Footers are a secondary element in a web page because they usually
            appear at the bottom and it is the last thing that the user
            interacts with. But the presence of the footer must be designed in
            every application and be part of it (consumer or back-office) as it
            is a key layout element to the overall experience. Is a choice of
            the designer to either leave the footer visible by default or push
            it down, depending on the use case.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default FooterPageHeading;
