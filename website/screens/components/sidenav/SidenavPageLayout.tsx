import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const SidenavPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/sidenav" },
    { label: "Specifications", path: "/components/sidenav/specifications" },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Sidenav" status="Ready" />
          <DxcText as="p">
            The sidenav component is part of the layout of the application and
            it makes easier to divide the main screen into two different areas.
            The main area will have all the content and the sidenav as a
            secondary element as an index, including links to different
            resources on the web page.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default SidenavPageHeading;
