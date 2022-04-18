import PageHeading from "../../common/TabsPageLayout";

const SpinnerPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/spinner" },
    { label: "Specifications", path: "/components/spinner/specifications" },
  ];

  return (
    <PageHeading
      title="Spinner"
      description="Loading spinner is a waiting indicator in the user interface to communicate users an ongoing proccess."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default SpinnerPageHeading;
