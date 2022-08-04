import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ButtonPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/button" },
    { label: "Usage", path: "/components/button/usage" },
    { label: "Specifications", path: "/components/button/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Button" status="Ready" />
          <DxcParagraph>
            Buttons are basic interface elements that initialize an action or
            function when the user interacts with them. The appearance of the
            button should suggest the user takes an action that leads to
            different scenarios. These elements that reinforce to the user the
            necessity to interact are called CTA (Call to Action) components,
            which basically are designed to capture user attention and improve
            the user experience within the application.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ButtonPageHeading;
