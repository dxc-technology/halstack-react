import { DxcParagraph, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const GridPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [{ label: "Code", path: "/components/grid" }];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Grid" status="Experimental" />
          <DxcParagraph>
            Grid allows users to build{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
            >
              CSS Grid Layout
            </DxcLink>{" "}
            based layouts.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default GridPageHeading;
