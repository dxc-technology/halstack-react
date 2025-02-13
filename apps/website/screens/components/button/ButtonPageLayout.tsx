import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const ButtonPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/button" },
    { label: "Code", path: "/components/button/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Button" />
          <DxcParagraph>
            Buttons are basic interface elements that initialize an action or function when the user interacts with
            them.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ButtonPageHeading;
