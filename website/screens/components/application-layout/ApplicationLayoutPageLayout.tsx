import PageHeading from "../../common/TabsPageLayout";

const ApplicationLayoutPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/application-layout" },
    { label: "Specifications", path: "/components/application-layout/specifications" },
  ];

  return (
    <PageHeading
      title="Application layout"
      description="The application layout provides a base UI wrapper for any application built with Halstack. "
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ApplicationLayoutPageHeading;
