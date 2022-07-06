import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
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
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Wizard" status="Ready" />
          <DxcText as="p">
            Wizard represents a stepped workflow as a form of linear and
            mandatory progression through a defined process with several bullet
            points where the user need to interact with the content of each step
            during the workflow.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default WizardPageHeading;
