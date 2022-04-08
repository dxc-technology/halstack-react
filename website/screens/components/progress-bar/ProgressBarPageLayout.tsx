import PageHeading from "../../common/TabsPageLayout";

const ProgressBarPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Usage", path: "/components/progress-bar" },
    {
      label: "Specifications",
      path: "/components/progress-bar/specifications",
    },
  ];

  return (
    <PageHeading
      title="Progress Bar"
      description="Progress indicators offer visibility of system status to the user, giving feedback to indicate that the application is taking some time to processing data. The main aim of these components is to reduce the user's uncertainty about offering something to look at while the user is waiting for the end.
      A progress bar should be used in any scenario that will take more than 1 second in performing the action, for anything that takes less than that time, it will be distracting for the user."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default ProgressBarPageHeading;
