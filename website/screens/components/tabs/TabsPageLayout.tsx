import PageHeading from "../../common/TabsPageLayout";

const TabsPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/tabs" },
    { label: "Specifications", path: "/components/tabs/specifications" },
  ];

  return (
    <PageHeading
      title="Tabs"
      description="Tabs allow the user to interact across the sections to switch from one set of content to another, making the transition easily from one peer to the other."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default TabsPageHeading;
