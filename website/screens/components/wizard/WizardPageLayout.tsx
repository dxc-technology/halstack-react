import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const WizardPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/wizard" },
    { label: "Specifications", path: "/components/wizard/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Wizard" weight="bold"></DxcHeading>
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
