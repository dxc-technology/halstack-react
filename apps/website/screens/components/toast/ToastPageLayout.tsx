import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const ToastPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/toast" },
    { label: "Usage", path: "/components/toast/usage" },
    { label: "Specifications", path: "/components/toast/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Toast" />
          <DxcParagraph>
            The toast component is a lightweight notification element that appears temporarily to provide feedback or
            updates to the user. It is commonly used to communicate non-critical information, such as success messages,
            warning alerts, or brief updates.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ToastPageHeading;
