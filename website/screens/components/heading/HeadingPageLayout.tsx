import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const HeadingPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/heading" },
    { label: "Usage", path: "/components/heading/usage" },
    { label: "Specifications", path: "/components/heading/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Heading" status="Ready" />
          <DxcParagraph>
            Heading component is an essential element that contributes to define
            a great hierarchy within the application. It helps to give semantic
            meaning to the content as well as contributing to define a good
            structure for SEO (search engine optimization). The implementation
            will rely on the use of HTML tags.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default HeadingPageHeading;
