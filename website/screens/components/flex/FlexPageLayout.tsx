import { DxcParagraph, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const FlexPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/flex" },
    { label: "Usage", path: "/components/flex/usage" },
    { label: "Specifications", path: "/components/flex/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Flex" />
          <DxcParagraph>
            Flex allows users to build{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
            >
              Flexible Box Module
            </DxcLink>{" "}
            based layouts. It serves as a technical component that abstracts
            users from working directly with CSS Flexbox and helps them write
            more semantic layouts.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default FlexPageHeading;
