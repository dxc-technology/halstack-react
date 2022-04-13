import PageHeading from "../../common/TabsPageLayout";

const TextInputPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/text-input" },
    { label: "Specifications", path: "/components/text-input/specifications" },
  ];

  return (
    <PageHeading
      title="Text Input"
      description="Text inputs are input fields typically used in forms that allow the user to enter text data in a structured format."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default TextInputPageHeading;
