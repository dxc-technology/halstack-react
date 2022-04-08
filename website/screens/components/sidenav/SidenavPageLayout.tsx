import PageHeading from "../../common/TabsPageLayout";

const SidenavPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/sidenav" },
    { label: "Specifications", path: "/components/sidenav/specifications" },
  ];

  return (
    <PageHeading
      title="Sidenav"
      description="The sidenav component is part of the layout of the application and it makes easier to divide the main screen into two different areas. 
      The main area will have all the content and the sidenav as a secondary element as an index, including links to different resources on the web page."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default SidenavPageHeading;
