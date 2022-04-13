import PageHeading from "../../common/TabsPageLayout";

const PaginatorPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/paginator" },
    { label: "Specifications", path: "/components/paginator/specifications" },
  ];

  return (
    <PageHeading
      title="Paginator"
      description="The paginator component allows dividing large amounts of content into multiple pages."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default PaginatorPageHeading;
