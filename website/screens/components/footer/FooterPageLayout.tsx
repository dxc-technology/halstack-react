import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const FooterPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/footer" },
    { label: "Usage", path: "/components/footer/usage" },
    { label: "Specifications", path: "/components/footer/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Footer" status="Ready" />
          <DxcParagraph>
            Footers are a secondary element in a web page because they usually
            appear at the bottom and it is the last thing that the user
            interacts with. But the presence of the footer must be designed in
            every application and be part of it (consumer or back-office) as it
            is a key layout element to the overall experience. Is a choice of
            the designer to either leave the footer visible by default or push
            it down, depending on the use case.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default FooterPageHeading;
