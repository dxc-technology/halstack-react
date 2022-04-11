import PageHeading from "../../common/TabsPageLayout";

const TextareaPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/textarea" },
    { label: "Specifications", path: "/components/textarea/specifications" },
  ];

  return (
    <PageHeading
      title="Textarea"
      description="A textarea allows the users enter a multi-line, free-form text."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default TextareaPageHeading;
