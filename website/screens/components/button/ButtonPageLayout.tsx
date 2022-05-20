import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const ButtonPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/button" },
    { label: "Specifications", path: "/components/button/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Button" weight="bold"></DxcHeading>
          <DxcText as="p">
            Buttons are basic interface elements that initialize an action or
            function when the user interacts with them. The appearance of the
            button should suggest the user takes an action that leads to
            different scenarios. These elements that reinforce to the user the
            necessity to interact are called CTA (Call to Action) components,
            which basically are designed to capture user attention and improve
            the user experience within the application.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default ButtonPageHeading;
