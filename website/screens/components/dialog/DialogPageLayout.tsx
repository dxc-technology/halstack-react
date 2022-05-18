import TabsPageHeading from "../../common/TabsPageLayout";
import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";

const DialogPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/dialog" },
    { label: "Specifications", path: "/components/dialog/specifications" },
  ];

  return (
    <DxcStack gutter="xxxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Dialog" weight="bold"></DxcHeading>
          <DxcText as="p">
            A modal dialog is a message box or child window that requires user
            interaction before returning to the parent window. These boxes
            appear on top of the open parent window that is currently displayed
            on the screen.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default DialogPageHeading;
