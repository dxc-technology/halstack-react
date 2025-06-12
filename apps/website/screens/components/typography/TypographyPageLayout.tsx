import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcAlert, DxcParagraph } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const TypographyPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/typography" },
    { label: "Code", path: "/components/typography/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Typography" />
          <DxcParagraph>
            Typography component is a primitive. This means that using this component, you can create any typography
            variant that is included in the Halstack Design System.
          </DxcParagraph>
          <DxcAlert
            title="Usage"
            semantic="warning"
            message={{
              text: "Use this component only if all other Halstack Design System components for adding text DO NOT meet your requirements. This component should always be the LAST OPTION to use.",
            }}
            closable={false}
          />
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TypographyPageHeading;
