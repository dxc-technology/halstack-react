import PageHeading from "../../common/TabsPageLayout";

const LinkPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/link" },
    { label: "Specifications", path: "/components/link/specifications" },
  ];

  return (
    <PageHeading
      title="Link"
      description="Links are used as navigational elements. They may appear isolated, inside a
    sentence or paragraph or following the content."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default LinkPageHeading;
