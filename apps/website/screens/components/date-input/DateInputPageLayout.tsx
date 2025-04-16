import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const DateInputPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/date-input" },
    { label: "Code", path: "/components/date-input/code" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Date Input" />
          <DxcParagraph>
            A date input is a user interface element where the user can type or select a date in a predefined format.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default DateInputPageHeading;
