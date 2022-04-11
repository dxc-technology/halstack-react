import PageHeading from "../../common/TabsPageLayout";

const FileInputPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/file-input" },
    {
      label: "Specifications",
      path: "/components/file-input/specifications",
    },
  ];

  return (
    <PageHeading
      title="File Input"
      description="The file input component is used to choose files from any location in the local machine and update those files to the server where the application is hosted. It is a common procedure in applications where files are required, like documents, images, or other information in digital formats."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default FileInputPageHeading;
