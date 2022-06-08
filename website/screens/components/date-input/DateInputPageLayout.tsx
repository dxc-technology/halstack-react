import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

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
          <DxcHeading level={1} text="Date Input" weight="bold"></DxcHeading>
          <DxcText as="p">
            A date input is a user interface element where the user can type or
            select a date in a predefined format.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default DateInputPageHeading;
