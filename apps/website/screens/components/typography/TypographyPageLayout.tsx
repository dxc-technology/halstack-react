import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcAlert } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const TypographyPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/typography" },
    { label: "Usage", path: "/components/typography/usage" },
    { label: "Specifications", path: "/components/typography/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Typography" />
          <DxcAlert
            title="Usage"
            semantic="warning"
            message={{
              messageText:
                "Use this component only if all other Halstack Design System components for adding text DO NOT meet your requirements. This component should always be the LAST OPTION to use.",
            }}
          />
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TypographyPageHeading;
