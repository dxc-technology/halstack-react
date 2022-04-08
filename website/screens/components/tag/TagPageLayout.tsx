import PageHeading from "../../common/TabsPageLayout";

const TagPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/tag" },
    { label: "Specifications", path: "/components/tag/specifications" },
  ];

  return (
    <PageHeading
      title="Tag"
      description="The Tag represents resources and global terms to identify and linked with a text section 
      to provide to the user more context and information regarding a topic. 
      It usually appears in the top or bottom of the section and multiple tags can be concatenated 
      to generate a series of resources displayed with a visual hierarchy that calls the user's attention."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default TagPageHeading;
