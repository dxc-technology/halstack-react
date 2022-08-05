import { DxcText, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const DialogPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/dialog" },
    { label: "Usage", path: "/components/dialog/usage" },
    { label: "Specifications", path: "/components/dialog/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Dialog" status="Ready" />
          <DxcText as="p">
            A modal dialog is a message box or child window that requires user
            interaction before returning to the parent window. These boxes
            appear on top of the open parent window that is currently displayed
            on the screen.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default DialogPageHeading;
