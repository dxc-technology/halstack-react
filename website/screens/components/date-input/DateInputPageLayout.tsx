import React from "react";
import PageHeading from "../../common/TabsPageLayout";

const DateInputPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/date-input" },
    { label: "Specifications", path: "/components/date-input/specifications" },
  ];

  return (
    <PageHeading
      title="Date Input"
      description="A date input is a user interface element where the user can type or select a date in a predefined format."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default DateInputPageHeading;
