import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const DateInputPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/date-input" },
    { label: "Usage", path: "/components/date-input/usage" },
    { label: "Specifications", path: "/components/date-input/specifications" },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Date Input" status="Ready" />
          <DxcParagraph>
            A date input is a user interface element where the user can type or
            select a date in a predefined format.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default DateInputPageHeading;
