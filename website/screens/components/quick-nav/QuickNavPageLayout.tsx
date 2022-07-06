import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const QuickNavPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [{ label: "Code", path: "/components/quick-nav" }];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Quick Nav" status="Experimental" />
          <DxcText as="p">
            The quick nav component allows navigation inside a page. It renders
            the links according to the headings of the content in order to
            navigate to each section.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default QuickNavPageHeading;
