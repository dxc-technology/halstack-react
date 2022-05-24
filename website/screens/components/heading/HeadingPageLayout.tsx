import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const HeadingPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/heading" },
    { label: "Specifications", path: "/components/heading/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Heading" weight="bold"></DxcHeading>
          <DxcText as="p">
            Heading component is an essential element that contributes to define
            a great hierarchy within the application. It helps to give semantic
            meaning to the content as well as contributing to define a good
            structure for SEO (search engine optimization). The implementation
            will rely on the use of HTML tags.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default HeadingPageHeading;
