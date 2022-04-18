import PageHeading from "../../common/TabsPageLayout";

const HeaderPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/header" },
    { label: "Specifications", path: "/components/header/specifications" },
  ];

  return (
    <PageHeading
      title="Header"
      description="The header is an important component in the interface, it is the area
    dedicated for the navigation across the application and helps users understand
    what the content of the page is about. They appear at the top of a page, above
    the main content."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default HeaderPageHeading;
