import PageHeading from "../../common/TabsPageLayout";

const AlertPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/alert" },
    { label: "Specifications", path: "/components/alert/specifications" },
  ];

  return (
    <PageHeading
      title="Alert"
      description="Alert messages are meant to provide contextual feedback about important changes in the interface."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default AlertPageHeading;
