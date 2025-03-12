import { DxcHeading, DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import { ReactNode } from "react";

const TypographyPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/principles/typography" },
    { label: "Usage", path: "/principles/typography/usage" },
  ];
  
  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Typography" weight="bold" />
          <DxcParagraph>
            This section explains and shows examples of all the typographic variables included in Halstack Design
            System.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TypographyPageHeading;
