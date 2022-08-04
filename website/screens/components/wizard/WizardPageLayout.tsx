import { DxcText, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const WizardPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/wizard" },
    { label: "Usage", path: "/components/wizard/usage" },
    { label: "Specifications", path: "/components/wizard/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Wizard" status="Ready" />
          <DxcText as="p">
            Wizard represents a stepped workflow as a form of linear and
            mandatory progression through a defined process with several bullet
            points where the user need to interact with the content of each step
            during the workflow.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default WizardPageHeading;
