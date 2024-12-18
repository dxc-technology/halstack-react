import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const QuickNavPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/quick-nav" },
    { label: "Usage", path: "/components/quick-nav/usage" },
    { label: "Specifications", path: "/components/quick-nav/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Quick Nav" />
          <DxcParagraph>
            The quick nav component allows navigation inside a page. It renders the links according to the headings of
            the content in order to navigate to each section. The navigation is done using the link label or the link
            label plus sublink label when it is a sublink. If there is any space, it will be replaced by '-'.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default QuickNavPageHeading;
